import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRouters = () => {
    return (
        <>
            <Navbar/>

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/marvel/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DcScreen } />

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
