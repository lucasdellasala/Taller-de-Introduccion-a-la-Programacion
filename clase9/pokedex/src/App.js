import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([])
  const [pokemons_number, setPokemons_number] = useState(0);


  const fetchPokemons = async () => {
    const gottaFetchEmAll = []

    for (let i = 1; i <= pokemons_number; i++) {
      gottaFetchEmAll.push(await getPokemon(i))
    }

    await setList(gottaFetchEmAll)
  }

  const getPokemon = async (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString()
    const res = await fetch(url)
    return (await res.json())
  }

  useEffect(async () => {
    await fetchPokemons()
  }, [pokemons_number])

  //LOGEAMOS LA LISTA DE POKES
  useEffect(async () => {
    console.log(list)
  }, [list])

  useEffect(async () => {
    console.log("Cantidad de pks", pokemons_number)
  }, [pokemons_number])

  const createPokemonCard = (pokemon) => {
    const { name, types, sprites, id } = pokemon
    const type = types[0].type.name

    return (
      <div className="pokemon grow">
        <div className="img-container">
          <img src={sprites.front_default} alt={name} />
        </div>
        <div className="info">
          <span className="number">{id}</span>
          <h3 className="name">{name}</h3>
          <small className="type">{type}</small>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>PokeDex</h1>

      <input 
        key="random1"
        type="number"
        placeholder={"cuantos pokes queres?"}
        onChange={(e) => setPokemons_number(parseInt(e.target.value))}
      />

      <div id="poke_container" className="poke_container">
        {
          list.map(pokemon => createPokemonCard(pokemon))
        }
      </div>
    </div>
  );
}

export default App;
