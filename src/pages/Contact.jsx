import { useState,useRef } from "react"
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import useStore from "../store/useStore"
import emailjs from "@emailjs/browser"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { MdEmail, MdLocationOn, MdWork, MdPhone } from "react-icons/md"

const Contact = () => {

    const formRef = useRef()

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        telefono: "",
        motivo: "",
    })

    const [mensaje, setMensaje] = useState("")
    const [error, setError] = useState(false)
    const {color} = useStore()
    const [enviar, setEnviar] = useState(false)

    const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value},)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!form.nombre || !form.email || !form.motivo) {
            setMensaje("Por favor, complete los campos obligatorios")
            setError(true)
            return
        }

        setEnviar(true)
        emailjs.sendForm("service_h1ob6xq", "template_hvi8fdn", formRef.current, "d3l5kINtTP4TE9hpS")
        .then(() => {
            setMensaje("Mensaje enviado correctamente. ¡Gracias por contactarme!")
            setError(false)
            
            setForm({
                nombre: "",
                email: "",
                telefono: "",
                motivo: "", 
            })
        })
        .catch((err) => {
            console.log("Error al enviar el formulario", err);
            setMensaje("Ocurrio un error al enviar el formulario. Por favor, intente nuevamente.")
            setError(true)
        })
        .finally(() => setEnviar(false))
        
    }
        
    return(
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${color ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen px-4 py-20 transition-colors duration-300`}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4">Contacto</h1>

                <p className={`text-center max-w-2xl mx-auto mb-12 ${color ? "text-gray-300" : "text-gray-600"}`}>
                    ¿Tenés una propuesta, una idea en mente, una oportunidad laboral o querés conocer más sobre mi trabajo?
                    Estoy disponible para nuevos desafíos.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

                    {/* INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className={`${color ? "bg-gray-800" : "bg-gray-100"} rounded-2xl p-8 shadow-lg flex flex-col justify-between`}
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Trabajemos juntos</h2>

                            <p className={`mb-6 leading-relaxed ${color ? "text-gray-300" : "text-gray-700"}`}>
                                Si buscás un desarrollador full-stack comprometido, con experiencia en proyectos reales
                                y enfoque en construir soluciones funcionales, podés contactarme por cualquiera de estos medios.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MdWork className="text-blue-500 text-2xl" />
                                    <span>Disponible para oportunidades laborales y proyectos freelance</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdLocationOn className="text-blue-500 text-2xl" />
                                    <span>Argentina · Modalidad remota o híbrida</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdPhone className="text-blue-500 text-2xl" />
                                    <a
                                        href="tel:+543865636206"
                                        className="hover:text-blue-500 transition"
                                    >
                                        +54 9 3865 636206
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MdEmail className="text-blue-500 text-2xl" />
                                    <a
                                        href="mailto:aguschacruz@gmail.com"
                                        className="hover:text-blue-500 transition"
                                    >
                                        aguschacruz@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="font-semibold mb-3">También podés encontrarme en:</p>

                            <div className="flex gap-4 text-3xl">
                                <a
                                    href="https://github.com/Chaza25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 hover:scale-110 transition"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://wa.link/py5trx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:text-green-600 hover:scale-110 transition"
                                >
                                    <FaWhatsapp />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/agust%C3%ADn-chazarreta-cruz/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500 hover:scale-110 transition"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* FORMULARIO */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className={`${color ? "bg-gray-800" : "bg-gray-100"} shadow-lg rounded-2xl p-8 flex flex-col gap-5 transition-colors duration-300`}
                    >
                        <div>
                            <label htmlFor="nombre" className="block font-semibold mb-1">Nombre *</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                                    color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                                }`}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-semibold mb-1">Email *</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                                    color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                                }`}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="telefono" className="block font-semibold mb-1">Número de celular (opcional)</label>
                            <input
                                type="tel"
                                name="telefono"
                                id="telefono"
                                value={form.telefono}
                                onChange={handleChange}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                                    color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                                }`}
                            />
                        </div>

                        <div>
                            <label htmlFor="motivo" className="block font-semibold mb-1">Motivo de la consulta *</label>
                            <textarea
                                name="motivo"
                                id="motivo"
                                value={form.motivo}
                                onChange={handleChange}
                                rows="5"
                                className={`w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                                    color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                                }`}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={enviar}
                            className={`${color ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"} text-white py-3 rounded-lg font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed`}
                        >
                            {enviar ? "Enviando..." : "Enviar mensaje"}
                        </button>

                        {mensaje && (
                            <p className={`font-medium ${error ? "text-red-500" : "text-green-500"}`}>
                                {mensaje}
                            </p>
                        )}
                    </motion.form>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact