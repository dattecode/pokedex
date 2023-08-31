import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatsDetailsList from "../components/pokemonDetails/StatsDetailsList";
import HeaderPokex from "../components/layout/HeaderPokex";
import "./styles/pokemonDetailsCss.css";
import PokeLoading from "./PokeLoading";

const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getPokemonById(pokemonId)
      .then((data) => {
        setPokemonData(data);
      })
      .catch((err) => console.log(err));
    }, 2000);
  }, [pokemonId]);

  if (!pokemonData) {
    return <PokeLoading />;
  }

  console.log(pokemonData);

  return (
    <main>
      <HeaderPokex />
      <Link to={"/pokedex"} className="goToPokedex">PokeDex</Link>
      <header className="containerPokeDetails">
        <div className={`detailsImage ${pokemonData.types[0]}`}>
          <img src={pokemonData.image} className="imageDetails"/>
        </div>
        <div className={`detaildIDPokemon ${pokemonData.types[0]}`}>
          <h4># {pokemonData.id}</h4>
        </div>
        <div className="detailsName">
          <div className={`vectName ${pokemonData.types[0]}`}></div>
          <h3 className="namePokemonDetails">{pokemonData.name}</h3>
          <div className={`vectName ${pokemonData.types[0]}`}></div>
        </div>
      </header>
      <StatsDetailsList stats={pokemonData.stats} />
    </main>
  );
};

export default PokemonDetails;
