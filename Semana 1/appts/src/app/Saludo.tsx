import React from 'react'

export default function Saludo({nombre, apellido,edad}:{nombre:string, apellido:string, edad:number}) {
  return (
    <div>Saludo {nombre} {apellido}</div>
  )
}
