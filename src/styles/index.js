import styled, { createGlobalStyle } from "styled-components"
import { colors, typography } from "./theme"
import background from "../assets/images/background.png"

export const GlobalStyle = createGlobalStyle`
  /* colors variables */
  ${colors}

  /* Fonts variables */
  ${typography}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
`
export const Application = styled.main`
  height: 100vh;
  width: 100%;
  background-color: var(--primary-opacity);
  background-image: url(${background});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: 0 50%;
  display: flex;
  flex-direction: column;

  img {
    width: 30rem;
  }

  .footer {
    width: 100%;
    height: 5rem;
    background-color: red;
  }
`
