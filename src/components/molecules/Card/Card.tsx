import React from "react";
import {
  CardButtonsWrapper,
  CardContainer,
  CardImage,
  CardText,
  CardTextWrapper,
  CardTitle,
  CardWrapper,
} from "./Card.styled.tsx";

import firstImage from "../../../assets/main-slider-1.png";
import { FavouritesBtn } from "../../atoms/FavouritesBtn/FafouritesBtn.tsx";
import { MainBtn } from "../../atoms/MainBtn/MainBtn.tsx";

export const Card = () => {
  return (
    <CardWrapper>
      <CardImage src={firstImage} />

      <CardContainer>
        <CardTextWrapper>
          <CardTitle>extraordinary tour</CardTitle>
          <CardText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </CardText>
        </CardTextWrapper>

        <CardButtonsWrapper>
          <MainBtn text={'buy'} width={'278px'} />
          <FavouritesBtn />
        </CardButtonsWrapper>
      </CardContainer>
    </CardWrapper>
  );
};