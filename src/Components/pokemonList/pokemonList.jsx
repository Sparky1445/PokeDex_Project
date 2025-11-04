import { useEffect, useState } from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon.jsx'
import './pokemonList.css'


function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;







    async function downloadPokemons() {

        const response = await axios.get(pokedexUrl);  //fetch pokemons from the api
        const pokemonResults = response.data.results;// create an array of pokemons

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);


        const pokemonResultsPromise = pokemonResults.map((pokemon) => { return axios.get(pokemon.url) })
        //iterating over array of pokemons and getting the url from them and storing it as array of promises
        //that will download those 20 pokemons


        //passing the promises to axios.all() which will return a promise that will resolve when all the promises resolve
        const pokemonData = await axios.all(pokemonResultsPromise); //array of 20 pokemons detailed data
        const res = pokemonData.map((pokedata) => {
            const pokemon = pokedata.data;


            return {
                id: pokemon.id,
                name: pokemon.name,
                types: pokemon.types,
                image: pokemon.sprites.other.dream_world.front_default
                //extracting id name image and type from each pokemon

            }
        });
        setPokemonList(res);
        setIsLoading(false);

    }



    useEffect(() => {
        downloadPokemons();
    }, [pokedexUrl]);                                   //everytime the value in the array changes , the effect is called

    return (
        <>
            <div className="pokemonListWrapper" >
                <p className='pageCount'>Page: {currentPage} / {totalPages} </p>

                <div className="AllPokemonWrapper">
                    {(isLoading) ? "Loading..." :
                        pokemonList.map((p) => {
                            return <Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />
                        })
                    }
                </div>

                <div className='controls'>
                    <button disabled={prevUrl == null} onClick={() => {
                        setPokedexUrl(prevUrl);
                        setCurrentPage(currentPage - 1);
                    }}>prev</button>
                    <button disabled={nextUrl == null} onClick={() => {
                        setPokedexUrl(nextUrl);
                        setCurrentPage(currentPage + 1);
                    }} >next</button>
                </div>

            </div>
        </>
    )
}


export default PokemonList