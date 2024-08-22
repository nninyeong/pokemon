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
    <Button className="selectButton" onClick={selectHandler}>
      추가
    </Button>
  );
};

export default SelectButton;
