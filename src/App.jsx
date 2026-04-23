import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from "./components/Error"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import useStore from "./store/useStore"
import Button from "./components/Button"
import ButtonW from "./components/ButtonW"
import Landing from "./pages/Landing"

function App() {

  const {color} = useStore()

  return (
    <div className={color ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <Button/>
      <ButtonW/>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
