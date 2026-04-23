import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import { FaCircle } from "react-icons/fa"
import projects from "../data/projectsData"
import useStore from "../store/useStore"
import ProjectModal from "../components/ProjectModal"

const Projects = () => {

    const [current, setCurrent] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const images = [
        "/src/assets/SGC Inicio.png",
        "/src/assets/SGCdashboard.png",
        "/src/assets/SGC panel.png",
        "/src/assets/SGC calendario impositivo.png"
    ]

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrent((current + 1) % images.length),
        onSwipedRight: () => setCurrent(current === 0 ? images.length - 1 : current - 1),
        trackMouse: true
    })

    const {color} = useStore()

    return(
        <div className={`${color ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-6`}>
            <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
            {/* PROYECTO DESTACADO */}
            <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6 text-center">Proyecto en Producción</h3>

                <div className={`${color ? "bg-gray-800" : "bg-gray-100"} rounded-xl shadow-lg p-6 flex flex-col lg:flex-row gap-6`}>

                    {/* IMÁGENES */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div 
                            {...handlers}
                            className="relative w-full h-80 flex items-center justify-center overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"
                        >
                            <img 
                                src={images[current]} 
                                className="max-h-full max-w-full object-contain transition-all duration-500 ease-in-out"
                            />

                            {/* BOTON IZQUIERDA */}
                            <button 
                                onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition"
                            >
                                ←
                            </button>

                            {/* BOTON DERECHA */}
                            <button 
                                onClick={() => setCurrent((current + 1) % images.length)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black/70 transition"
                            >
                                →
                            </button>
                        </div>

                        {/* INDICADORES (puntitos) */}
                        <div className="flex gap-2 mt-3">
                            {images.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition ${
                                        current === index ? "bg-blue-500 scale-125" : "bg-gray-400"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Sistema de Gestión Contable</h3>

                            <div className="mb-4 space-y-3 text-sm leading-relaxed">
                                <p className="font-semibold text-base">Problema</p>
                                <p>El cliente gestionaba su trabajo utilizando múltiples herramientas dispersas como Excel, WhatsApp y notas, lo que generaba desorganización, pérdida de información y dificultad para controlar vencimientos y clientes.</p>

                                <p className="font-semibold text-base">Solución</p>
                                <p> Desarrollé un Sistema de Gestión Contable (SGC) enfocado en centralizar toda la operación en una única plataforma web. El sistema incluye:
                                    <ul className="space-y-2 mt-2">
                                        <li className="flex items-center gap-2">
                                            <FaCircle size={6}/> Gestión de usuarios con roles y permisos (ADMIN, CONTADOR, JUNIOR)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCircle size={6}/> Administración de clientes activos y oportunidades
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCircle size={6}/> Calendario impositivo con obligaciones fiscales (ARCA y DGR)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCircle size={6}/> Panel fiscal para la creación y asignación de obligaciones
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCircle size={6}/> Calendario dinámico con vencimientos fiscales y tareas por cliente
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <FaCircle size={6}/> Módulo de configuración (políticas de contraseñas, alertas, etc.)
                                        </li>
                                    </ul>
                                </p>

                                <p className="font-semibold text-base">Resultado</p>
                                <p>El sistema se encuentra actualmente en uso en producción, permitiendo al cliente optimizar su trabajo diario, centralizar la información y acceder a ella en cualquier momento mediante una aplicación web responsive.</p>

                                <p className="font-semibold text-base">Valor agregado</p>
                                <p>El sistema está siendo comercializado como solución para contadores independientes y estudios contables.
                                Su arquitectura modular y escalable permite adaptar funcionalidades según las necesidades de cada cliente, facilitando la incorporación o eliminación de módulos</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">🟢 En producción</span>
                                <span className={`${color ? "bg-gray-700" : "bg-gray-200"} px-2 py-1 rounded text-xs`}>
                                    React
                                </span>
                                <span className={`${color ? "bg-gray-700" : "bg-gray-200"} px-2 py-1 rounded text-xs`}>
                                    Node.js
                                </span>
                                <span className={`${color ? "bg-gray-700" : "bg-gray-200"} px-2 py-1 rounded text-xs`}>
                                    MySQL
                                </span>
                                <span className={`${color ? "bg-gray-700" : "bg-gray-200"} px-2 py-1 rounded text-xs`}>
                                    Tailwind CSS
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {/* Si no podés mostrar demo */}
                            <button className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm cursor-not-allowed">
                                Demo privada
                            </button>

                            <button
                            onClick={() => setOpenModal(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
                            >
                                Ver detalles
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((proyecto) => (
                    <div key={proyecto.id} className={`${color ? "bg-gray-800 text-white" : "bg-white text-black"} shadow-md p-4 rounded-lg transition`}>
                            <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full object-contain rounded-t-lg max-h-60 transition duration-300 hover:scale-105" />
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
                                    <a href={proyecto.repo} target="_blank" rel="noopener noreferrer" className={`${color ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-400 hover:bg-blue-600"} text-white px-4 py-1 rounded-full text-sm transition`}>Repositorio</a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {openModal && (
                <ProjectModal onClose = {() => setOpenModal(false)} />
            )}
        </div>
    )
}

export default Projects