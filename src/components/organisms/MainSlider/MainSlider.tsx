import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import {
  ArrowBottomIcon,
  Background,
  BulletsContainner,
  ExploreBtn,
  ExploreLink,
  ExploreWrapper,
  Image,
  Subtitle,
  TextWrapper,
  Title,
  Wrapper,
} from './MainSlider.styled.tsx';

import firstSlide from '../../../assets/main-slider-1.png';
import secondSlide from '../../../assets/main-slider-2.png';
import thirdSlide from '../../../assets/main-slider-3.png';
import arrowDotn from '../../../assets/arrow-down.png';
import './styles.css';

export const MainSlider = () => {
  return (
    <Wrapper id='wrapper'>
      <TextWrapper>
        <Subtitle>The space is waiting for</Subtitle>
        <Title>YOU</Title>
      </TextWrapper>

      <BulletsContainner id='custom-bullets-container' />

      <ExploreWrapper>
        <ExploreLink href="#cards-wrapper">
          <ExploreBtn>Explore tours</ExploreBtn>
          <ArrowBottomIcon src={arrowDotn} />
        </ExploreLink>
      </ExploreWrapper>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '#custom-bullets-container',
          bulletClass: 'swiper-pagination-bullet',
        }}
        autoplay={{
          disableOnInteraction: false,
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <Background />
          <Image src={firstSlide} />
        </SwiperSlide>

        <SwiperSlide>
          <Background />
          <Image src={secondSlide} />
        </SwiperSlide>

        <SwiperSlide>
          <Background />
          <Image src={thirdSlide} />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};