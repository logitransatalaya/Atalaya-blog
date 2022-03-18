import { motion } from "framer-motion"
import styled from "styled-components"

export const SliderContainer = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .row {
    position: relative;
    width: 75%;
    height: 100%;
    overflow: hidden;

    .btns-slider {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .btn {
        z-index: 1;
        width: 30%;
        height: 90%;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .row {
      min-width: 100%;

      .btns-slider {
        .btn {
          cursor: none;
          display: none;
        }
      }
    }
  }
`

export const CardSlider = styled(motion.div)`
  position: absolute;
  width: 30%;
  height: 100%;
  border-radius: 10% 10% 0 0;
  top: 0;
  overflow: hidden;

  .navigation {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;

    .image-card {
      width: calc(100% * 2);
      height: 87%;
    }

    .title {
      width: 100%;
      height: 13%;
      background: var(--primary);
      color: var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 767px) {
    min-width: 70%;
  }
`
