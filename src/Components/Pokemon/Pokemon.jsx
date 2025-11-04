import './Pokemon.css'
import { Link } from 'react-router-dom'

function Pokemon({ name, image, id }) {
    return (
        <div className="pokemon">
            <Link to={`/pokemon/${id} `} className='Link' >
                <div className='pokemonName'>{String(name).charAt(0).toUpperCase() + String(name).slice(1)}</div>
                <div><img src={image} alt={name} className='pokemonImage' /></div>
            </Link>
        </div>
    )
}

export default Pokemon