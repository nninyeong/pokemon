import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";

const store = configureStore({
  reducer: {
    pokemonReducer: pokemonSlice,
  },
});

export default store;
