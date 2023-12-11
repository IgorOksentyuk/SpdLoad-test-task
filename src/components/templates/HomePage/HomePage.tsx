
import React from "react";

import { HomepageWrapper } from "./HomePage.styled.tsx";
import { MainSlider } from "../../organisms/MainSlider/MainSlider.tsx";
import { CardsSlider } from "../../organisms/CardsSlider/CardsSlider.tsx";

export const HomePage = () => {
  return (
    <HomepageWrapper>
      <MainSlider />
      <CardsSlider />
    </HomepageWrapper>
  );
};