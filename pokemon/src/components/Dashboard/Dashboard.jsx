import Slot from "./Slot";
import PokemonCard from "../PokemonCard";
import { SELECTABLE_POKEMON_NUM } from "../../constants/constant";

const Dashboard = ({ selectedPokemon, setSelectedPokemon }) => {
  return (
    <div>
      <h2>나만의 포켓몬</h2>
      <div className="slotsContainer" style={{ display: "flex" }}>
        {Array.from({ length: SELECTABLE_POKEMON_NUM }, (_, i) =>
          selectedPokemon[i] ? (
            <PokemonCard
              pokemon={selectedPokemon[i]}
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          ) : (
            <Slot key={i} />
          ),
        )}
      </div>
    </div>
  );
};

export default Dashboard;
