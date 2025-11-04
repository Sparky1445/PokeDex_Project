import './Pokemon.css'

function Pokemon({ name, image }) {
    return (
        <div className="pokemon-wrapper">
            <div>{name}</div>
            <div><img src={image} alt={name} /></div>
        </div>
    )
}

export default Pokemon