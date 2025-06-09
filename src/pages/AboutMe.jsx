import { useEffect, useState } from "react"
import personalData from "../data/personalData"
import Cards from "../components/Cards"
import useStore from "../store/useStore"

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
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <Cards title="Nombre" content={`${datos.nombre} ${datos.apellido}`} />
                    <Cards title="Título" content={datos.titulo}/>
                    <Cards title="Stack" content={datos.stack}/>
                    <Cards title="Skills" content={datos.skills} isList={true}/>
                    <Cards title="Descripcion" content={datos.descripcion} />
                    <Cards title="Hobbies" content={datos.hobbies} isList={true}/>
                </div>
            )}
        </div>
    )
}

export default AboutMe