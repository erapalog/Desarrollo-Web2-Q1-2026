import React, { use } from 'react'
import { useTema } from '../provider/CambioTemaProvider';

export default function CambiarTemaConsumer() {

  const { tema, cambiarTema } = useTema();
  return (

    <>
        <div>El tema actual es: {tema}</div>
        <button onClick={cambiarTema} className="btn btn-primary">Cambiar Tema</button>
    </>
   
  )
}
