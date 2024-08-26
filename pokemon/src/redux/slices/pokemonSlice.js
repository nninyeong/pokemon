import { createSlice } from "@reduxjs/toolkit";
import { SELECTABLE_POKEMON_NUM } from "../../constants/constant";

// const [selectedPokemon, setSelectedPokemon] = useState([]);
const initialState = [];

const pokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState: initialState,
  reducers: {
    selectPokemon: (state, action) => {
      const isMaxSelect = state.length === SELECTABLE_POKEMON_NUM;
      const isAlreadySelected = state.some((selected) => selected.id === action.payload.id);

      if (isMaxSelect || isAlreadySelected) {
        alert("포켓몬은 최대 여섯개까지만 선택할 수 있어요");
        return;
      }
      return [...state, action.payload];
    },
    removePokemon: (state, action) => {
      return state.filter((selected) => selected.id !== action.payload.id);
    },
  },
});

export const { selectPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
