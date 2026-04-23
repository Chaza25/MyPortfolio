import NavBar from "./NavBar"
import useStore from "../../store/useStore"
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"
import { Link } from "react-router-dom"
import Button from "../Button"

const Header = () => {

    const {color} = useStore()

    return(
        <header className={`w-full sticky top-0 z-50 backdrop-blur-md shadow-lg shadow-black/10 px-4 py-4 transition-colors duration-300 ${
            color
            ? "bg-gray-900/70 text-white backdrop-blur-md"
            : "bg-white/70 text-gray-900 backdrop-blur-md"
            }`}>
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.h1
                    className="flex flex-nowrap flex-col lg:flex-row text-2xl sm:text-3xl font-extrabold tracking-tight text-center sm:text-left"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <span className="text-nowrap">
                        <a href="#home">
                        <span className={`${color ? "text-blue-600" : "text-blue-400"}`}>Agustín</span>{" "}
                        Chazarreta Cruz
                        </a>
                        <span className="hidden lg:inline px-1">|</span> {" "}
                    </span> 
                    <span className={`${color ? "text-blue-600" : "text-blue-400"} sm:text-start text-center`}>Full-Stack Developer</span>
                    </motion.h1>
                <div className="flex items-center gap-4">
                    <NavBar/>
                    <Button/>
                </div>
            </div>
        </header>
    )
}

export default Header