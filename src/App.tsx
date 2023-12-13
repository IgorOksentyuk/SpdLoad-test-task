import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/organisms/Header/Header.tsx';
import { HomePage } from './components/templates/HomePage/HomePage.tsx';
import { FavoritesPage } from './components/templates/FavouritesPage/FavoritesPage.tsx';

const App = () => {
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
