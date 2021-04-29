import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Pokedex from "./components/Pokedex";


export default function App () {

    return (
        <Router>
            <div>
                <nav>
                    <ul className="topnav">
                        <li>
                            <Link to="/">Pokedex</Link>
                        </li>
                        <li>
                            <Link to="/entrenadores">Pokentrenadores</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="//">
                    <Pokedex />
                </Route>
                <Route path="/entrenadores">
                    <Pokedex />
                </Route>
            </Switch>
        </Router>
    )
}
