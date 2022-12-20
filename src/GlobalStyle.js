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
    color: ${({ theme }) => theme.color.woodsmoke};
    font-family: 'Poppins', sans-serif;
    overflow-wrap: anywhere;
  }
`;