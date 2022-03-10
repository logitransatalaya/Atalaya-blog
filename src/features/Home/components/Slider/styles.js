import { motion } from "framer-motion"
import styled from "styled-components"

export const SliderContainer = styled.div`
  width: 100%;
  height: 60%;
  /* border: 1px dashed red; */
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
    /* border: 1px dashed blue; */
    /* background-color: red; */
    overflow: hidden;

    .btns-slider {
      width: 100%;
      height: 100%;
      /* background-color: green; */
      display: flex;
      align-items: center;
      justify-content: space-between;

      .btn {
        z-index: 1;
        width: 30%;
        height: 90%;
        /* background-color: rgba(255, 255, 255, 0.3); */
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
`

export const CardSlider = styled(motion.div)`
  position: absolute;
  width: 30%;
  height: 100%;
  overflow: hidden;
  border-radius: 10% 10% 0 0;
  /* border: 1px dashed red; */
  top: 0;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    flex: 75%;
  }

  .title {
    width: 100%;
    background: var(--blue);
    flex: 1;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
