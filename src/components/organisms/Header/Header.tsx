import React from "react";
import { FavouritesBtn } from "../../atoms/FavouritesBtn/FafouritesBtn.tsx";
import { MainBtn } from "../../atoms/MainBtn/MainBtn.tsx";

import {
  HeaderLink,
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
      <HeaderLink href="#">
        <HeaderLogo src={headerLogo} />
      </HeaderLink>

      <Navigation>
        <NavList>
          <ListItem>
            <HeaderLink href="#">home</HeaderLink>
          </ListItem>

          <ListItem>tours</ListItem>
          <ListItem>about</ListItem>
          <ListItem>help</ListItem>
        </NavList>
      </Navigation>

      <LoginWrapper>
        <FavouritesBtn />
        <MainBtn text={'sign in'} width={'163px'} />
      </LoginWrapper>
    </HeaderWrapper>
  );
};