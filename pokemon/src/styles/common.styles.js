import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --button-primary:#EE1D52;
    --button-hover:#ff607e;
    --yellow:#FFC107;
    --light-grey:#ededed;
    --grey:#c4c4c4;
      
}`;

/**
 * position 가운데, 내부 요소 정렬 가운데로 맞출 수 있는 div
 * @params {gap} 내부 요소 간 적용할 gap
 */
export const CenterAlignBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${(props) => props.$gap}px;
`;
