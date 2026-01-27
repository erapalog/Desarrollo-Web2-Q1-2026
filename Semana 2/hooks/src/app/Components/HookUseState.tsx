'use client'
import React, { useState } from 'react'
import ListaUsuarioComponents from './ListaUsuarioComponents';

export default function HookUseState() {

  //pequeno calculadora de numeros con useState

  const [contador, setContador] = useState<number>(0);

  const [listaUsuarios, setListaUsuarios] = useState<Array<ListaUsuario>>([
    { id: 1, nombre: "Juan", email: "juan@example.com" },
    { id: 2, nombre: "Maria", email: "maria@example.com" },
    { id: 3, nombre: "Pedro", email: "pedro@example.com" }
  ]);


  function incrementar() {
    setContador(contador + 1);
  }


  function decrementar(valorDecrementar: number) {

    if(contador==0) return;
    setContador(contador - valorDecrementar);

  }

  function visualizarUsuarios() {

    for (let usuario of listaUsuarios) {
        console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Email: ${usuario.email}`);
    }
  }

  return (
    <div id='resultado'>
        Valor del contador: {contador} <br />

        <button onClick={incrementar}>Incrementar</button> <br />
        <button onClick={()=>decrementar(2)}>Decrementar</button> <br /> <br />

        <hr />


        {
            listaUsuarios.map((usuario) => (
                <ListaUsuarioComponents key={usuario.id} nombre={usuario.nombre} email={usuario.email} />
            ))
        }


    </div>
  )
}
