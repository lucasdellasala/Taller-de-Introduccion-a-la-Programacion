import './App.css';
import {useEffect, useState} from "react";
const pokemons_number = 150;
function App() {
    const [list, setList] = useState([])

    const fetchPokemons = async () => {
        const gottaFetchEmAll = []
        for (let i = 1; i <= pokemons_number; i++) {
            gottaFetchEmAll.push(await getPokemon(i));
        }
        await setList(gottaFetchEmAll)
    };

    const getPokemon = async id => {
        const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        return (await res.json());
    }

    const createPokemonCard = (pokemon) => {
        const { id, name, sprites, types } = pokemon;
        const type = types[0].type.name;
        return <div className={'pokemon'}>
            <div className="img-container">
                <img src={sprites.front_default} alt={name}/>
            </div>
            <div className="info">
                <span className="number">{id}</span>
                <h3 className="name">{name}</h3>
                <small className="type">Type: <span>{type}</span></small>
            </div>
        </div>
    }

    useEffect(async () => {
        await fetchPokemons()
    }, [])

    return (
        <div className="App">
            <h1>PokeDex</h1>
            <div id="poke_container" className="poke-container">
                {list.map(createPokemonCard)}
            </div>
        </div>
  );
}

export default App;
