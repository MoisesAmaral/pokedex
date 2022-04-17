import React from 'react'
import pokemonTypeColors from '../../helpers/pokemonTypeColors'
import './Card.css'

const Card = ({pokemon}) => {
  return (
    
    <div className='card'>
      <div className='content_card'>
      <div className="info_card">
          <div className="card_name">
              <h3>{pokemon.name}</h3>
          </div>
          <div className="card_info">
              <div className="card_data">
                  <p>{pokemon.weight}</p>
              </div>
              
              <div className="card_data">
                  <p>{pokemon.height}</p>
              </div>                            
          </div>
          <div className="card_info_w-h">
              <p className="title">Weight</p>
              <p className="title">Height</p>
          </div>
          <div className="card_data_ability">
              <p className="title">Ability:</p>
              <p className="ability">{pokemon.abilities[0].ability.name}</p>
          </div>
          
          <div className="card_types">
                    {
                        pokemon.types.map((type, id) => {
                            return (
                                <div className="card_type" key={id} style={{ backgroundColor: pokemonTypeColors[type.type.name] }}>
                                    {type.type.name}
                                </div>
                            )
                        })
                    }
                </div>          
            </div>
            </div>
            <div className="card_img">
        <img src={pokemon.sprites.other.home.front_default} alt="" />
      </div>
    </div>
  )
}

export default Card