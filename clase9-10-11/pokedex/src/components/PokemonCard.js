import React from 'react'

function PokemonCard(props){
    const { pokemon, entrenador, detailed, onClick } = props;

    if (!pokemon && !entrenador){
        return <div></div>
    }


    let id, name, type, img, details;
    if(pokemon) {
        name = pokemon.name;
        id = pokemon.id;
        type = pokemon.types[0].type.name
        img = pokemon.sprites.front_default

        if(detailed){
            const { height, weight, base_experience } = pokemon
            details =[
                <small className="type">height: {height}</small>,
                <small className="type">weight: {weight}</small>,
                <small className="type">base experience: {base_experience}</small>,
            ];
        }
    } else {
        name = entrenador.nombre;
        id = entrenador.id;
        type= entrenador.type.nombre;
        img = entrenador.url;
    }


    const onClickLocal = () => {
        if(!onClick) return;
        onClick(id)
    }
    return (
      <div className="pokemon grow" onClick={onClickLocal}>
        <div className="img-container">
          <img src={img} alt={name} />
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