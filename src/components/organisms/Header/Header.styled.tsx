import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  width: 100%;
  max-width: 1440px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: rgba(30, 30, 30, 0.48);
  color: #fff;
`;

export const HeaderLogo = styled.img`
  width: 229px;
  height: 42px;
  margin-left: 80px;
`;

export const Navigation = styled.nav`
`;

export const NavList = styled.ul`
  display: flex;
  gap: 32px;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 1px;

    background-color: #fff;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 80px;
`;
