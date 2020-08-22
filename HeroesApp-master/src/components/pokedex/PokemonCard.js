import React from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ({
  name,
  url
}) => {
  return (
    <div className="card ms-2" >
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`./assets/pokemons/${name}.jpg`} className="card-img" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`pokedex/${name}`}>
            Más...
          </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PokemonCard
