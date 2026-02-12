import React from 'react'
import { Producto } from '../modelos/Producto'
import { useProducto } from '../providers/ProviderProducto'

export default function CardProducto(item:Producto) {

  return (
     <div >
                <img src={item.urlImageProducto} alt="" />

                <div className=''>
                  <h5>{item.nombreProducto}</h5>
                  <p>Lps. {item.precioProducto}</p>
                  <p>Lps. {item.isvProducto}</p>
                  <p>Lps. {item.stockProducto}</p>
                </div>
                
        </div>
  )
}
