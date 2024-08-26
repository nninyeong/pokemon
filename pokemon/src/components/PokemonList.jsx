import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList }) => {
  return (
    <StyledList>
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} type="inSelectList" />;
      })}
    </StyledList>
  );
};

export default PokemonList;

const StyledList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  border-radius: 10px;

  background-color: var(--light-grey);
`;
