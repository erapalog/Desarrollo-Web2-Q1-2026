import React from 'react'
import { useUsuario } from '../provider/UsuarioProvider'

export default function ListaUsuario() {

  const {listaUsuarios}=useUsuario()
  return (
    <div>
        
      {
        listaUsuarios.length === 0 ? (
          <div className="alert alert-info mt-5" role="alert">
            No hay usuarios disponibles.
          </div>
        ) : null
      }
       <table className="table mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
          {listaUsuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.edad}</td>
            </tr>
          ))}
        
      </tbody>
    </table>
    </div>
  )
}
