import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Error from "./components/Error"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import useStore from "./store/useStore"
import Button from "./components/Button"
import ButtonW from "./components/ButtonW"

function App() {

  const {color} = useStore()

  return (
    <div className={color ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Button/>
      <ButtonW/>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
