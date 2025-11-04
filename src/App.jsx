import './App.css'
import Pokedex from './Components/pokedex/pokedex.jsx'
import Search from './Components/Search/Search.jsx'
import PokemonList from './Components/pokemonList/pokemonList.jsx'
import CustomRoutes from './Routes/CustomRoutes.jsx'
import { Link } from 'react-router-dom'



function App() {

  return (

    <div className="outerWrapper">

      <h1 id="pokedexHeading">
        <Link className='AppLink' to="/">Pokedex</Link>
      </h1>

      <CustomRoutes />

    </div>

  )
}

export default App
