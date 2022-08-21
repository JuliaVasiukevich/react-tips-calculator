import { Color } from "./../../ui/colors";
import styled from "styled-components";

const ButtonStyled = styled.button<{ $disabled: boolean}>`
  display: inline-block;
  color: ${Color.white};
  background-color: ${Color.primaryBright};
  font-size: 24px;
  border: none;
  display: block;
  width: 100%;
  padding-block: 13px;
   opacity: ${({ $disabled }) => ($disabled ? "1" : "0.5")};
   cursor: ${({ $disabled }) => ($disabled ? "pointer" : "not-allowed")};
`;

export { ButtonStyled };
