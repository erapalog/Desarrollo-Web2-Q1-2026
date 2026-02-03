import React, { ReactNode, useContext, useState } from 'react'
import { contextContador } from '../contextos/ContextContador';

//siempre tiene un props> Reactnode
//debemos definir o darle funcionalida a lo declarador del contexto
//exportamos esas funcionliades


interface ViewReact{
    children: ReactNode
}

export default function ProviderContador({children}: ViewReact) {

  const [contador,setContador] = useState<number>(0);

  function incrementar(){
    setContador(contador + 1);
  }

  function decrementar(){
    setContador(contador - 1);
  }


  return (
    <div>

        <contextContador.Provider value={{contador,incrementar,decrementar}}>
            {children}
        </contextContador.Provider>
    </div>
  )
}

export const useContador = () => {
        return useContext(contextContador);
}
