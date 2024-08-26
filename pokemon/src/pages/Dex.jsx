import { ToastContainer } from "react-toastify";
import Dashboard from "../components/Dashboard/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const Dex = () => {
  return (
    <>
      <StyledContainer>
        <Dashboard />
        <PokemonList pokemonList={MOCK_DATA} />
        <ToastContainer />
      </StyledContainer>
    </>
  );
};

export default Dex;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;
