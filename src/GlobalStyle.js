import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.color.whisper};
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }
`;