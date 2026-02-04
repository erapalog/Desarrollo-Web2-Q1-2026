import React, { useEffect, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Usuario } from '../modelos/Usuario'
import { contextUsuario } from '../context/ContextUsuario';
export default function UsuarioProvider({children}: Plantilla) {

  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([])

  const agregarUsuario = (usuario: Usuario) => {
   // alert(usuario)
    setListaUsuarios([...listaUsuarios, usuario])
  }


  const eliminarUsuario = (id: number) => {
    setListaUsuarios(listaUsuarios.filter(usuario => usuario.id !== id))
  }


  useEffect(() => {
    alert("Lista de usuarios actualizada")
  }, [listaUsuarios]);

  return (
    <contextUsuario.Provider value={{listaUsuarios, agregarUsuario, eliminarUsuario}}>
      {children}
    </contextUsuario.Provider>
  )
}

export const useUsuario = () => {
  return React.useContext(contextUsuario);
}