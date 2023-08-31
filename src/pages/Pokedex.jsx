import React, { useState } from "react";
import HeaderPokex from "../components/layout/HeaderPokex";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import "./styles/pokedexCss.css";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handlePokedex,
    pokemonByName,
    types,
  } = usePokedex();

  const { itemsCurrentPage, lastPages, pagesInCurrentBlock } = paginateData(
    pokemonByName,
    currentPage
  );

  return (
    <main>
      <header>
        <HeaderPokex />
      </header>
      <p className="tittlePokedex">
        <span>" Welcome {name} "</span>
      </p>
      <section>
        <form className="containerFormPokedex">
          <div>
            <input
              onChange={handlePokedex(setPokemonName)}
              type="text"
              placeholder="Search Pokemon..."
              className="searchPokemon"
            />
          </div>

          <select
            className="optionPokedex"
            value={pokemonType}
            onChange={handlePokedex(setPokemonType)}
          >
            <option value="">All Pokemon</option>
            {types
              ? types.map((type) => (
                  <option key={type.name}>{type.name}</option>
                ))
              : null}
          </select>
        </form>
      </section>
      <PokemonList pokemons={itemsCurrentPage} />
      <Pagination
        pagesInCurrentBlock={pagesInCurrentBlock}
        lastPages={lastPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Pokedex;
