import { useState, useEffect } from 'react';
import axios from 'axios';
import './Pokemon.css'
const pokemonName = window.location.pathname;


function Pokemon() {

    const [pokemon, setPokemon] = useState([]);

    useEffect( () => {
            async function getData() {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon${pokemonName}/`);        
                setPokemon(response.data);
            }
            getData();
            
        }, []);

    return(
        <div className="Pokemon">
            <h1 className="Pokemon-name">{pokemon.name}</h1>
            <p className="Pokemon-info">Base Experience: {pokemon.base_experience}</p>
            <p className="Pokemon-info">Weight: {pokemon.weight}</p>
            <p className="Pokemon-info">Height: {pokemon.height}</p>
            <img className="Pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
        </div>
    )
}

export default Pokemon;