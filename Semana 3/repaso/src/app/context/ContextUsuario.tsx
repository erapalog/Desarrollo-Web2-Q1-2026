import { createContext } from "react";
import { Usuario } from "../modelos/Usuario";


export const contextUsuario = createContext({
    listaUsuarios: [] as Usuario[],
    agregarUsuario: (usuario: Usuario) => { },
    eliminarUsuario: (id: number) => { },

})