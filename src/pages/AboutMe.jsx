import { useEffect, useState } from "react"
import personalData from "../data/personalData"
import Cards from "../components/Cards"
import useStore from "../store/useStore"
import { FaDownload } from "react-icons/fa"
import icons from "../data/icons"

const AboutMe = () => {

    const {color} = useStore()
    const [datos, setDatos] = useState(null)

    useEffect(()=>{
        setDatos(personalData)
    },[])

    return(
        <div className={`${!color ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-white"} min-h-screen p-8`}>
            <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">Sobre mi</h2>

            {datos && (
                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
                    <Cards title="Mi perfil" content={
                    <>
                    <p className="mb-2"><strong>Nombre: </strong>{datos.nombre} {datos.apellido}</p>
                    <p className="mb-2"><strong>Título: </strong>{datos.titulo}</p>
                    <p><strong>Descripcion: </strong>{datos.descripcion}</p>
                    </>
                    }
                    />
                    <Cards title="Tecnologías y Skills" content={
                        <div className="mt-8 text-center">
                            <h3 className="text-2xl font-semibold mb-6">Desarrollador Web Full Stack</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
                                {datos.skills.map((tech, idx) => {
                                const { icon: Icon, color } = icons[tech];
                                return (
                                    <div key={idx} className="flex flex-col items-center gap-2">
                                    <Icon className={`${color} text-4xl hover:scale-110 transition-transform`} />
                                    <span className="text-sm">{tech}</span>
                                    </div>
                                );
                                })}
                            </div>
                        </div>
                    }/>
                    <Cards title="Hobbies" content={datos.hobbies} isList={true}/>
                </div>
            )}
            <div className="text-center">
                <a 
                href="/CV Agustin Chazarreta Cruz.pdf"
                download
                aria-label="Descargar Curriculum"
                className="inline-flex items-center gap-2 mt-10 bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition hover:scale-105">
                    <FaDownload/>
                    Descargar CV
                </a>
            </div>
        </div>
    )
}

export default AboutMe