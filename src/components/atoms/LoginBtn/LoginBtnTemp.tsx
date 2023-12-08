import React from "react";
import { LoginBtnTemp } from "./LoginBtnTemp.styled.tsx";

export const LoginBtn = ({ text }) => {
  return (
    <LoginBtnTemp>{text}</LoginBtnTemp>
  );
};
