import { useEffect, useState } from 'react'
import axios from 'axios'
import Pokemon from '../Pokemon/Pokemon.jsx'
import './pokemonList.css'


function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon';

    async function downloadPokemons() {
        const response = await axios.get(POKEDEX_URL);  //fetch pokemons from the api
        const pokemonResults = response.data.results;   // create an array of pokemons

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
    }, []);                                   //everytime the value in the array changes , the effect is called

    return (
        <>
            <div className="pokemonListWrapper" >

                <div className="AllPokemonWrapper">
                    {(isLoading) ? "Loading..." :
                        pokemonList.map((p) => {
                            return <Pokemon key={p.id} name={p.name} image={p.image} />
                        })
                    }
                </div>

                <div className='controls'>
                    <button>prev</button>
                    <button>next</button>
                </div>

            </div>
        </>
    )
}


export default PokemonList