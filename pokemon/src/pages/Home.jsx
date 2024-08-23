import logo from "../assets/images/pokemon-logo.png";
import { LogoImg, NavButtonToDex } from "../styles/Home.styles";
import { CenterAlignBox } from "../styles/common.styles";

const Home = () => {
  return (
    <CenterAlignBox $gap={50}>
      <LogoImg src={logo} />
      <NavButtonToDex page={"Dex"}>포켓몬 도감 시작하기</NavButtonToDex>
    </CenterAlignBox>
  );
};

export default Home;
