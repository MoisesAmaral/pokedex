import {React, useState} from 'react'
import '../components/Hero/Hero.css'
import { Link } from 'react-router-dom'

export const Button = () => {

//mudar texto ao passar o mouse
  const [mudarTexto, setMudarTexto] = useState('Ver Pokemons')
  const mudarTextoPassarMouse = () => {
    setMudarTexto('GO')
  }  
  const mudarTextoSairMouse = () => {
    setMudarTexto('Ver Pokemons')
  }



  return (
    <>           
        <button
          className='btn-hero'
          onMouseOver={mudarTextoPassarMouse}
          onMouseOut={mudarTextoSairMouse}
          
        >
         <Link className='Link' to='/Pokedex'>{mudarTexto}</Link> 
        </button>
    </>
  )
}

