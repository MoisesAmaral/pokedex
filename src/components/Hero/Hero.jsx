import React from 'react'
import './Hero.css'
import heroImg from '../../assets/BannerHero.svg'
import {Button} from '../Button'

const Hero = () => {
  return (
     <>
     <div className="hero-container">
        <div className="hero-info">
            <h1>Encontre todos os seus Pokémon favorito</h1>
            <p>
                Você pode conhecer o tipo de Pokémon,
                seus pontos fortes, desvantagens e habilidades.
            </p>

            <Button 
                type='button'
                to='/pokemon' 
            />      
        </div>
        
        <div className="hero-img">
            <img src={heroImg} alt="" />
        </div>        
    </div>
    <div className="hero-display">
        <div className="display-info">
            <div className="pokemon-qtd">
                <h2 className='info-number'>200+</h2>
                <p className='info-text'>Pokemons cadstrados</p>
            </div>
            <div className="call-api">
                <h2 className='info-number'>200+</h2>
                <p className='info-text'>Pokemons cadstrados</p>
            </div>
            <div className="visitas">
                <h2 className='info-number'>200+</h2>
                <p className='info-text'>Pokemons cadstrados</p>
            </div>
            <div className="time-online">
                <h2 className='info-number'>200+</h2>
                <p className='info-text'>Pokemons cadstrados</p>
            </div>
        </div>
    </div>

    </>

  )
}

export default Hero