import { useState } from "react";
import { PokemonContext } from "./PokemonContext";

const PokemonContextProvider = ({ children }) => {
  const selectedPokemonState = useState([]);

  return <PokemonContext.Provider value={selectedPokemonState}>{children}</PokemonContext.Provider>;
};

export default PokemonContextProvider;
