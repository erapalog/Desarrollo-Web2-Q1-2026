import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { ContextUsuario } from '../context/ContextUsuario';


export default function ProviderUsuario({children}:Plantilla) {

  const [nombreUsuario,setNombreUsuario]= useState('');


  return (
    <ContextUsuario.Provider value={{nombreUsuario,setNombreUsuario}}>
        {children}
    </ContextUsuario.Provider>
  )
}

export const useUsuarioContext= ()=>{
    return useContext(ContextUsuario)
}
