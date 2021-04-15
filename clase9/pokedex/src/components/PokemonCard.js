import React from 'react'

function PokemonCard(props){
    const { pokemon, detailed, onClick } = props;

    if (!pokemon){
        return <div></div>
    }
    const { name, types, sprites, id, height, weight, base_experience } = pokemon
    const type = types[0].type.name
    const details = detailed? [
            <small className="type">height: {height}</small>,
            <small className="type">weight: {weight}</small>,
            <small className="type">base experience: {base_experience}</small>,
        ]
        : null
    const onClickLocal = () => {
        if(!onClick) return;
        onClick(id)
    }
    return (
      <div className="pokemon grow" onClick={onClickLocal}>
        <div className="img-container">
          <img src={sprites.front_default} alt={name} />
        </div>
        <div className="info">
          <span className="number">{id}</span>
          <h3 className="name">{name}</h3>
          <small className="type">{type}</small>
            {details}
        </div>
      </div>
    )
}

export default PokemonCard;