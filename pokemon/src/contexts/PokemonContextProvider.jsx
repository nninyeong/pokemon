import { createContext, useState } from "react";
import { SELECTABLE_POKEMON_NUM } from "../constants/constant";

export const PokemonContext = createContext(null);

const PokemonContextProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const selectPokemon = (pokemon) => {
    const isMaxSelect = selectedPokemon.length === SELECTABLE_POKEMON_NUM;
    const isAlreadySelected = selectedPokemon.some((selected) => selected.id === pokemon.id);

    if (isMaxSelect || isAlreadySelected) {
      alert("포켓몬은 최대 여섯개까지만 선택할 수 있어요");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const removedList = selectedPokemon.filter((selected) => selected.id !== pokemon.id);

    setSelectedPokemon(removedList);
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemon, selectPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
