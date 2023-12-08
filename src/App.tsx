import React from 'react';

import { Header } from './components/organisms/Header/Header.tsx';
import { HomePage } from './components/templates/HomePage.tsx';
import { AppTemp } from './App.styled.tsx';
// import styled from "styled-components";

const App = () => {
  return (
    <AppTemp>
      <Header />
      <HomePage />
    </AppTemp>
  );
}

export default App;
