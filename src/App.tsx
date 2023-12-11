import React from 'react';

import { Header } from './components/organisms/Header/Header.tsx';
import { HomePage } from './components/templates/HomePage/HomePage.tsx';
import { AppTemp } from './App.styled.tsx';

const App = () => {
  return (
    <AppTemp>
      <Header />
      <HomePage />
    </AppTemp>
  );
}

export default App;
