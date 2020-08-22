import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {

    const validPublichers = ['DC Comics', 'Marvel Comics'];

    return heroes.filter((hero )=> hero.publisher === publisher)

}