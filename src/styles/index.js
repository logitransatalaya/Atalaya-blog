import { createGlobalStyle } from "styled-components"
import { colors, typography } from "./theme"

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
