import React from "react";
import { useRecoilState } from "recoil";

import {
  CardButtonsWrapper,
  CardContainer,
  CardImage,
  CardText,
  CardTextWrapper,
  CardTitle,
  CardWrapper,
} from "./Card.styled.tsx";

import { FavouritesBtn } from "../../atoms/FavouritesBtn/FafouritesBtn.tsx";
import { MainBtn } from "../../atoms/MainBtn/MainBtn.tsx";
import { favoriteCardsState } from "../../../state/recoil.ts";

export const Card = ({ rocket, index, image }) => {
  const [favoriteCards, setFavoriteCards] = useRecoilState(favoriteCardsState);

  const handleAddToFavorites = () => {
    setFavoriteCards((prevFavorites) => [...prevFavorites, rocket]);
  };

  const handleRemoveFromFavorites = () => {
    setFavoriteCards((prevFavorites) => prevFavorites.filter((favRocket) => favRocket.id !== rocket.id));
  };

  const isFavorite = favoriteCards.some((favRocket) => favRocket.id === rocket.id);

  const handleButtonAction = () => {
    return isFavorite ? handleRemoveFromFavorites() : handleAddToFavorites();
  };

  return (
    <CardWrapper>
      <CardImage src={image} />

      <CardContainer>
        <CardTextWrapper>
          <CardTitle>{rocket.name}</CardTitle>

          <CardText>
            {rocket.description}
          </CardText>
        </CardTextWrapper>

        <CardButtonsWrapper>
          <MainBtn text={'buy'} width={'278px'} />

          <FavouritesBtn
            handleButtonAction={handleButtonAction}
            isFavorite={isFavorite}
          />
        </CardButtonsWrapper>
      </CardContainer>
    </CardWrapper>
  );
};