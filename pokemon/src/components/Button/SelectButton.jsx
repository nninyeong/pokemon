import styled from "styled-components";
import Button from "./Button";
import { SELECTABLE_POKEMON_NUM } from "../../constants/constant";

const SelectButton = ({ pokemon, selectedPokemon, setSelectedPokemon }) => {
  const selectHandler = () => {
    const isMaxSelect = selectedPokemon.length === SELECTABLE_POKEMON_NUM;
    const isAlreadySelected = selectedPokemon.some(
      (selected) => selected.id === pokemon.id,
    );

    if (isMaxSelect || isAlreadySelected) {
      alert("포켓몬은 최대 여섯개까지만 선택할 수 있어요");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  return (
    <StyledButton className="selectButton" onClick={selectHandler}>
      추가
    </StyledButton>
  );
};

export default SelectButton;

const StyledButton = styled(Button)`
  width: 45px;
  height: 23px;
  line-height: 23px;

  border-style: none;
  border-radius: 3px;
  background-color: var(--button-primary);

  color: white;
  font-weight: 400;

  &:hover {
    background-color: var(--button-hover);
    cursor: pointer;
  }
`;
