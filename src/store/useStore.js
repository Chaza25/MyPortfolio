import {create} from "zustand"

const useStore = create((set)=>({
    //propiedades
    color: false,

    //metodos
    cambiarColor: ()=>set((state)=>({color:!state.color})),
}))

export default useStore