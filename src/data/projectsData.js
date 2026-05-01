import fotoApi from "../assets/Api.jpg"
import fotoTodo from "../assets/todoapp.jpg"
import fotoClase from "../assets/fotoclase.jpg"
import Gym from "../assets/Gym.png"
import calculadora from "../assets/calculadora.png"
import pokeApi1 from "../assets/PokeApi1.png"
// import pokeApi2 from "../assets/PokeApi2.png"

const projects = [
    {
        id: 1,
        titulo: "PowerHouse GYM",
        descripcion: "Aplicación fullstack desarrollada en equipo para la gestión integral de un gimnasio. Permite administrar productos, usuarios y roles con distintos niveles de acceso, implementando autenticación, control de permisos y operaciones CRUD completas sobre la base de datos.",
        tecnologias: [
            "Frontend: React + Vite + Tailwind + Zustand",
            "Backend: Node.js + Express",
            "Base de Datos: MySQL"
        ],
        imagen: Gym,
        repoFront: "https://github.com/Chaza25/Gimnasio-front",
        repoBack: "https://github.com/Chaza25/Gimnasio-back"
    },
    {
        id: 2,
        titulo: "PokeAPI App",
        descripcion: "Aplicación web backend-driven que integra el consumo de una API externa con persistencia de datos en la nube. Permite consultar Pokémon en tiempo real desde la PokeAPI, procesar la información y almacenarla en una base de datos MySQL, implementando un sistema CRUD completo con paginación y visualización de imágenes.",
        nota: "⚠️ Debido al uso de servicios gratuitos de hosting, la aplicación puede presentar un tiempo de carga inicial mayor luego de un período de inactividad.",
        tecnologias: [
            "Python",
            "Flask",
            "MySQL",
            "HTML5",
            "CSS3",
            "API REST (PokeAPI)",
            "Render",
            "Railway"
        ],
        imagen: pokeApi1,
        demo: "https://pokeapi-6dam.onrender.com/listar_pokemon",
        repo: "https://github.com/Chaza25/PokeApi"
    },
    {
        id: 3,
        titulo: "ToDo App",
        descripcion: "Aplicación web para la gestión de tareas que permite crear, editar y eliminar pendientes, con feedback visual y manejo de estado en tiempo real. Enfocada en la experiencia de usuario y organización de información.",
        tecnologias: [
            "React",
            "Tailwind"
        ],
        imagen: fotoTodo,
        demo: "https://todoappbyacc.netlify.app/",
        repo: "https://github.com/Chaza25/ToDo-APP"
    },
    {
        id: 4,
        titulo: "Dragon Ball API App",
        descripcion: "Aplicación frontend que consume una API pública para mostrar información de personajes de Dragon Ball Z. Implementa manejo de estado con hooks, renderizado dinámico y componentes reutilizables.",
        tecnologias: [
            "React",
            "API REST",
            "Tailwind"
        ],
        imagen: fotoApi,
        demo: "https://dragonballz-api.netlify.app/",
        repo: "https://github.com/Chaza25/Proyecto-Api"
    },
    {
        id: 5,
        titulo: "Calculadora PRO",
        descripcion: "Calculadora web desarrollada con JavaScript puro, enfocada en la lógica de operaciones matemáticas, manejo de eventos y manipulación del DOM.",
        tecnologias: [
            "JavaScript",
            "HTML",
            "CSS"
        ],
        imagen: calculadora,
        demo: "https://calculator-acc.netlify.app/",
        repo: "https://github.com/Chaza25/calculadora-js"
    },
    {
        id: 6,
        titulo: "Prácticas Tailwind",
        descripcion: "Proyecto de práctica enfocado en el aprendizaje de Tailwind CSS, aplicando estilos utilitarios y maquetado moderno. No cuenta con diseño responsive ya que su objetivo principal fue reforzar conceptos básicos.",
        tecnologias: [
            "React",
            "Tailwind"
        ],
        imagen: fotoClase,
        demo: "https://tp2grupo11.netlify.app/",
        repo: "https://github.com/Chaza25/Tp2-Grupo11"
    }
]

export default projects