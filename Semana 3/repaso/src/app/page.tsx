'use client';
import Image from "next/image";
import CambioTemaProvider, { useTema } from "./provider/CambioTemaProvider";
import CambiarTemaConsumer from "./componentes/CambiarTemaConsumer";
import UsuarioProvider, { useUsuario } from "./provider/UsuarioProvider";
import FormularioConsumer from "./componentes/FormularioConsumer";
import ListaUsuario from "./componentes/ListaUsuario";

export default function Home() {

  const { tema } = useTema();
  const { listaUsuarios } = useUsuario();


  return (

    <>
      <UsuarioProvider>

        <CambioTemaProvider>
          < div className="container mt-5"
          >
            <CambiarTemaConsumer />
          </div>

          <FormularioConsumer></FormularioConsumer>
          <ListaUsuario></ListaUsuario>

        </CambioTemaProvider>


      </UsuarioProvider>

    </>








  );
}
