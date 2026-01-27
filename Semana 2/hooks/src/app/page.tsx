'use client';
import Image from "next/image";
import HookUseState from "./Components/HookUseState";
import { use, useState } from "react";
import ListaUsuarioComponents from "./Components/ListaUsuarioComponents";
import FormularioComponent from "./Components/FormularioComponent";

export default function Home() {

  const [listaUsuario2, setListaUsuarios2] = useState<Array<ListaUsuario>>([
    { id: 1, nombre: "Ana", email: "ana@example.com" }
  ]);


  console.log("Renderizando el componente Home");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2>Trabajando con Hooks</h2>

          <HookUseState />

          <ListaUsuarioComponents id={listaUsuario2[0].id} nombre={listaUsuario2[0].nombre} email={listaUsuario2[0].email} />


          <FormularioComponent />
        </div>
      </main>
    </div>
  );
}
