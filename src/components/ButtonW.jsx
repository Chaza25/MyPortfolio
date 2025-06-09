import { FaWhatsapp } from "react-icons/fa"

const ButtonW = () => {
    return(
        <div>
            <a href="https://wa.link/py5trx" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg text-2xl transition-all duration-300 z-50">
                <FaWhatsapp/>
            </a>
        </div>
    )
}

export default ButtonW