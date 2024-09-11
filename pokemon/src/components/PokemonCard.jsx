import { useNavigate } from "react-router-dom";
import { getPath } from "../shared/Router";
import SelectButton from "./Button/SelectButton";
import RemoveButton from "./Button/RemoveButton";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

const PokemonCard = ({ pokemon, type }) => {
  const selectedPokemon = useSelector((state) => state.pokemonReducer);
  const navigate = useNavigate();
  const { img_url, korean_name, id } = pokemon;

  const moveDetail = (e, selection) => {
    if (e.target.closest('.cardButton')) return;

    const path = getPath("PokemonDetail") + `/${selection.id}`;
    navigate(path);
  };

  let animatedItem = useScrollFadeIn();
  if (type !== "inSelectList") animatedItem = {};

  return (
    <StyledCard
      className="pokemonCard"
      onClick={(e) => {
        moveDetail(e, pokemon);
      }}
      {...animatedItem}
      // {type === "inSelectList" ? ...animatedItem}
    >
      <img src={img_url} alt={`${korean_name}의 이미지`} />
      <StyledName>{korean_name}</StyledName>
      <p>No. {`${id}`.padStart(3, "0")}</p>
      {type === "inSelectList" ? (
        <SelectButton pokemon={pokemon} selectedPokemon={selectedPokemon} />
      ) : (
        <RemoveButton pokemon={pokemon} selectedPokemon={selectedPokemon} />
      )}
    </StyledCard>
  );
};

export default PokemonCard;

const StyledCard = styled.div`
  width: 100%;
  height: 210px;
  border-radius: 10px;
  box-shadow: 0 3px 5px var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: white;
  transition: linear 0.1ms;

  &:hover {
    cursor: pointer;
    box-shadow: 1px 5px 8px var(--grey);
    transform: translateY(-5px) !important;
    transition: 0.1s;
  }
`;

const StyledName = styled.p`
  font-weight: 600;
`;
