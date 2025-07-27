import projects from "../data/projectsData"
import useStore from "../store/useStore"

const Projects = () => {

    const {color} = useStore()

    return(
        <div className={`${color ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6`}>
            <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((proyecto) => (
                    <div key={proyecto.id} className={`${color ? "bg-gray-800 text-white" : "bg-white text-black"} shadow-md p-4 rounded-lg transition`}>
                            <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105" />
                            <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
                            <p className="text-sm flex-grow">{proyecto.descripcion}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {proyecto.tecnologias.map((tec, idx) => (
                                    <span key={idx} className={`${color ? "bg-gray-700" : "bg-gray-200"} px-2 py-1 rounded text-xs`}>{tec}</span>
                                ))}
                            </div>
                            <div className="flex justify-between mt-4">
                                {proyecto.repoFront && proyecto.repoBack ? (
                                    <>
                                    <a href={proyecto.repoFront} target="_blank" rel="noopener noreferrer" className={`${color ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-600"} text-white px-4 py-1 rounded-full text-sm transition`}>Repositorio Front</a>
                                    <a href={proyecto.repoBack} target="_blank" rel="noopener noreferrer" className={`${color ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-600"} text-white px-4 py-1 rounded-full text-sm transition`}>Repositorio Back</a>
                                    </>
                                ) : (
                                    <>
                                    <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className={`${color ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-600"} text-white px-4 py-1 rounded-full text-sm transition`}>Visita la pagina</a>
                                    <a href={proyecto.remo} target="_blank" rel="noopener noreferrer" className={`${color ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-600"} text-white px-4 py-1 rounded-full text-sm transition`}>Repositorio</a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects