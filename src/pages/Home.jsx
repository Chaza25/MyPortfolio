import { Link } from "react-router-dom"
import personalData from "../data/personalData"
import useStore from "../store/useStore"

const Home = () => {

    const {color} = useStore()

    return(
        <div className={`flex flex-col items-center justify-center min-h-[70vh] p-6 text-center transition-colors duration-500 ${
            color ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}>
            <img src={personalData.foto} alt="Foto de perfil" className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg mb-6 object-cover transition-transform duration-300 hover:scale-134" />
            <h1 className={`text-4xl md:text-5xl font-bold ${
            color ? "text-white" : " text-gray-800"
        } mb-2`}>Hola! Soy {personalData.nombre} {personalData.apellido}</h1>
            <p className={`text-lg md:text-xl mb-2 ${color ? "text-gray-300" : "text-gray-600"}`}>{personalData.titulo}</p>
            <p className={`text-md ${color ? "text-gray-400" : "text-gray-800"} mb-4`}>{personalData.stack}</p>
            <Link to={"projects"} className="mt-4 bg-blue-400 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition">Ver proyectos</Link>
        </div>
    )
}

export default Home