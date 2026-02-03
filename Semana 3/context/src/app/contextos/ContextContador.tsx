import { createContext } from "react";

export const contextContador= createContext({
    contador:0,
    incrementar: () => {},
    decrementar: () => {}
});