import './App.css'
import Pokedex from './Components/pokedex/pokedex.jsx'
import Search from './Components/Search/Search.jsx'
import PokemonList from './Components/pokemonList/pokemonList.jsx'

function App() {

  return (
    <div className="pokedex-wrapper">
      <h1 id="pokedexHeading"> <Pokedex /> </h1>
      <Search />
      <PokemonList />

    </div>
  )
}

export default App
