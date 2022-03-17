import React, { useState } from "react"
import { CardSlider, SliderContainer } from "./styles"
import { slides } from "../../utils/sliderImages"
import { Outlet, Link } from "react-router-dom"
import { motion } from "framer-motion"

const Slider = () => {
  const [position, setPosition] = useState(0)

  // const onRight = () => {
  //   if (position < slides.length - 1) {
  //     setPosition(position + 1)
  //   }
  // }

  // const onLeft = () => {
  //   if (position > 0) {
  //     setPosition(position - 1)
  //   }
  // }

  const onMove = (direction) => {
    if (direction === "right") {
      if (position < slides.length - 1) {
        setPosition(position + 1)
      }
    } else {
      if (position > 0) {
        setPosition(position - 1)
      }
    }
  }

  const variantsImg = {
    center: {
      x: "-26%",
    },
    left: {
      x: "-50%",
    },
    right: {
      x: "-10%",
    },
  }

  return (
    <SliderContainer>
      <div className="row">
        <div className="btns-slider">
          <button className="btn" onClick={() => onMove("left")}></button>
          <button className="btn" onClick={() => onMove("right")}></button>
        </div>
        {slides.map((item, index) => {
          return (
            <CardSlider
              key={item.alt}
              className="containerImg"
              initial={{ scale: 0.5, rotation: -180 }}
              animate={{
                rotate: 0,
                left: `${(index - position) * 35 + 35}%`,
                scale: index === position ? 1 : 0.8,
              }}
              transition={{
                type: "keyframes",
                duration: 0.7,
              }}
            >
              <Link to={item.url} className="navigation">
                <motion.img
                  className="image-card"
                  src={item.image}
                  alt={item.alt}
                  animate={
                    index === position
                      ? "center"
                      : index > position
                      ? "right"
                      : "left"
                  }
                  variants={variantsImg}
                  transition={{
                    type: "keyframes",
                    duration: 0.7,
                  }}
                />
                <div className="title">
                  <h2>{item.alt.toUpperCase()}</h2>
                </div>
              </Link>
            </CardSlider>
          )
        })}
      </div>
    </SliderContainer>
  )
}

export default Slider
