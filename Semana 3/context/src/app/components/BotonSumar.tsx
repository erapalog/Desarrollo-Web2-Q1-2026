import React from 'react'
import { useContador } from '../provider/ProviderContador'

export default function BotonSumar() {

  const {incrementar} = useContador();
  return (
    <div className="btn btn-primary" onClick={incrementar}>BotonSumar</div>
  )
}
