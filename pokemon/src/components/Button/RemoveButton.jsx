import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removePokemon } from "../../redux/slices/pokemonSlice";

const RemoveButton = ({ pokemon }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton
      className="cardButton"
      onClick={() => {
        dispatch(removePokemon(pokemon));
      }}
    >
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
