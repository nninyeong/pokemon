import styled from "styled-components";
import NavButton from "../components/Button/NavButton";

export const LogoImg = styled.img`
  max-width: 500px;
`;

export const NavButtonToDex = styled(NavButton)`
  background-color: var(--button-primary);
  border-style: none;
  border-radius: 5px;
  width: 150px;
  height: 40px;

  color: white;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background-color: var(--button-hover);
    cursor: pointer;
  }
`;
