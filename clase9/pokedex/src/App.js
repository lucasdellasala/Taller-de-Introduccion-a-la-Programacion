import './App.css';
import { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard.js';
import { getPokemon, getPokemonList } from './api/apiCalls.js';
import SearchBar from './components/SearchBar.js'

//DONE:
/*
Ya está mejorado el manejo de los estados para la búsqueda de pokemons y su respectiva 
paginación (para no matar a la api a llamadas).
*/

//TODO:
/*
#Lo que hay que hacer es agarrar el componente SearchBar y hacer que al poner un número, revise
en "pokemonList" si ya existe ese pokemon y si no existe le pegue a la api con getPokemon
(para traer uno solo) y así tener la info del pokemon.

#Con esa info se debería desplegar un detalle o abrir un modal que tenga más info del pokemon
y puede ser también el resto de sus sprites.

#Además habría que validar pokemonList contra el total de pokemones de la api para que cuando
lleguemos a la última página desaparezca el botón de More.
*/
function App() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)
  const [pokemonList, setPokemonList] = useState([])
  const [pagesList, setPagesList] = useState([])
  const [search, setSearch] = useState()

  const fetchPage = (page, limit) => {
    getPokemonList(page, limit).then(currentPage => {
      setPagesList(prevPage =>{
        if (!prevPage){
          return [...prevPage, currentPage]
        } else{
          return currentPage
        }
        
      })
      setPage(currentPage=> currentPage+1)
    })
  }

  const fetchPokemons =  () => {
    pagesList.map(pokemon=>{
      getPokemon(pokemon.url).then(res =>{
        setPokemonList(prevPokemons => [...prevPokemons, res])
      })})
  }
  
  const onClickMore = () =>{
    fetchPage(page,limit)
  }

  useEffect(() => {
    fetchPage(page,limit)
  }, [])

  useEffect(() =>{
    fetchPokemons()
  },[pagesList])

  useEffect(() =>{
    console.log("LOGGER")
    //console.log({pagesList})
    //console.log({pokemonList})
    //console.log("Page: " + page + " and Limit: "+ limit)
    console.log({search})
    console.log("\n")
  },[pagesList, pokemonList, page, limit, search])

  const CardList = (props) => {
    let pokemonList = props.info  
    pokemonList = pokemonList.sort((a,b)=> a.id - b.id)

    return <>{
          pokemonList.map(pokemon =><PokemonCard info={pokemon}/>)
        }</>

  }

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <SearchBar info={search, setSearch}/>
      <div id="poke_container" className="poke_container">
        <CardList info={pokemonList}/>
      </div>
      <button class="more grow" onClick={onClickMore}>More</button>
    </div>
  );
}

export default App;
