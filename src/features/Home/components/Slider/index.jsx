import React, { useState } from "react"
import { CardSlider, SliderContainer } from "./styles"
import { slides } from "../../utils/sliderImages"

const Slider = () => {
  const [position, setPosition] = useState(0)
  const onRight = () => {
    if (position < slides.length - 1) {
      setPosition(position + 1)
    }
  }

  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }

  return (
    <SliderContainer>
      <div className="row">
        <div className="btns-slider">
          <button className="btn" onClick={onLeft}></button>
          <button className="btn" onClick={onRight}></button>
        </div>
        {slides.map((item, index) => (
          <CardSlider
            key={item.alt}
            className="containerImg"
            initial={{ scale: 0, rotation: -180 }}
            animate={{
              rotate: 0,
              left: `${(index - position) * 35 + 35}%`,
              scale: index === position ? 1 : 0.8,
            }}
            transition={{
              type: "keyframes",
              duration: 1,
            }}
          >
            <img src={item.image} alt={item.alt} />
            <div className="title">
              <h2>{item.alt.toUpperCase()}</h2>
            </div>
          </CardSlider>
        ))}
      </div>
    </SliderContainer>
  )
}

export default Slider
