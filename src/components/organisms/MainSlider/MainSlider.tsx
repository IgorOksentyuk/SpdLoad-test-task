import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Background, Image, Wrapper } from './MainSlider.styled.tsx';
import firstSlide from '../../../assets/main-slider-1.png'
import secondSlide from '../../../assets/main-slider-2.png'
import thirdSlide from '../../../assets/main-slider-3.png'
import 'swiper/css';

export const MainSlider = () => {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
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