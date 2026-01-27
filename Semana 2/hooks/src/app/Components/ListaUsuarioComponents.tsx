import React from 'react'

export default function ListaUsuarioComponents(props: ListaUsuario) {
  return (
    <div key={props.id}>
      <h3>{props.nombre}</h3>
      <p>{props.email}</p>
    </div>
  )
}
