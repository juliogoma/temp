import React, { useEffect } from 'react'

const api = () => {
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(resp => resp.json())
        .then(resp => resp.results)
        .then(data => console.log(data))
 
    }, [])
    return (
        <div>

        </div>
    )
}

export default api