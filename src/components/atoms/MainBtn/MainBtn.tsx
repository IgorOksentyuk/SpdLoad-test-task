import React from "react";
import { MainBtnTemp } from "./MainBtnTemp.styled.tsx";

type MainBtnProps = {
  text: string;
  width?: string;
}

export const MainBtn: React.FC<MainBtnProps> = ({ text, width }) => {
  return (
    <MainBtnTemp width={width}>{text}</MainBtnTemp>
  );
};
