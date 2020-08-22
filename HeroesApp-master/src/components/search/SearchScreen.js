import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';

import useForm from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName'
import HeroCard from '../heroes/HeroCard'



const SearchScreen = ({ history }) => {
    
    const location = useLocation()
    const { q = ''} = queryString.parse(location.search)
    const [formValues, handleInput] = useForm({
        searText: q
    })
    const { searText } = formValues
    const HeroesFiltered = getHeroByName(searText)
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searText}`)
    }
    return (
        <div>
            <h2>Search Screen</h2>
            <hr />
            <div className="row">
                <div className="col-5">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder="Find your hero"
                            name="searText"
                            value=''
                            className="form-control"
                            value={searText}
                            onChange={handleInput}
                        />
                        <button type="submit" className="btn m-t btn-block btn-outline-primary"> Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    {HeroesFiltered.map(hero => (<HeroCard key={hero.id} {...hero} />))}
                </div>

            </div>




        </div>
    )
}

export default SearchScreen
