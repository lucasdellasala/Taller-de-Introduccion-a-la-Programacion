import React from 'react'

function PokemonCard(props){
    const pokemon = props.info

    if (!pokemon){
        return <div></div>
    }
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

export default PokemonCard;