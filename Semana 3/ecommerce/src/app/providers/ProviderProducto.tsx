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

    useEffect(() => {
        setProducto([{
            id: 1,
            nombreProducto: 'papas',
            precioProducto: 10,
            isvProducto: 2,
            stockProducto: 5,
            urlImageProducto: ''
        },
        {
            id: 2,
            nombreProducto: 'repollos',
            precioProducto: 10,
            isvProducto: 2,
            stockProducto: 5,
            urlImageProducto: ''
        },
        {
            id: 3,
            nombreProducto: 'lechugas',
            precioProducto: 10,
            isvProducto: 2,
            stockProducto: 5,
            urlImageProducto: ''
        },
        {
            id: 4,
            nombreProducto: 'zanahorias',
            precioProducto: 10,
            isvProducto: 2,
            stockProducto: 5,
            urlImageProducto: ''
        }])

    }, [])

    return (
        <ContextProducto.Provider value={{ producto, carrito, agregarCarrito }}>
            {props.children}
        </ContextProducto.Provider>
    )
}

export function useProducto() {
    return useContext(ContextProducto)
}


