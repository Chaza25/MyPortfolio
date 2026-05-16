/* eslint-disable no-unused-vars */
import personalData from "../data/personalData"
import useStore from "../store/useStore"
import { Typewriter } from "react-simple-typewriter"
import icons from "../data/icons"

// Dividimos los iconos en dos filas
const iconKeys = Object.keys(icons)
const row1 = iconKeys.slice(0, Math.ceil(iconKeys.length / 2))
const row2 = iconKeys.slice(Math.ceil(iconKeys.length / 2))

const IconBand = ({ items, reverse = false }) => {
    const doubled = [...items, ...items]

    return (
        <div className="overflow-hidden w-full py-2">
            <div className={`flex gap-8 w-max ${reverse ? "animate-scroll-reverse" : "animate-scroll"}`}>
                {doubled.map(({ Icon, color }, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 min-w-[48px]">
                        <Icon className={`text-3xl ${color} opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-200`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Home = () => {
    const { color } = useStore()

    const band1 = row1.map(key => ({ Icon: icons[key].icon, color: icons[key].color }))
    const band2 = row2.map(key => ({ Icon: icons[key].icon, color: icons[key].color }))

    return (
        <div className={`flex flex-col transition-colors duration-500 ${color ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>

            {/* Hero content con animacion de entrada */}
            <div className="relative flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">

                <img
                    src={personalData.foto}
                    alt="Foto de perfil"
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg mb-6 object-cover transition-transform duration-300 hover:scale-110 animate-fade-in-down"
                />

                <h1
                    className={`text-4xl md:text-5xl font-bold mb-2 ${color ? "text-white" : "text-gray-800"} animate-fade-in`}
                    style={{ animationDelay: "0.2s", animationFillMode: "both" }}
                >
                    ¡Hola! Soy
                    <Typewriter
                        words={[" Agustín Chazarreta Cruz"]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>

                <br />

                <p
                    className={`text-lg md:text-xl mb-2 ${color ? "text-gray-300" : "text-gray-600"} animate-fade-in`}
                    style={{ animationDelay: "0.4s", animationFillMode: "both" }}
                >
                    {personalData.stack} | {personalData.titulo}
                </p>

                <p
                    className="text-sm opacity-80 mt-1 animate-fade-in"
                    style={{ animationDelay: "0.6s", animationFillMode: "both" }}
                >
                    React • Node.js • Express.js • MySQL
                </p>

                <p
                    className={`text-md mb-4 ${color ? "text-gray-400" : "text-gray-800"} animate-fade-in`}
                    style={{ animationDelay: "0.8s", animationFillMode: "both" }}
                >
                    Autor del Sistema de Gestión Contable en producción · Especializado en React, Node.js y MySQL
                </p>

                <div
                    className="flex flex-col items-center gap-2 animate-fade-in"
                    style={{ animationDelay: "1s", animationFillMode: "both" }}
                >
                    <a href="#projects" className="mt-2 bg-blue-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition">
                        Ver proyectos
                    </a>
                    <a href="#about" className="mt-2 bg-blue-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition">
                        Conóceme
                    </a>
                </div>
            </div>

            {/* Bandas deslizantes con iconos */}
            <div
                className={`w-full py-4 ${color ? "bg-gray-800" : "bg-gray-50"} animate-fade-in`}
                style={{ animationDelay: "1.2s", animationFillMode: "both" }}
            >
                <IconBand items={band1} reverse={false} />
                <IconBand items={band2} reverse={true} />
            </div>

        </div>
    )
}

export default Home