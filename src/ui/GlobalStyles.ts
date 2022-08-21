import { Color } from "./colors";
import { createGlobalStyle } from "styled-components";

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
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 24px;
}

body {
    height: 100vh;
    background-color: ${Color.primary};
    background-image: url(${require("./../assets/circles.svg").default});
    background-repeat: no-repeat; 
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
