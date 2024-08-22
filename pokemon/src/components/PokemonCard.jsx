import Button from "./Button/Button";
import { SELECTABLE_POKEMON_NUM } from "../constants/constant";

const PokemonCard = ({ pokemon, selectedPokemon, setSelectedPokemon }) => {
  const { img_url, korean_name, id } = pokemon;
  const addHandler = (selection) => {
    const isMaxSelect = selectedPokemon.length === SELECTABLE_POKEMON_NUM;
    const isAlreadySelected = selectedPokemon.some(
      (pokemon) => pokemon.id === selection.id,
    );

    if (isMaxSelect || isAlreadySelected) {
      alert("포켓몬은 최대 여섯개까지만 선택할 수 있어요");
      return;
    }

    setSelectedPokemon([...selectedPokemon, selection]);
  };
  return (
    <div style={{ width: "150px", height: "250px", border: "1px solid blue" }}>
      <img src={img_url} alt={`${korean_name}의 이미지`} />
      <p>{korean_name}</p>
      <p>No. {`${id}`.padStart(3, "0")}</p>
      <Button
        onClick={() => {
          addHandler(pokemon);
        }}
      >
        추가
      </Button>
    </div>
  );
};

export default PokemonCard;
