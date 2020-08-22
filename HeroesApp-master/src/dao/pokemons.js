import React, { useEffect } from 'react'

const pokemons = () => {
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(resp => resp.json())
 
    }, [])
    return (
        <div>

        </div>
    )
}

export default pokemons