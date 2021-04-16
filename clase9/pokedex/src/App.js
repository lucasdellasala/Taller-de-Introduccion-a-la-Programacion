import './App.css';
import { useEffect, useState } from 'react';
import { getPokemon, getPokemonList } from './api/apiCalls.js'

function App() {
  // ESTADOS
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)
  const [pagesList, setPagesList] = useState([])
  const [pokemonList, setPokemonList] = useState([])

  // FUNCIONES
  const fetchPage = async (page, limit) => {
    getPokemonList(page, limit).then(currentPage =>{
      setPagesList(prevPage =>{
        if(!prevPage){
          return [...prevPage, currentPage]
        } else {
          return currentPage
        }
      })
      setPage(currentPage => currentPage + 1)
    })
  }

  const fetchPokemons = async () => {
    pagesList.map((pokemon)=>{
      getPokemon(pokemon.url).then((res) =>{
        setPokemonList(prevPokemons => [...prevPokemons, res])
      })
    })
  }

  const onClickMore = () => {
    fetchPage(page, limit)
  }

  // COMPONENTES
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

  // USE EFFECTS
  useEffect(()=>{
    fetchPage(page,limit)
  }, [])

  useEffect(()=>{
    fetchPokemons()
  }, [pagesList])

  //LOGEAMOS LA LISTA DE POKES
  useEffect(async () => {
    console.log(pokemonList)
  }, [pokemonList])

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <div id="poke_container" className="poke_container">
        {
          pokemonList.map(pokemon => createPokemonCard(pokemon))
        }
      </div>
      <button className="more grow" onClick={onClickMore}>More</button>
    </div>
  );
}

export default App;
