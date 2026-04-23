import useStore from "../store/useStore"

const ProjectModal = ({ onClose }) => {

    const { color } = useStore()

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            
            <div className={`${color ? "bg-gray-900 text-white" : "bg-white text-black"} 
                w-full max-w-3xl rounded-xl p-6 relative shadow-xl animate-fadeIn`}>

                {/* BOTON CERRAR */}
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 text-xl font-bold hover:scale-110 transition"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-4">
                    Sistema de Gestión Contable - Detalles
                </h2>

                <div className="space-y-4 text-sm leading-relaxed">

                    <p>
                        Este sistema fue desarrollado como una solución integral para la gestión contable en estudios,
                        automatizando procesos y mejorando la eficiencia operativa para cada integrante del equipo.
                    </p>

                    <div>
                        <p className="font-semibold">Arquitectura</p>
                        <p>
                            Arquitectura modular organizada en capas (controllers, services y routes), 
                            diseñada para ser escalable y adaptable a distintos tipos de clientes y necesidades.
                        </p>

                        <ul className="mt-2 space-y-1">
                            <li><b>Frontend:</b> React, Tailwind CSS, Vite, Zustand</li>
                            <li><b>Backend:</b> Node.js, Express</li>
                            <li><b>Base de datos:</b> MySQL</li>
                        </ul>
                    </div>

                    <p>
                        <b>Funcionalidades clave:</b>
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>Gestión completa de usuarios, roles y permisos</li>
                        <li>CRUD de clientes y oportunidades</li>
                        <li>Manejo de tareas especificas de cada cliente</li>
                        <li>Calendario impositivo dinámico</li>
                        <li>Crea obligaciones fiscales impuestas por ARCA, DGR, etc</li>
                        <li>Gestión fiscal para manejo de vencimientos de clientes</li>
                        <li>Alerta de vencimientos de obligaciones fiscales</li>
                        <li>Dashboard con métricas en tiempo real</li>
                        <li>Sistema de auditoría de acciones</li>
                        <li>Configuraciones personalizables</li>
                    </ul>

                    <p>
                        <b>Enfoque:</b> Se priorizó la usabilidad, escalabilidad y organización del código, 
                        permitiendo agregar nuevos módulos sin afectar el sistema existente.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ProjectModal