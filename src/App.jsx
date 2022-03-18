import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WorkWithus from "./pages/WorkWithUs"
import AtalayaApp from "./pages/AtalayaApp"
import News from "./pages/News"
import Us from "./pages/Us"
import Allies from "./pages/Allies"
import { Application } from "./styles"
import LogoAtalaya from "./assets/icons/logo.svg"

function App() {
  return (
    <Application>
      <img src={LogoAtalaya} alt="Logo" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trabaja-con-nosotros" element={<WorkWithus />} />
          <Route path="atalaya-mobile" element={<AtalayaApp />} />
          <Route path="ultimas-noticias" element={<News />} />
          <Route path="nosotros" element={<Us />} />
          <Route path="aliados" element={<Allies />} />
        </Routes>
      </BrowserRouter>
    </Application>
  )
}

export default App
