import '../App.css';
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard.js';
import {getTrainers} from '../api/apiCalls.js'


function Entrenadores() {
    const [entrenadores, setEntrenadores] = useState([])
    const fetchTrainers = () =>{
        await getTrainers()
    }

    useEffect((
        fetchTrainers()
    ),[])

    useEffect((console.log({entrenadores})),[entrenadores])

    return (
        <div className="App">
            <h1>PokeDex</h1>
            <div id="poke_container" className="poke_container">
                {entrenadores.map(e => <PokemonCard entrenador={e} detailed={false} />)}
            </div>
        </div>
    );
}

export default Entrenadores;