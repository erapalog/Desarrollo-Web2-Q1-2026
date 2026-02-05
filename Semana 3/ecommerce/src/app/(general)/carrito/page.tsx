'use client'
import { Producto } from '@/app/modelos/Producto'
import { useProducto } from '@/app/providers/ProviderProducto'
import React from 'react'

export default function page() {

    const { carrito } = useProducto()
    return (
        <div className='content'>
            <div className='row'>
                {
                    carrito.map((item: Producto) => (

                        <div className='col-md-3' key={item.id}>
                            <div className='card'>
                                <img src={item.urlImageProducto} alt="" />

                                <div className='card-body'>
                                    <h5>{item.nombreProducto}</h5>
                                    <p>Lps. {item.precioProducto}</p>
                                    <p>Lps. {item.isvProducto}</p>
                                    <p>Lps. {item.stockProducto}</p>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-danger' type='button'>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
