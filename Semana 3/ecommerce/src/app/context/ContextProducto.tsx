import { createContext } from "react"
import { Producto } from "../modelos/Producto"

//producto
//carrito 
//agregarCarrito
export const ContextProducto= createContext({
    producto: [] as Producto[],
    carrito: [] as Producto[],
    agregarCarrito: (producto:Producto) =>{},
    obtenerProductos: () =>{}
})