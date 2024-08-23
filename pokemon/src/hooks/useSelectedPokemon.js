import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

const useSelectedPokemon = () => {
  const value = useContext(PokemonContext);
  if (value === undefined) {
    throw new Error("useSlectedPokemon은 PokemonStateProvier 내부에서 사용할 수 있습니다.");
  }

  return value;
};

export default useSelectedPokemon;
