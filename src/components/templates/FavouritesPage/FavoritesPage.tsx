import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { favoriteCardsState } from '../../../state/recoil.ts';

import {
  BannerWrapper,
  CardsWrapper,
  ClearAllBtn,
  ClearBtnWrapper,
  EmptyTitle,
  FavouritesImg,
  FavouritesTitle,
  FavouritesWrapper,
} from './FavoritesPage.styled.tsx';

import imageBg from '../../../assets/favourites-bg.png';
import { Card } from '../../molecules/Card/Card.tsx';

export const FavoritesPage = () => {
  const favoriteCards = useRecoilValue(favoriteCardsState);
  const setFavoriteCards = useSetRecoilState(favoriteCardsState);

  const clearAllFavourites = () => {
    setFavoriteCards([]);
  }

  return (
    <FavouritesWrapper id='fav-wrapper'>
      <BannerWrapper>
        <FavouritesImg src={imageBg} />
        <FavouritesTitle>favourites</FavouritesTitle>
      </BannerWrapper>

      <ClearBtnWrapper>
        <ClearAllBtn onClick={clearAllFavourites}>Clear all</ClearAllBtn>
      </ClearBtnWrapper>

      {favoriteCards.length > 0
        ? <CardsWrapper>
          {favoriteCards.map((rocket, i) => (
            <Card
              key={rocket.id}
              rocket={rocket}
              index={i}
              image={rocket.imageUrl}
            />
          ))}
        </CardsWrapper>
        : <EmptyTitle>Your favourites is empty.</EmptyTitle>}
    </FavouritesWrapper>
  );
};
