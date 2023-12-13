import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { ROCKETS_QUERY } from './api/client.ts';
import { useQuery } from '@apollo/client';

import { Header } from './components/organisms/Header/Header.tsx';
import { HomePage } from './components/templates/HomePage/HomePage.tsx';
import { FavoritesPage } from './components/templates/FavouritesPage/FavoritesPage.tsx';
import { rocketsState } from './state/recoil.ts';
import { Rocket } from './interfaces/Rocket.ts';
import firstImage from './assets/main-slider-1.png';
import secondImage from './assets/main-slider-2.png';
import thirdImage from './assets/main-slider-3.png';

const designImages = [firstImage, secondImage, thirdImage];

const App = () => {
  const setRockets = useSetRecoilState(rocketsState);
  const { loading, error, data } = useQuery(ROCKETS_QUERY);

  useEffect(() => {
    if (!loading && !error && data) {
      const rocketsWithImg = data.rockets.map((rocket: Rocket, i: number) => (
        {
          ...rocket,
          imageUrl: designImages[i % 3],
        }
      ))

      setRockets(rocketsWithImg);
    }
  }, [loading, error, data, setRockets]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavoritesPage />} />
      </Routes>

    </>
  );
}

export default App;
