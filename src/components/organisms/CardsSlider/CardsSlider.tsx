import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import {
  ArrowIcon,
  CardsBulletsContainner,
  CardsSliderWrapper,
  CardsTitle,
  SliderButton,
  SliderButtonsContainer,
  TopContainer,
} from "./CardsSliderWrapper.styled.tsx";

import { Card } from "../../molecules/Card/Card.tsx";
import "./style.css";
import arrowLeft from "../../../assets/arrow-left.png";
import arrowRight from "../../../assets/arrow-right.png";
import { useRecoilValue } from "recoil";
import { rocketsState } from "../../../state/recoil.ts";
import { Rocket } from "../../../interfaces/Rocket.ts";

export const CardsSlider = () => {
  const rockets = useRecoilValue(rocketsState);

  return (
    <CardsSliderWrapper id="cards-wrapper">
      <TopContainer>
        <CardsTitle>popular tours</CardsTitle>

        <SliderButtonsContainer>
          <SliderButton id="prevBtnId">
            <ArrowIcon src={arrowLeft} />
          </SliderButton>

          <SliderButton id="nextBtnId">
            <ArrowIcon src={arrowRight} />
          </SliderButton>
        </SliderButtonsContainer>
      </TopContainer>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={3}
        pagination={{
          clickable: true,
          el: '#cards-bullets-container',
          bulletClass: 'swiper-pagination-bullet',
        }}
        navigation={{
          prevEl: `#prevBtnId`,
          nextEl: `#nextBtnId`,
        }}
      >
        {
          rockets.map((rocket: Rocket, index: number) => (
            <SwiperSlide key={rocket.id}>
              <Card
                rocket={rocket}
                index={index}
                image={rocket.imageUrl}
              />

            </SwiperSlide>
          ))
        }
      </Swiper>

      <CardsBulletsContainner id='cards-bullets-container' />
    </CardsSliderWrapper >
  );
};