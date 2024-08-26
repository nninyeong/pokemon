import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContextProvider";

const RemoveButton = ({ pokemon }) => {
  const { removePokemon } = useContext(PokemonContext);

  return (
    <StyledButton className="removeButton" onClick={() => removePokemon(pokemon)}>
      삭제
    </StyledButton>
  );
};

export default RemoveButton;

const StyledButton = styled(Button)`
  width: 45px;
  height: 23px;
  line-height: 23px;

  border-style: none;
  border-radius: 3px;
  background-color: var(--pink-primary);

  color: white;
  font-weight: 400;

  &:hover {
    background-color: var(--pink-hover);
    cursor: pointer;
  }
`;
