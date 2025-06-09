import useStore from "../store/useStore"

const Cards = ({title, content, isList}) => {

    const {color} = useStore()

    return(
        <div className={`p-6 rounded-lg shadow-md border transition-colors duration-300 ${
        color
            ? "bg-white border-gray-300 text-gray-800"
            : "bg-gray-800 border-gray-700 text-white"
            }`}>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            {isList && Array.isArray(content) ? (
                <ul className="flex flex-wrap gap-2">
                {content.map((item, idx) => (
                    <li
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                    {item}
                    </li>
                ))}
                </ul>
            ) : (
                <p>{content}</p>
            )}
        </div>
    )
}

export default Cards