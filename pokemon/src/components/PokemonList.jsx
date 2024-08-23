import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, selectedPokemon, setSelectedPokemon }) => {
  return (
    <StyledList>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        );
      })}
    </StyledList>
  );
};

export default PokemonList;

const StyledList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  align-items: center;
  gap: 20px;
  padding: 20px;

  border-radius: 10px;

  background-color: var(--light-grey);
`;
