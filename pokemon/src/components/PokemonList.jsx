import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, selectedPokemon, setSelectedPokemon }) => {
  return (
    <div
      className="cardContainer"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
