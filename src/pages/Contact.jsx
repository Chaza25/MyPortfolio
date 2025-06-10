import { useState,useRef } from "react"
import {FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import useStore from "../store/useStore"
import emailjs from "@emailjs/browser"

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
        <div className={`max-w-2xl mx-auto px-4 py-8 mt-20 transition-colors duration-300 ${
        color ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}>
            <h1 className="text-3xl font-bold text-center mb-4">Contacto</h1>
            <p className={`text-center mb-6 transition-colors duration-300 ${color ? "text-gray-300" : "text-gray-600"}`}>Para contactarme puedes llenar el siguiente formulario o buscarme en las redes sociales</p>
            <div className="flex justify-center gap-4 mt-2 sm:mt-0 text-xl">
                    <a href="https://github.com/Chaza25" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"> <FaGithub /> </a>
                    <a href="https://wa.link/py5trx" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition text-2xl"> <FaWhatsapp/> </a>
                    <a href="https://www.linkedin.com/in/agust%C3%ADn-chazarreta-cruz-1b8565232/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors"> <FaLinkedin/> </a>
            </div>
            <form ref={formRef} action="" onSubmit={handleSubmit} className={`shadow-md rounded-lg p-6 flex flex-col gap-4 transition-colors duration-300 ${
                color ? "bg-gray-800" : "bg-white"
            }`}>
                <div>
                    <label htmlFor="nombre" className={`block font-semibold transition-colors duration-300 ${
                    color ? "text-white" : "text-black"
                }`}>Nombre *</label>
                    <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                }`} required/>
                </div>
                <div>
                    <label htmlFor="email" className={`block font-semibold transition-colors duration-300 ${
                    color ? "text-white" : "text-black"
                }`}>Email *</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                }`} required/>
                </div>
                <div>
                    <label htmlFor="telefono" className={`block font-semibold transition-colors duration-300 ${
                    color ? "text-white" : "text-black"
                }`}>Numero de celular(Opcional)</label>
                    <input type="tel" name="telefono" id="telefono" value={form.telefono} onChange={handleChange} className={`w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                }`}/>
                </div>
                <div>
                    <label htmlFor="motivo" className={`block font-semibold transition-colors duration-300 ${
                    color ? "text-white" : "text-black"
                }`}>Motivo de la consulta *</label>
                    <textarea name="motivo" id="motivo" value={form.motivo} onChange={handleChange} className={`w-full mt-1 p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${
                color ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"
                }`} required></textarea>
                </div>

                <button type="submit" disabled={enviar} className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                    {enviar ? "Enviando..." : "Enviar"}
                </button>

                {mensaje && (
                    <p className={`font-medium mt-2 ${error ? "text-red-500" : "text-green-500"}`}>
                        {mensaje}
                    </p>
                )}
            </form>
        </div>
    )
}

export default Contact