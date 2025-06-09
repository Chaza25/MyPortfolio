import NavBar from "./NavBar"
import useStore from "../../store/useStore"
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion"

const Header = () => {

    const {color} = useStore()

    return(
        <header className={`w-full shadow-md px-4 py-6 transition-colors duration-300 ${
            color ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}>
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.h1
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center sm:text-left"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                    <span className="text-blue-600 dark:text-blue-400">Agustín</span>{" "}
                    Chazarreta Cruz |{" "}
                    <span className="text-blue-600 dark:text-blue-400">Full-Stack Developer</span>
                    </motion.h1>
                <div>
                    <NavBar/>
                </div>
            </div>
        </header>
    )
}

export default Header