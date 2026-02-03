import React, { useState } from 'react'
import { useContextProducto } from '../provieder/ProviderProducto'
import { Producto } from '../modelos/Productos'
import TablaProducto from './TablaProducto'

export default function FormularioProducto() {

  const {producto,agregarProducto} = useContextProducto()


  const [nombre,setNombre]= useState<string>("")
  const [descripcion,setDescripcion]= useState<string>("")
  const [precio,setPrecio]= useState<number>(0)
  const [imagenUrl,setImagenUrl]= useState<string>("")

  function agregarProductoLocal(){

    let productoNuevo:Producto={
        id: producto.length + 1,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagenUrl: imagenUrl    
    }

    agregarProducto(productoNuevo)

    setNombre("")
    setDescripcion("")
    setPrecio(0)
    setImagenUrl("")

  }


  return (
    <div className='row'>
        <div className='col-md-6'>
             <h3>Mantemiente productos</h3>

             <form action="" className='form'>
              <input className='form-control' placeholder='Ingresar nombre del producto' value={nombre} onChange={(e) => setNombre(e.target.value)}></input> <br />
                <input className='form-control' placeholder='Ingresar descripcion del producto' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input> <br />
                <input className='form-control' type='number' placeholder='Ingresar precio del producto' value={precio} onChange={(e) => setPrecio(Number(e.target.value))}></input> <br />
                <input className='form-control' placeholder='Ingresar URL de la imagen del producto' value={imagenUrl} onChange={(e) => setImagenUrl(e.target.value)}></input> <br />
                <button className='btn btn-primary mt-2' type='button' onClick={agregarProductoLocal}>Agregar producto</button>
             </form>
        </div>
        <div className='col-md-6'>
            <h3>Listado de productos</h3>
            <TablaProducto />
        </div>

       


    </div>
  )
}
