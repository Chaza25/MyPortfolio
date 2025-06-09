import {Link, useLocation} from "react-router-dom"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import useStore from "../../store/useStore"
import { useState } from "react"

const NavBar = () => {

    const [abrir, setAbrir] = useState(false)
    const {color} = useStore()
    const location = useLocation()

    const abrirMenu = () => {
        setAbrir(!abrir)
    }

    const links = (path) => `hover:text-blue-500 transition-colors duration-300 ${
        location.pathname === path 
        ? "text-blue-600 dark:text-blue-400 font-semibold"
        : color 
        ? "text-gray-300"
        : "text-gray-700"
    }`

    const navLinks = [
    { to: "/", label: "Home" },
    { to: "/AboutMe", label: "About Me" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" }
    ]

    return(
        <nav className="relative">
            {/* Botón hamburguesa */}
            <div className="sm:hidden flex items-center">
                <button onClick={abrirMenu} className="text-2xl focus:outline-none">
                {abrir ? <IoMdClose /> : <GiHamburgerMenu />}
                </button>
            </div>

            {/* Links grandes */}
            <div className="hidden sm:flex gap-4">
                {navLinks.map((link, index) => (
                <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3}}
                >
                    <Link to={link.to} className={links(link.to)}>
                    {link.label}
                    </Link>
                </motion.div>
                ))}
            </div>

            {/* Menú móvil */}
            <AnimatePresence>
                {abrir && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-10 left-0 w-44 z-50 bg-white dark:bg-gray-800 rounded shadow-lg flex flex-col gap-2 px-4 py-3 sm:hidden"
                >
                    {navLinks.map((link, index) => (
                    <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Link
                        to={link.to}
                        onClick={() => setAbrir(false)}
                        className={links(link.to)}
                        >
                        {link.label}
                        </Link>
                    </motion.div>
                    ))}
                </motion.div>
                )}
            </AnimatePresence>
    </nav>
        // <motion.nav 
        // initial={{ opacity: 0, y: -10 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.8 }}
        // className="mt-2 sm:mt-0 flex gap-6">
        //     <Link to={"/"} className={links("/")}>Home</Link>
        //     <Link to={"/AboutMe"} className={links("/AboutMe")}>About Me</Link>
        //     <Link to={"/projects"} className={links("/projects")}>Projects</Link>
        //     <Link to={"/contact"} className={links("/contact")}>Contact</Link>
        // </motion.nav>
        //Aguschaza10
    )
}

export default NavBar