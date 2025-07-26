import fotoApi from "../assets/Api.jpg"
import fotoTodo from "../assets/todoapp.jpg"
import fotoClase from "../assets/fotoclase.jpg"
import Gym from "../assets/Gym.png"

const projects = [
    {
        id: 1,
        titulo: "PowerHouse GYM",
        descripcion: "Aplicación fullstack desarrollada en equipo, orientada a la gestión de productos, usuarios y roles dentro de un gimnasio.",
        tecnologias: ["FrontEnd: React-Vite-Tailwind-ReactRouterDOM-Zustand", "BackEnd: Node.js-Express.js", "Base de Datos: MySQL"],
        imagen: Gym,
        demo: "https://github.com/Chaza25/Gimnasio-front",
        repo: "https://github.com/Chaza25/Gimnasio-back"
    },
    {
        id: 2,
        titulo: "ToDo App",
        descripcion: "Una App para anotar tu listas de tareas",
        tecnologias: ["React", "Tailwind"],
        imagen: fotoTodo,
        demo: "https://todoappbyacc.netlify.app/",
        repo: "https://github.com/Chaza25/ToDo-APP"
    },
    {
        id: 3,
        titulo: "App Dragon Ball Z",
        descripcion: "Consumo de API publica con React, Hooks y Flowbite",
        tecnologias: ["React", "API REST", "Tailwind"],
        imagen: fotoApi,
        demo: "https://dragonballz-api.netlify.app/",
        repo: "https://github.com/Chaza25/Proyecto-Api"
    },
    {
        id: 4,
        titulo: "Practicas",
        descripcion: "Proyecto para realizar en clases",
        tecnologias: ["React", "Tailwind"],
        imagen: fotoClase,
        demo: "https://tp2grupo11.netlify.app/",
        repo: "https://github.com/Chaza25/Tp2-Grupo11"

    }
]

export default projects