import React, { useEffect, useState } from "react";
import { mockPokemonData } from "../mock/pokeData";

const PokeCard = () => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setPokemon(mockPokemonData);
  }, []);
  return (
    <>
      {Object.keys(pokemon).length > 0 && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <p>
            <a href={pokemon.video} target="_blank" rel="noreferrer">
              {pokemon.name} - video
            </a>
          </p>
        </div>
      )}
    </>
  );
};
export default PokeCard;
