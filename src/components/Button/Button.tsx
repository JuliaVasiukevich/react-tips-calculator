import React from "react";
import { ButtonStyled } from "./styles";

interface IProps {
  disabled: boolean; 
}

export const Button = ({ disabled }: IProps) => {
  return <ButtonStyled  $disabled={disabled}> Ohhhoooo 🍻 </ButtonStyled>;
};
