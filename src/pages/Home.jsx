import React from "react";
import FooterPokeball from "../components/layout/FooterPokeball";
import pokedexImg from "../img/pokeTittle.png";
import { loginTrainer } from "../store/slices/traines.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles/homeCss.css"
import PokeLoading from "./PokeLoading";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nickName.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="containtHome">
      <section className="containerHome">
        <article className="homeArticle">
          <div className="containerHomeImg">
            <img src={pokedexImg} className="homeImg" />
          </div>
          <h2 className="tittleHome"> ! Hello trainer ¡</h2>
          <p>To start give your name</p>
          <form onSubmit={handleSubmit} className="formHome">
            <input
              type="text"
              id="nickName"
              placeholder="Nickname Trainer...."
              autoComplete="off"
              className="inputHome"
            />
            <button className="buttonHome">Start !</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};

export default Home;
