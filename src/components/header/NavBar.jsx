// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import useStore from "../../store/useStore"
import { useEffect, useState } from "react"

const NavBar = () => {

    const [abrir, setAbrir] = useState(false)
    const {color} = useStore()
    const [active, setActive] = useState("#home")

    useEffect(() => {
        const sections = document.querySelectorAll("section")

        const handleScroll = () => {
            let current = "#home"

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100

                if (window.scrollY >= sectionTop) {
                    current = `#${section.id}`
                }
            })

            setActive(current)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const abrirMenu = () => {
        setAbrir(!abrir)
    }

    const links = (path) =>
        `transition-colors duration-300 ${
            active === path
                ? "text-blue-500 font-semibold"
                : color
                ? "text-gray-300 hover:text-blue-400 hover:scale-105"
                : "text-gray-700 hover:text-blue-400 hover:scale-105"
        }`

    const navLinks = [
        { to: "#home", label: "Home" },
        { to: "#about", label: "About Me" },
        { to: "#projects", label: "Projects" },
        { to: "#contact", label: "Contact" }
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
                    <a href={link.to} className={`${links(link.to)} cursor-pointer`}>
                    {link.label}
                    </a>
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
                    className={`absolute top-10 left-0 w-44 z-50 ${!color ? "bg-white" : "bg-gray-800"} rounded shadow-lg flex flex-col gap-2 px-4 py-3 sm:hidden`}
                >
                    {navLinks.map((link, index) => (
                    <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <a
                        href={link.to}
                        onClick={() => setAbrir(false)}
                        className={links(link.to)}
                        >
                        {link.label}
                        </a>
                    </motion.div>
                    ))}
                </motion.div>
                )}
            </AnimatePresence>
    </nav>
    )
}

export default NavBar