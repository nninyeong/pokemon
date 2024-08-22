import { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <>
      <div>
        <Dashboard
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
        <PokemonList
          pokemonList={MOCK_DATA}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </div>
    </>
  );
};

export default Dex;
