import { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <>
      <StyledContainer>
        <Dashboard
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
        <PokemonList
          pokemonList={MOCK_DATA}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      </StyledContainer>
    </>
  );
};

export default Dex;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  padding: 20px;
`;
