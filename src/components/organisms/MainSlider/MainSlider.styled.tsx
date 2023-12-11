import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 96px;
`;

export const SlideWrapper = styled.div`
  position: relative;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: #1E1E1E;
  opacity: 0.48;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  font-family: Syne;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 159px 0 0 167px;
  color: #fff;
`;

export const Subtitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  z-index: 5;
`;

export const Title = styled.h1`
  font-size: 310px;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  z-index: 5;
`;

export const BulletsContainner = styled.div`
  max-width: 120px;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  position: absolute !important;
  top: 50% !important;
  left: 44% !important;
  z-index: 5;
`;

export const ExploreBtn = styled.button`
  font-family: Lato;
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
`;

export const ArrowBottomIcon = styled.img`
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
`;

export const ExploreWrapper = styled.div`
  display: flex;
  gap: 19px;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 5;
  padding-bottom: 33px;

  &:hover {
    ${ExploreBtn},
    ${ArrowBottomIcon} {
      transform: scale(1.2);
    }

    ${ArrowBottomIcon} {
      margin-left: 20px;
    }
  }
`;

export const ExploreLink = styled.a`
  display: flex;
  text-decoration: none;
`;
