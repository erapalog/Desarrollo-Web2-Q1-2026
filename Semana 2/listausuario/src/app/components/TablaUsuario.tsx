import React from 'react'
import { ListaUsuario } from '../models/ListaUsuario'

export default function TablaUsuario( {listaUsuarios} : ListaUsuario) {
    return (
        <>
            <table className="table table-striped">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaUsuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
