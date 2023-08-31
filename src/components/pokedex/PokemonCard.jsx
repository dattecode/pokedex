import React, { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";
import { Link } from "react-router-dom";
import StatsList from "./statsList";
import "./styles/pokemonCardCss.css";
import PokeLoading from "../../pages/PokeLoading";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  const joinPokemonTypes = (types = []) => {
    return types.slice(0, 2).join("/ ");
  };

  useEffect(() => {
    setTimeout(() => {
      getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
    }, 1000);
  }, []);

  if (!pokemonInfo) {
    return <PokeLoading />
  }

  const { name, types, stats, image, id } = pokemonInfo;

  return (
    <Link to={"/pokedex/" + id} className={`containerCard ${types[0]}-border`}>
      <div className="containerTittlePokeCard">
        <h3 className={`tittlePokedexCard ${types[0]}-border`}>{name}</h3>
      </div>
      <header className={`containerImageCard ${types[0]}`}>
        <div>
          <img src={image} alt={name} className="imgPokedex" />
        </div>
      </header>
      <section className="containerStatsAndTypes">
        <div className={`containerTypes ${types[0]}-border`}>
          <h4>{joinPokemonTypes(types)}</h4>
        </div>
        <StatsList stats={stats} />
      </section>
    </Link>
  );
};

export default PokemonCard;
