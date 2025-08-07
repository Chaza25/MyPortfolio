const Error = () => {
    return(
        <div className="text-center">
            <br />
            <img src="https://http.cat/images/404.jpg" alt="Pagina no encontrada" className="mx-auto"/>
            <br />
            <p className="text-2xl font-bold">Pagina no encontrada</p>
            <button className="mt-4 bg-blue-400 hover:bg-blue-800 px-6 py-2 rounded-full shadow transition">
                <a href="/">
                    Volver al inicio
                </a>
            </button>
        </div>
    )
}

export default Error