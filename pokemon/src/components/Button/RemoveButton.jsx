import Button from "./Button";

const RemoveButton = ({ pokemon, selectedPokemon, setSelectedPokemon }) => {
  const removeHandler = () => {
    const removedList = selectedPokemon.filter(
      (selected) => selected.id !== pokemon.id,
    );

    setSelectedPokemon(removedList);
  };

  return (
    <Button className="removeButton" onClick={removeHandler}>
      삭제
    </Button>
  );
};

export default RemoveButton;
