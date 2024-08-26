import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import pokemonSlice from "./slices/pokemonSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["selectedPokemon"],
};

export const rootReducer = combineReducers({
  pokemonReducer: pokemonSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default persistedReducer;
