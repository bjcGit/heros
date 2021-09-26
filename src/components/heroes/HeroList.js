import React from 'react'
import { GetHeroesByPublisher } from '../../selectors/GetHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = GetHeroesByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                heroes.map( hero => (
                    <HeroCard 
                    key={ hero.id }
                    { ...hero } 
                    />
                ))
            }
        </div>
    )
}
