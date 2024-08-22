import Button from "./Button/Button";
import { SELECTABLE_POKEMON_NUM } from "../constants/constant";

const PokemonCard = ({ pokemon, selectedPokemon, setSelectedPokemon }) => {
  const { img_url, korean_name, id } = pokemon;
  const addHandler = (pokemon) => {
    setSelectedPokemon([...selectedPokemon, pokemon]);
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
