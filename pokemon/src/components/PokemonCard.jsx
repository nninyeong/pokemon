import Button from "./Button/Button";
import { useNavigate } from "react-router-dom";
import { getPath } from "../shared/Router";
import SelectButton from "./Button/SelectButton";

const PokemonCard = ({ pokemon, selectedPokemon, setSelectedPokemon }) => {
  const navigate = useNavigate();
  const { img_url, korean_name, id } = pokemon;

  const moveDetail = (e, selection) => {
    if (e.target.className !== "pokemonCard") return;

    const path = getPath("PokemonDetail") + `/${selection.id}`;
    navigate(path);
  };

  const removeHandler = (selection) => {
    const removedList = selectedPokemon.filter(
      (pokemon) => pokemon.id !== selection.id,
    );

    setSelectedPokemon(removedList);
  };

  return (
    <div
      className="pokemonCard"
      onClick={(e) => {
        moveDetail(e, pokemon);
      }}
      style={{ width: "150px", height: "250px", border: "1px solid blue" }}
    >
      <img src={img_url} alt={`${korean_name}의 이미지`} />
      <p>{korean_name}</p>
      <p>No. {`${id}`.padStart(3, "0")}</p>
      <SelectButton
        pokemon={pokemon}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <Button
        className="deleteButton"
        onClick={() => {
          removeHandler(pokemon);
        }}
      >
        삭제
      </Button>
    </div>
  );
};

export default PokemonCard;
