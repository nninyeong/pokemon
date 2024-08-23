import { useNavigate } from "react-router-dom";
import { getPath } from "../shared/Router";
import SelectButton from "./Button/SelectButton";
import RemoveButton from "./Button/RemoveButton";
import styled from "styled-components";

const PokemonCard = ({ pokemon, selectedPokemon, setSelectedPokemon }) => {
  const navigate = useNavigate();
  const { img_url, korean_name, id } = pokemon;

  const moveDetail = (e, selection) => {
    if (e.target.className !== "pokemonCard") return;

    const path = getPath("PokemonDetail") + `/${selection.id}`;
    navigate(path);
  };

  return (
    <StyledCard
      className="pokemonCard"
      onClick={(e) => {
        moveDetail(e, pokemon);
      }}
    >
      <img src={img_url} alt={`${korean_name}의 이미지`} />
      <StyledName>{korean_name}</StyledName>
      <p>No. {`${id}`.padStart(3, "0")}</p>
      {selectedPokemon.some((selected) => selected.id === pokemon.id) ? (
        <RemoveButton
          pokemon={pokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      ) : (
        <SelectButton
          pokemon={pokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
    </StyledCard>
  );
};

export default PokemonCard;

const StyledCard = styled.div`
  width: 150px;
  height: 210px;
  border-radius: 10px;
  box-shadow: 0 3px 5px var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledName = styled.p`
  font-weight: 600;
`;
