import './pokedex.css'

import Search from '../Search/Search.jsx'
import PokemonList from '../pokemonList/pokemonList.jsx'

function Pokedex() {
    return (
        <>
            <div className="pokedex-wrapper">

                <Search />
                <PokemonList />

            </div>
        </>)
}

export default Pokedex