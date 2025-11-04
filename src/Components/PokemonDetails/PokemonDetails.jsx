import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './PokemonDetails.css'


function PokemonDetails() {
    const { id } = useParams();
    console.log(id);
    const [pokemon, setPokemon] = useState({});


    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            types: response.data.types.map((type) => { return type.type.name }),
            weight: response.data.weight,
            height: response.data.height

        });
    }

    useEffect(() => {
        downloadPokemon();
    }, []);

    console.log(pokemon.types);
    return (
        <div className="pokemonDetailsWrapper">
            <div className="pokemonName">name: {pokemon.name}</div>
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="pokemonHeight">height: {pokemon.height}</div>
            <div className="pokemonWeight">weight: {pokemon.weight}</div>
            <div className="pokemonTypes">
                {pokemon.types && pokemon.types.map((t) => <div key={t} >{t}</div>)}
            </div>



        </div>
    )





}

export default PokemonDetails