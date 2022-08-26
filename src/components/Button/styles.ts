import { Color } from "./../../ui/colors";
import styled from "styled-components";

const ButtonStyled = styled.button<{ $disabled: boolean}>`
  display: inline-block;
  color: ${Color.White};
  background-color: ${Color.PrimaryBright};
  font-size: 24px;
  border: none;
  display: block;
  width: 100%;
  padding-block: 13px;
   opacity: ${({ $disabled }) => ($disabled ? "0.5" : "1")};
   cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;

export { ButtonStyled };
