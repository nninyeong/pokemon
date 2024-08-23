import { useParams } from "react-router-dom";
import MOCK_DATA from "../data/mock";
import NavButton from "../components/Button/NavButton";
import styled from "styled-components";

const PokemonDetail = () => {
  const param = useParams();
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(param.id));

  if (!pokemon) {
    // TODO: alert로 안내 후 Dex로 이동하도록 수정
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <img src={pokemon.img_url} alt={`${pokemon.korean_name}의 이미지`} />
      <StyledName>{pokemon.korean_name}</StyledName>
      <p>타입: {pokemon.types.join(", ")}</p>
      <StyledDesc>{pokemon.description}</StyledDesc>
      <StyledNavButtonToDex page={"Dex"}>뒤로 가기</StyledNavButtonToDex>
    </DetailContainer>
  );
};

export default PokemonDetail;

const DetailContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const StyledName = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: var(--pink-primary);
`;

const StyledDesc = styled.p`
  width: 500px;
  text-align: center;
`;

const StyledNavButtonToDex = styled(NavButton)`
  width: 100px;
  height: 40px;
  border-style: none;
  border-radius: 5px;
  background-color: var(--light-grey);

  font-size: 16px;
`;
