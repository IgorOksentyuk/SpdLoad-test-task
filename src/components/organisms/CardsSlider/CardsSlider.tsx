import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

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
import { Rocket } from "../../../interfaces/Rocket.ts";

const ROCKETS_QUERY = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;

export const CardsSlider = () => {
  const { loading, error, data } = useQuery(ROCKETS_QUERY);

  if (loading) return <p style={{ textAlign: 'center', fontSize: '36px' }}>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const rockets: Rocket[] = data?.rockets;

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
              <Card rocket={rocket} index={index} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <CardsBulletsContainner id='cards-bullets-container' />
    </CardsSliderWrapper >
  );
};