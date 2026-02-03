import React from 'react'
import { useContextProducto } from '../provieder/ProviderProducto';
import { Producto } from '../modelos/Productos';

export default function TablaProducto() {

  const {producto} = useContextProducto();
  
  return (
    <div>
      <h3>Tabla de productos</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {producto.map((producto: Producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td><img src={producto.imagenUrl} alt={producto.nombre} width="100" height="100"/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}
