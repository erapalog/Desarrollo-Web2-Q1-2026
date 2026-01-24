import React from 'react'

export default function SaludoPersonaComponent(persona:Persona) {
  return (
    <div>

        Saludos Persona Component {persona.nombre} {persona.apellido} Edad: {persona.edad} fecha nacimiento: {persona.fechaNacimiento?.toDateString()}
    </div>
  )
}
