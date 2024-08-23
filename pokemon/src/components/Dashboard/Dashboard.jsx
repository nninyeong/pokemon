import Slot from "./Slot";
import PokemonCard from "../PokemonCard";
import { SELECTABLE_POKEMON_NUM } from "../../constants/constant";
import styled from "styled-components";

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  return (
    <StyledContainer>
      <StyledTitle>나만의 포켓몬</StyledTitle>
      <StyledSlotContainer>
        {Array.from({ length: SELECTABLE_POKEMON_NUM }, (_, i) =>
          selectedPokemon[i] ? (
            <PokemonCard
              key={i}
              pokemon={selectedPokemon[i]}
              type="inDashboard"
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          ) : (
            <Slot key={i} />
          ),
        )}
      </StyledSlotContainer>
    </StyledContainer>
  );
};

export default Dashboard;

const StyledContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: var(--light-grey);
  border-radius: 10px;
  padding: 20px;
`;

const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 25px;
`;

const StyledSlotContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  align-items: center;
  column-gap: 10px;
`;
