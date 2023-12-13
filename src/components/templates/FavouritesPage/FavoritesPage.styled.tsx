import styled from "styled-components";

export const FavouritesWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const BannerWrapper = styled.div`
  height: 440px;
`;

export const FavouritesImg = styled.img`
  position: absolute;
`;

export const FavouritesTitle = styled.h2`
  text-align: center;
  font-family: Syne;
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;

  position: absolute;
  margin: 220px 0 0 463px;
  color: #FFF;
`;

export const ClearBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClearAllBtn = styled.button`
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;

  margin: 64px 80px 0;
  border: none;
  background-color: transparent;
  color: #556B84;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const CardsWrapper = styled.div`
  
`;