import { Link } from "react-router-dom"
import personalData from "../data/personalData"
import useStore from "../store/useStore"
import { Typewriter } from "react-simple-typewriter"
import icons from "../data/icons"

const Home = () => {

    const {color} = useStore()

    return(
        <div className={`relative flex flex-col items-center justify-center min-h-[70vh] p-6 text-center transition-colors duration-500 ${
                color ? "bg-gray-900 text-white" : "bg-white text-gray-800"
            }`}>
                <img src={personalData.foto} alt="Foto de perfil" className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg mb-6 object-cover transition-transform duration-300 hover:scale-110" />
                <h1 className={`text-4xl md:text-5xl font-bold ${
                color ? "text-white" : " text-gray-800"
            } mb-2`}>¡Hola! Soy 
                <Typewriter
                words={[' Agustín Chazarreta Cruz']}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                /> </h1>
                <br />
                <p className={`text-lg md:text-xl mb-2 ${color ? "text-gray-300" : "text-gray-600"}`}>{personalData.stack} | {personalData.titulo}</p>
                <p className="text-sm opacity-80 mt-1">
                    React • Node • MySQL • Python
                </p>
                <p className={`text-md ${color ? "text-gray-400" : "text-gray-800"} mb-4`}>Desarrollador Full-Stack enfocado en construir soluciones reales, funcionales y escalables.</p>
                <a href="#projects" className="mt-4 bg-blue-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition">Ver proyectos</a>
                <a href="#about" className="mt-4 bg-blue-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition">Conóceme</a>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {Object.keys(icons).map((tech, i) => {
                        const iconData = icons[tech];

                        if (!iconData) return null;

                        const { icon: Icon, color } = iconData;

                        return (
                            <Icon
                                key={i}
                                className={`absolute text-4xl opacity-30 ${color} animate-float transition-all duration-300 hover:opacity-100 hover:scale-125 hover:drop-shadow-lg pointer-events-auto`}
                                style={{
                                    top: `${10 + Math.random() * 80}%`,
                                    left: `${5 + Math.random() * 90}%`,
                                    animationDuration: `${5 + i}s`
                                }}
                            />
                        );
                    })}
                </div>
        </div>
    )
}

export default Home