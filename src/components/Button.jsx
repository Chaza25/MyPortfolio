import {FiSun, FiMoon} from "react-icons/fi"
import useStore from "../store/useStore"
import { useState } from "react"

const Button = () => {

    const {cambiarColor, color} = useStore()
    const [rotacion, setRotacion] = useState(0)

    const handleClick = () => {
        cambiarColor()
        setRotacion((prev)=> prev + 180)
    }

    return(
        <div>
            <button onClick={handleClick} className="fixed top-4 left-2 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition duration-300 ease-in-out shadow-lg" title="cambiar tema">
                {/* {color ? (<FiMoon className="text-white text-xl"/>) : (<FiSun className="text-yellow-500 text-xl"/>)} */}
                <div className="relative w-6 h-6" style={{
                    transform: `rotate(${rotacion}deg)`,
                    transition: "transform 0.5s ease-in-out",
        }}>
                    <FiSun
                    className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                    color ? "opacity-0 scale-75" : "opacity-100 scale-100 text-yellow-500"
                        }`}
                    />
                    <FiMoon
                    className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                    color ? "opacity-100 scale-100 text-white" : "opacity-0 scale-75"
                        }`}
                    />
                </div>
            </button>
        </div>
    )
}

export default Button