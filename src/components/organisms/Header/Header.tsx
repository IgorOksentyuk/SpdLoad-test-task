import React from "react";
import { FavouritesBtn } from "../../atoms/FavouritesBtn/FafouritesBtn.tsx";
import { MainBtn } from "../../atoms/MainBtn/MainBtn.tsx";

import {
  HeaderLogo,
  HeaderWrapper,
  ListItem,
  LoginWrapper,
  NavList,
  Navigation,
  StyledNavLink,
} from "./Header.styled.tsx";

import headerLogo from '../../../assets/image_3.png';

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledNavLink to="/">
        <HeaderLogo src={headerLogo} />
      </StyledNavLink>

      <Navigation>
        <NavList>
          <ListItem>
            <StyledNavLink to="/">home</StyledNavLink>
          </ListItem>

          <ListItem>tours</ListItem>
          <ListItem>about</ListItem>
          <ListItem>help</ListItem>
        </NavList>
      </Navigation>

      <LoginWrapper>
        <StyledNavLink to="/favourites">
          <FavouritesBtn />
        </StyledNavLink>

        <MainBtn text={'sign in'} width={'163px'} />
      </LoginWrapper>
    </HeaderWrapper>
  );
};