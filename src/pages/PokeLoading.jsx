import "./styles/pokeLoadingCss.css"
import React, { useState, useEffect } from "react";
import pikaDash from "../img/pikadash.gif";

const PokeLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading();
    }, 1000); 

    return () => clearTimeout(timeout); 
  }, []);

  return isLoading ? (
    <div className="LoadingCont">
      <img src={pikaDash} alt="Pikachu Loading" />
      <p className="loadingText">Loading...</p>
    </div>
  ) : null;
};

export default PokeLoading;