import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../../redux/slices/pokemonSlice";

const SelectButton = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton className="saveRemoveButton" onClick={() => dispatch({ type: selectPokemon, payload: pokemon })}>
      추가
    </StyledButton>
  );
};

export default SelectButton;

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
