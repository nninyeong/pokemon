import { createSlice } from "@reduxjs/toolkit";
import { SELECTABLE_POKEMON_NUM } from "../../constants/constant";
import { toast } from "react-toastify";

const initialState = [];

const pokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState: initialState,
  reducers: {
    selectPokemon: (state, action) => {
      const isMaxSelect = state.length === SELECTABLE_POKEMON_NUM;
      const isAlreadySelected = state.some((selected) => selected.id === action.payload.id);

      if (isMaxSelect) {
        toast.error("포켓몬은 최대 6마리까지 선택할 수 있어요", { autoClose: 2000 });
        return;
      }

      if (isAlreadySelected) {
        toast.error("포켓몬은 중복 선택할 수 없어요", { autoClose: 2000 });
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
