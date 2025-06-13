import {create} from "zustand"
import {persist} from "zustand/middleware"

const useStore = create(
    persist(
        (set)=>({
        //propiedades
        color: false,

        //metodos
        cambiarColor: ()=>set((state)=>({color:!state.color})),
        }),
        {
            name: "color-mode"
        }
    )
)
export default useStore