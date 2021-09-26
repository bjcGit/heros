import { heroes } from "../data/heroes";

export const GetHeroesByPublisher = ( publisher ) =>{

    const valiPublisher = ['DC Comics', 'Marvel Comics'];

    if ( !valiPublisher.includes ( publisher ) ){
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
}