import { ButtonStyled } from "./styles";

interface IProps {
  isDisabled: boolean; 
}

export const Button = ({ isDisabled }: IProps) => {
  return <ButtonStyled  $disabled={isDisabled}> Ohhhoooo 🍻 </ButtonStyled>;
};
