import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 411px;
  display: flex;
  flex-direction: column;
  border: 1px solid #D3EAFF;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 296px;
  margin-bottom: 32px
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-inline: 32px;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 64px;
`;

export const CardTitle = styled.h4`
  font-family: Syne;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: #1E1E1E;
`;

export const CardText = styled.h4`
  max-height: 80px;
  overflow: hidden;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  margin: 0;
  color: #556B84;
  transition: max-height 0.3s ease;
  cursor: pointer;

  &:hover {
    max-height: 276px;
  }
`;

export const CardButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`;