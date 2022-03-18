import React from "react"
import Footer from "../../components/Footer"
import Slider from "../../components/Slider"
import { HomeContainer } from "./styles"

const Home = () => {
  return (
    <HomeContainer>
      <Slider />
      <Footer />
    </HomeContainer>
  )
}

export default Home
