import styled from "styled-components";

export const CardsSliderWrapper = styled.div`
  padding-inline: 80px;
  margin-bottom: 136px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const CardsTitle = styled.h3`
  font-family: Syne;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
`;

export const SliderButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const SliderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: #ECECEC;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cec9c9;
  }
`;

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CardsBulletsContainner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 40px;
`;
