import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import PrivateRoute from "./components/auth/PrivateRoute";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonId" element={<PokemonDetails />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
