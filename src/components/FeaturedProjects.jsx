import useStore from "../store/useStore"

const FeaturedProject = ({ project }) => {
    const { color } = useStore()

    if (!project) return null

    return (
        <div className={`${color ? "bg-gray-800" : "bg-gray-100"} rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-6 mt-10`}>
            <div className="flex-1 flex items-center justify-center">
                <img
                    src={project.imagen}
                    alt={project.titulo}
                    className="w-full max-h-80 object-contain rounded-xl transition duration-300 hover:scale-105"
                />
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold mb-3">{project.titulo}</h3>

                    <p className="text-sm leading-relaxed mb-4">
                        {project.descripcion}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tecnologias.map((tec, idx) => (
                            <span
                                key={idx}
                                className={`${color ? "bg-gray-700" : "bg-gray-200"} px-2 py-1 rounded text-xs`}
                            >
                                {tec}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    {project.repoFront && (
                        <a
                            href={project.repoFront}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
                        >
                            Repositorio Front
                        </a>
                    )}

                    {project.repoBack && (
                        <a
                            href={project.repoBack}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
                        >
                            Repositorio Back
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
                        >
                            Visitar página
                        </a>
                    )}

                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
                        >
                            Repositorio
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject