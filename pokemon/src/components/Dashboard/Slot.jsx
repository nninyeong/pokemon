import styled from "styled-components";
import pokeballImg from "../../assets/images/pokeball.png";

const Slot = () => {
  return (
    <StyledSlot>
      <StyledBG src={pokeballImg} />
    </StyledSlot>
  );
};

export default Slot;

const StyledSlot = styled.div`
  border: 1px dashed var(--grey);
  padding: 20px;
  background: white;
  width: 100%;
  max-width: 100px;
  height: fit-content;
`;

const StyledBG = styled.img`
  width: 100%;
`;
