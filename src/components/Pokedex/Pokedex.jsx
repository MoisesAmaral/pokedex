import React, {useState, useEffect} from 'react'
import {getAllPokemon, getPokemon} from '../../services/pokemon'
import Card from '../Card/Card'
import './Pokedex.css'



const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [previousUrl, setPreviousUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';



useEffect(()=>{
  async function fetchData() {
    let response = await getAllPokemon(initialUrl)
    setNextUrl(response.next)
    setPreviousUrl(response.previous)
    let pokemon = await loadingPokemon(response.results)

    setLoading(false)
  }
  fetchData()
}, []);

//função next, proxima página

const next = async () => {
  setLoading(true)
  let data = await getAllPokemon(nextUrl)
  await loadingPokemon(data.results)
  setNextUrl(data.next)
  setPreviousUrl(data.previous)
  setLoading(false)
}

//função previous, pagina anterior
const prev = async () => {
  if (!previousUrl) return;
  setLoading(true);
  let data = await getAllPokemon(previousUrl);
  await loadingPokemon(data.results);
  setNextUrl(data.next);
  setPreviousUrl(data.previous);
  setLoading(false);
}

// função para carregar os pokemons 

const loadingPokemon = async (data) => {
  let _pokemonData = await Promise.all(
    data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    })
  );

  setPokemonData(_pokemonData);
};


 
  return (
    <>
      { loading ? <h1 className='loading'>Carregando...</h1> : (
        <>
          <div className="container">
            <h2>Pokedex - lista com todos os pokemons</h2>
              <button className='btn'onClick={prev}>Anterior</button>
              <button className='btn'onClick={next}>Próximo</button>        
              <div className="grid-container">
                  {pokemonData.map((pokemon, id) => {
                      return <Card key={id} pokemon={pokemon} />
                    })}
              </div>
              <button className='btn'onClick={prev}>Anterior</button>
              <button className='btn'onClick={next}>Próximo</button>                
          </div>
        </>
      )}
    </>
  )
}

export default Pokedex