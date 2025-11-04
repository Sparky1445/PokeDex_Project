import './Pokemon.css'

function Pokemon({ name, image }) {
    return (
        <div className="pokemon">
            <div className='pokemonName'>{String(name).charAt(0).toUpperCase() + String(name).slice(1)}</div>
            <div><img src={image} alt={name} className='pokemonImage' /></div>
        </div>
    )
}

export default Pokemon