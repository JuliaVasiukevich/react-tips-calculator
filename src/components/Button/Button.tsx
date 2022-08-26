import { ButtonStyled } from "./styles";

interface IProps {
  isDisabled: boolean; 
}

export const Button = ({ isDisabled }: IProps) => {
  console.log(isDisabled)
  return <ButtonStyled disabled={isDisabled} $disabled={isDisabled}> Ohhhoooo 🍻 </ButtonStyled>;
};
