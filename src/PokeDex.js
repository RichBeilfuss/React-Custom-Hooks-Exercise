import React from "react";
import {useAxios} from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of playing cards.
 * and add a new card at random
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(
    "pokemon",
    "https://pokeapi.co/api/v2/pokemon/"
  );
  return(
    <div className="PokeDex">
      <div className="Pokedex-buttons">
        <h3>Please pick a Pokemon!</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Delete the Pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(card =>(
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;