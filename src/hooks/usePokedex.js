import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllPokemon,
  getAllTypes,
  getPokemonByType,
} from "../services/pokemons";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]);

  const { name } = useSelector((store) => store.trainer);

  const handlePokedex = (otherState) => (e) => {
    otherState(e.target.value);
  };

  const pokemonByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  useEffect(() => {
    if (!pokemonType) {
      getAllPokemon()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    } else {
      getPokemonByType(pokemonType)
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then(({ data }) => setTypes(data))
      .catch((err) => console.log(err));
  }, []);
  return {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handlePokedex,
    pokemonByName,
    types,
  };
};

export default usePokedex;
