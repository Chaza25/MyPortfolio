import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import useStore from "../../store/useStore";


const redesSociales = [
    { href: "https://github.com/Chaza25", icon: <FaGithub />, color: "hover:text-blue-500" },
    { href: "https://www.linkedin.com/in/agust%C3%ADn-chazarreta-cruz-1b8565232/", icon: <FaLinkedin />, color: "hover:text-blue-500" },
    { href: "https://wa.link/py5trx", icon: <FaWhatsapp />, color: "text-green-500 hover:text-green-600" }, 
];

const Footer = () => {

    const {color} = useStore()

    return(
        <footer className={`py-6 shadow-inner transition-colors duration-300
        ${color ? "bg-gray-900 text-gray-300 border-gray-700" : "bg-white text-gray-700 border-gray-300"}`}>
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between border-t border-gray-300 dark:border-gray-700 pt-4">
                <h2 className="text-sm">&copy; 2025 Agustin Chazarreta Cruz. Todos los derechos reservados.</h2>
                <div className="flex gap-6 mt-4 sm:mt-0 text-2xl">
                {redesSociales.map(({ href, icon, color }, i) => (
                    <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${color} transition-colors`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Link to ${href}`}
                    >
                    {icon}
                    </motion.a>
                ))}
            </div>
        </div>
    </footer>
        // <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 shadow-inner">
        //     <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        //         <h2 className="text-sm">© 2025 Agustin Chazarreta Cruz. Todos los derechos reservados.</h2>
        //         <div className="flex gap-4 mt-2 sm:mt-0 text-xl">
        //             <a href="https://github.com/Chaza25" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"> <FaGithub /> </a>
        //             <a href="https://www.linkedin.com/in/agust%C3%ADn-chazarreta-cruz-1b8565232/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"> <FaLinkedin/> </a>
        //             <a href="https://wa.link/py5trx" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition text-2xl"> <FaWhatsapp/> </a>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Footer