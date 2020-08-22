import React from 'react'
import {getPokemonByPublisher} from '../../selectors/getPokemonByPublisher'
import PokemonCard from './PokemonCard';


const PokedexList = () => {
    const pokemons = getPokemonByPublisher()
    console.log(pokemons)
    return (
        <div className="card-columns">
            {pokemons.map(pokemon =>( <PokemonCard key={pokemon.name}{...pokemon}/>))}
        </div>
    )
}

export default PokedexList
