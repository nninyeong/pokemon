import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import PokemonDetail from "../pages/PokemonDetail";
import { Provider } from "react-redux";
import { store } from "../redux/persistReducer";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/persistReducer";

const PAGE_PATH = {
  Home: "/",
  Dex: "/dex",
  PokemonDetail: "/detail",
};

export const getPath = (page) => PAGE_PATH[page];

const Router = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path={PAGE_PATH.Home} element={<Home />} />
            <Route path={PAGE_PATH.Dex} element={<Dex />} />
            <Route path={PAGE_PATH.PokemonDetail} element={<PokemonDetail />} />
            <Route path={PAGE_PATH.PokemonDetail + "/:id"} element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default Router;
