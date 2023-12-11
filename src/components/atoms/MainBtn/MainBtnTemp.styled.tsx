import styled from "styled-components";

interface MainBtnProps {
  width?: string;
}

export const MainBtnTemp = styled.div<MainBtnProps>`
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;

  width: ${(props) => props.width || '163px'};
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #D3EAFF;
  color: #000;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #a7cff5;
  }
`;