//listado de productos
// agrear productos al carrito (arrelgo)

import { createContext } from "react";
import { Producto } from "../modelos/Productos";

export const ContextProducto= createContext({
    producto: [] as Producto[],
    agregarProducto: (prod: Producto) => {}
})