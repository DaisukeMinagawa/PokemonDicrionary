import React from 'react'
import './Card.css'
const Card = ({ pokemon }) => {
    return <div className='card'>
        <div className='card-image'>
            <img src={pokemon.sprites.front_default} alt="" />
        </div>
        <h3 className='CardName'>{pokemon.name}</h3>
        <div className='cardTypes'>
            Type
        </div>
        {pokemon.types.map((type) => {
            return (<div>
                <span className='typeName'>{type.type.name}</span>
            </div>
            );
        })}
        <div className='cardInfo'>
            <div className='cardData'>
                <p>weight: {pokemon.weight}</p>
            </div>
        </div>
        <div className='cardInfo'>
            <div className='cardData'>
                <p>height: {pokemon.height}</p>
            </div>
        </div>
        <div className='cardInfo'>
            <div className='cardData'>
                <p>ability: {pokemon.abilities[0].ability.name}</p>
            </div>
        </div>
    </div>
}

export default Card