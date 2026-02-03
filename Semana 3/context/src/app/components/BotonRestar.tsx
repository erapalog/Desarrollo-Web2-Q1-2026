import React from 'react'
import { useContador } from '../provider/ProviderContador';

export default function BotonRestar() {
  const {decrementar} = useContador();
  return (
    <div className="btn btn-danger" onClick={decrementar}>BotonRestar</div>
  )
}
