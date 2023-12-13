import React from 'react';
import { useRecoilValue } from 'recoil';
import { favoriteCardsState } from '../../../state/recoil.ts';

import {
  BannerWrapper,
  CardsWrapper,
  ClearAllBtn,
  ClearBtnWrapper,
  FavouritesImg,
  FavouritesTitle,
  FavouritesWrapper,
} from './FavoritesPage.styled.tsx';

import imageBg from '../../../assets/favourites-bg.png';
import { Card } from '../../molecules/Card/Card.tsx';

export const FavoritesPage = () => {
  const favoriteCards = useRecoilValue(favoriteCardsState);
  console.log(favoriteCards);

  return (
    <FavouritesWrapper id='fav-wrapper'>
      <BannerWrapper>
        <FavouritesImg src={imageBg} />
        <FavouritesTitle>favourites</FavouritesTitle>
      </BannerWrapper>

      <ClearBtnWrapper>
        <ClearAllBtn>Clear all</ClearAllBtn>
      </ClearBtnWrapper>

      <CardsWrapper>
        {favoriteCards.map((rocket, i) => (
          <Card key={rocket.id} rocket={rocket} index={i} />
        ))}
      </CardsWrapper>
    </FavouritesWrapper>
  );
};
