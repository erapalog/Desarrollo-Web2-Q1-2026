'use client'
import CardProducto from '@/app/components/CardProducto'
import EliminarCarrito from '@/app/components/EliminarCarrito'
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
                        <div className='col-md-3' key={item.id}> <br />
                            <div className='card'>
                                <div className='card-body'>
                                 <CardProducto {...item}></CardProducto>
                                </div>
                                <div className='card-footer'>
                                      <EliminarCarrito></EliminarCarrito>
                                </div>

                            </div>

                           
                          
                        </div>

                    ))
                }
            </div>

        </div>
    )
}
