'use client'

import { Producto } from '@/app/modelos/Producto'
import { useProducto } from '@/app/providers/ProviderProducto';
import React, { useEffect, useState } from 'react'

export default function page() {

    const { producto, obtenerProductos } = useProducto();

    const [id, setId] = useState('')
    const [nombreProducto, setNombreProducto] = useState<string>('')
    const [precioProducto, setPrecioProducto] = useState<string>('')
    const [isvProducto, setIsvProducto] = useState<string>('')
    const [stockProducto, setStockProducto] = useState<string>('')
    const [imagenProducto, setImagenProducto] = useState<string>('');
    const [accion, setAccion] = useState<number>(0);

    //0 aregar
    //1 editar


    useEffect(() => {
        obtenerProductos();
    }, [])

    async function guardarProducto() {
        const producto: Producto = {
            id: parseInt(id),
            nombreProducto: nombreProducto,
            precioProducto: parseFloat(precioProducto),
            isvProducto: parseFloat(isvProducto),
            stockProducto: parseInt(stockProducto),
            urlImageProducto: imagenProducto
        }
        console.log(producto)


        if (accion === 0) {
            const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            const data = await respuesta.json()
            alert("prodcuto agregado correctamente")
        } else {
            const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })

            alert("producto actualizado correctamente")
        }
        obtenerProductos();

    }



    async function eliminarProducto(id: number) {
        const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
        const data = await respuesta.json()
        alert("producto eliminado correctamente")
        obtenerProductos();
        limpiarFormulario();
    }

    function setValues(producto: Producto) {
        setId(producto.id.toString())
        setNombreProducto(producto.nombreProducto)
        setPrecioProducto(producto.precioProducto.toString())
        setIsvProducto(producto.isvProducto.toString())
        setStockProducto(producto.stockProducto.toString())
        setImagenProducto(producto.urlImageProducto)
        setAccion(1);
    }

    function limpiarFormulario(){
        setId('')
        setNombreProducto('')
        setPrecioProducto('')
        setIsvProducto('')
        setStockProducto('')
        setImagenProducto('')
        setAccion(0);
    }




    return (
        <div className='content'>

            <div className='row'>
                <div className='col-md-6'>
                    <h1>Agregar producto</h1>
                    <form action="" className='form'>
                        <input type="text" className='form-control' placeholder='Nombre del producto'
                            value={nombreProducto}
                            onChange={(e) => setNombreProducto(e.target.value)}
                        /> <br />
                        <input type="number" className='form-control' placeholder='Precio del producto'
                            value={precioProducto}
                            onChange={(e) => setPrecioProducto(e.target.value)}
                        /> <br />
                        <input type="number" className='form-control' placeholder='ISV del producto'
                            value={isvProducto}
                            onChange={(e) => setIsvProducto(e.target.value)}
                        /> <br />
                        <input type="number" className='form-control' placeholder='Stock del producto'
                            value={stockProducto}
                            onChange={(e) => setStockProducto(e.target.value)}
                        /> <br />
                        <textarea className='form-control' placeholder='Imagen del producto'
                            value={imagenProducto}
                            onChange={(e) => setImagenProducto(e.target.value)}
                            rows={5}
                            cols={5}
                        >
                        </textarea>
                        <button type='button' className='btn btn-success' onClick={guardarProducto}>Guardar producto</button>

                    </form>
                </div>
                <div className='col-md-6'>
                    <h1>Listado de productos</h1>

                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <td>Opciones</td>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>ISV</th>
                                <th>Stock</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                producto.map((producto: Producto) => (
                                    <tr key={producto.id}>
                                        <td>
                                            <button className='btn btn-danger btn-sm' onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                                            <button className='btn btn-primary btn-sm' onClick={() => setValues(producto)}>Editar</button>
                                        </td>
                                        <td>{producto.id}</td>
                                        <td>{producto.nombreProducto}</td>
                                        <td>{producto.precioProducto}</td>
                                        <td>{producto.isvProducto}</td>
                                        <td>{producto.stockProducto}</td>
                                        <td> <img src={producto.urlImageProducto} alt="" width={100} height={100} /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}

