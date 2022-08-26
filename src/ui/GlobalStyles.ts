import { Color } from "./colors";
import { createGlobalStyle } from "styled-components";
import circles from "../assets/circles.svg";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
           url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
   }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
    background-color: ${Color.Primary};
    background-image: url(${circles});
    background-repeat: no-repeat; 
}
`;
