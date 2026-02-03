import React from 'react'

export default function SumarContador({contador}: number) {
  return (
    <div>
        <button onClick={() => contador++}>Incrementar</button>
        <h3>Contador desde el componente hijo{contador}</h3>
    </div>
  )
}
