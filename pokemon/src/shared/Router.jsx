import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";

const PAGE_PATH = {
  Home: "/",
  Dex: "/dex",
};

export const getPath = (page) => PAGE_PATH[page];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_PATH.Home} element={<Home />} />
        <Route path={PAGE_PATH.Dex} element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
