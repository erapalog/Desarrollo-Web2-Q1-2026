'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Usuario } from "./models/Usuario";
import TablaUsuario from "./components/TablaUsuario";

export default function Home() {

  // aplicacion que me permita registrar usuaros
  // cargar usuarios registrados
  //hacer componentes reutilizables
  //usar bootstrap o tailwindcss para el diseno


  const [id, setId] = useState<number>(0);
  const [nombre, setNombre] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);


  function registrarUsuario() {

    let nuevoUsuario: Usuario = {
      id: usuarios.length + 1,
      nombre: nombre,
      email: email
    }

    setUsuarios([...usuarios, nuevoUsuario]);

    setNombre("");
    setEmail("");

    console.log(usuarios);

  }

  useEffect(() => {
    console.log("Usuarios actualizados:", usuarios);
  }, [usuarios]);

  return (
    <div className="content">

      <div className="row">
            <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Registro de Usuario</h1>

        <div className="col-md-6">
          <form action="" className="form-control">

            <div className="mb-12">
              <label htmlFor="id" className="">Nombre</label>
              <input type="text" id="nombre" className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-12">
              <label htmlFor="email" className="">Email</label>
              <input type="text" id="email" className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={registrarUsuario}>Registrar</button>

          </form>
        </div>
        <div className="col-md-6">

          <TablaUsuario listaUsuarios={usuarios} />

        </div>
      </div>





    </div>
  );
}
