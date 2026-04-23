import { FaWhatsapp } from "react-icons/fa"

const ButtonW = () => {
    return(
        <a
            href="https://wa.link/py5trx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="
                fixed bottom-5 right-5 z-50
                bg-green-500 text-white
                p-4 rounded-full text-2xl
                shadow-lg
                transition-all duration-300
                hover:scale-110 hover:bg-green-600 hover:shadow-2xl
                animate-bounce
            "
        >
            <FaWhatsapp/>
        </a>
    )
}

export default ButtonW