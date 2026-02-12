import React from 'react'
import { Producto } from '../modelos/Producto'
import { useProducto } from '../providers/ProviderProducto'

export default function BotonAgregarCarrito(item:Producto) {
  
    const {agregarCarrito}=useProducto()
  return (
    <button type='button' onClick={()=>agregarCarrito(item)} className='btn btn-success'>Agregar Carrito</button>
  )
}
