import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";

const PAGE_PATH = {
  Home: "/",
  Dex: "/dex",
  PokemonDetail: "/detail",
};

export const getPath = (page) => PAGE_PATH[page];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_PATH.Home} element={<Home />} />
        <Route path={PAGE_PATH.Dex} element={<Dex />} />
        <Route path={PAGE_PATH.PokemonDetail} element={<PokemonDetail />} />
        <Route
          path={PAGE_PATH.PokemonDetail + "/:id"}
          element={<PokemonDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
