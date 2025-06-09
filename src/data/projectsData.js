import fotoApi from "../assets/Api.jpg"
import fotoTodo from "../assets/todoapp.jpg"
import fotoClase from "../assets/fotoclase.jpg"

const projects = [
    {
        id: 1,
        titulo: "ToDo App",
        descripcion: "Una App para anotar tu listas de tareas",
        tecnologias: ["React", "Tailwind"],
        imagen: fotoTodo,
        demo: "https://todoappbyacc.netlify.app/",
        repo: "https://github.com/Chaza25/ToDo-APP"
    },
    {
        id: 2,
        titulo: "App Dragon Ball Z",
        descripcion: "Consumo de API publica con React, Hooks y Flowbite",
        tecnologias: ["React", "API REST", "Tailwindg"],
        imagen: fotoApi,
        demo: "https://dragonballz-api.netlify.app/",
        repo: "https://github.com/Chaza25/Proyecto-Api"
    },
    {
        id: 3,
        titulo: "Practicas",
        descripcion: "Proyecto para realizar en clases",
        tecnologias: ["React", "Tailwind"],
        imagen: fotoClase,
        demo: "https://tp2grupo11.netlify.app/",
        repo: "https://github.com/Chaza25/Tp2-Grupo11"

    }
]

export default projects