import React from "react";
import { FavouritesBtn } from "../../atoms/FavouritesBtn/FafouritesBtn.tsx";
import { LoginBtn } from "../../atoms/LoginBtn/LoginBtnTemp.tsx";

import {
  HeaderLogo,
  HeaderWrapper,
  ListItem,
  LoginWrapper,
  NavList,
  Navigation,
} from "./Header.styled.tsx";

import headerLogo from '../../../assets/image_3.png';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo src={headerLogo} />

      <Navigation>
        <NavList>
          <ListItem>home</ListItem>
          <ListItem>tours</ListItem>
          <ListItem>about</ListItem>
          <ListItem>help</ListItem>
        </NavList>
      </Navigation>

      <LoginWrapper>
        <FavouritesBtn />
        <LoginBtn text={'sign in'} />
      </LoginWrapper>
    </HeaderWrapper>
  );
};