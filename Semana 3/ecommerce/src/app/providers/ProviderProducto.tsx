'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContextProducto } from '../context/ContextProducto';

export default function ProviderProducto(props: Plantilla) {

    const [producto, setProducto] = useState<Producto[]>([]);

    const [carrito, setCarrito] = useState<Producto[]>([])

    function agregarCarrito(producto: Producto) {
        setCarrito([...carrito, producto])
        alert('Producto agregado al carrito')
    }


    async function obtenerProductos() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto`)
        const data = await response.json()
        setProducto(data)
    }

  

    return (
        <ContextProducto.Provider value={{ producto, carrito, agregarCarrito,obtenerProductos }}>
            {props.children}
        </ContextProducto.Provider>
    )
}

export function useProducto() {
    return useContext(ContextProducto)
}


