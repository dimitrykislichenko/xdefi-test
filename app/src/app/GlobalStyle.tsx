import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-image: linear-gradient(180deg,#8d10fb 0,#0ec7bd 100%);
    background-repeat: no-repeat;
  }
`;
