//props reactNode
//funcionalidades de lo que definimos en context
//exportar

import React, { useContext, useState } from 'react'
import { ViewReact } from '../modelos/ViewReact'
import { Producto } from '../modelos/Productos'
import { ContextProducto } from '../context/ProductContext'

export default function ProviderProducto(props:ViewReact) {

    const [producto, setProducto] = useState<Producto []>([])


    function agregarProducto(prod:Producto){
        setProducto([...producto, prod])
    }



  return (
    <ContextProducto.Provider value={{producto, agregarProducto}}>
        {props.children}
    </ContextProducto.Provider>
  )
}

export function useContextProducto(){
    return useContext(ContextProducto)
}