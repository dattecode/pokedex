import React from "react";
import PokemonCard from "./PokemonCard";
import "./styles/pokemonListCss.css";

const PokemonList = ({ pokemons }) => {
  return (
    <section className="containerPokemonList">
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};

export default PokemonList;
