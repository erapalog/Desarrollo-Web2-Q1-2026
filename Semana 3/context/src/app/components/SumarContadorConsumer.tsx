import React from 'react'
import { useContador } from '../provider/ProviderContador'
import BotonSumar from './BotonSumar';
import BotonRestar from './BotonRestar';

export default function SumarContadorConsumer() {

  const {contador,incrementar,decrementar}= useContador();


  return (
    <div>
        <h3>Componente hijo utilizando contextos</h3>
        <BotonSumar />
        <BotonRestar />
        <h3>Contador desde el componente hijo Consumer: {contador}</h3>
    </div>
  )
}
