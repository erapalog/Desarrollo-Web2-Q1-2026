import React, { useCallback, useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { ContextTema } from '../context/ContextTema';


//es que recibe un props
//definimos lo que declaramos
//exportara lo que defininos 


export default function CambioTemaProvider({children}:Plantilla) {

  const [tema, setTema] = useState("light");

  function cambiarTema() {
 
    setTema((prevTema) => (prevTema === "light" ? "dark" : "light") );
  }
  return (
    <ContextTema.Provider value={{ tema, cambiarTema }}>
      {children}
    </ContextTema.Provider>
  )
}

export const useTema = () => {
  return useContext(ContextTema);
}