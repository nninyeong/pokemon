import { useParams } from "react-router-dom";
import MOCK_DATA from "../data/mock";
import NavButton from "../components/Button/NavButton";

const PokemonDetail = () => {
  const param = useParams();
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(param.id));

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="detailContainer">
      <img src={pokemon.img_url} alt={`${pokemon.korean_name}의 이미지`} />
      <p>타입: {pokemon.types}</p>
      <p>{pokemon.description}</p>
      <NavButton page={"Dex"}>뒤로 가기</NavButton>
    </div>
  );
};

export default PokemonDetail;
