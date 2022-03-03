import styled from "styled-components"
import background from "../../assets/images/background.png"

export const HomeContainer = styled.main`
  height: 100vh;
  width: 100%;
  background-color: var(--blue-opacity);
  background-image: url(${background});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: 0 40%;
`
