import { createContext } from "react";

export const ContextUsuario= createContext({
    nombreUsuario: '',
    setNombreUsuario: (usuario:string)=>{}
})