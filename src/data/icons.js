    import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaJava, FaPhp, FaPython } from "react-icons/fa";
    import { SiTailwindcss, SiMysql } from "react-icons/si"

    const icons = {
        HTML: { icon: FaHtml5, color: "text-orange-500" },
        CSS: { icon: FaCss3Alt, color: "text-blue-500" },
        JavaScript: { icon: FaJs, color: "text-yellow-400" },
        Java: { icon: FaJava, color: "text-[#007396]" },
        PHP: { icon: FaPhp, color: "text-[#8892BF]" },
        Python: { icon: FaPython, color: "text-[#3776AB]" },
        React: { icon: FaReact, color: "text-cyan-400" },
        Node: { icon: FaNodeJs, color: "text-green-600" },
        Tailwind: { icon: SiTailwindcss, color: "text-sky-400" },
        Git: { icon: FaGit, color: "text-red-500" },
        GitHub: { icon: FaGithub, color: "text-black dark:text-white" },
        MySQL: { icon: SiMysql, color: "text-[#00758F]" }
    };

    export default icons