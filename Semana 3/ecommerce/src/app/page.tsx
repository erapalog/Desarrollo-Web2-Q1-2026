'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUsuarioContext } from "./providers/ProviderUsuario";
import { useRouter } from "next/navigation";

export default function Home() {

  const [usuario, setUsuario]=useState<string>('');
  const [contrasena, setContrasena]= useState<string>('');

  const {setNombreUsuario}=useUsuarioContext();

  const router= useRouter()

  function iniciarSesion(){
    if(usuario==='')
        return alert('Ingrese credenciales')

    setNombreUsuario(usuario);
    router.push('/home')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
       
       <div className="content">
        <form action="" className="form">

          <input type="text" className="form-control" placeholder="Ingrese correo" 
            value={usuario}
            onChange={(e)=> setUsuario(e.target.value)}
          /> <br />
          
          <input type="password" className="form-control" placeholder="Ingrese contrasena" 
            value={contrasena}
            onChange={(e)=> setContrasena(e.target.value)}
          /> <br />

          {/*<Link href='/home' className="btn btn-success">Ingresar</Link>*/}

          <button className="btn btn-success" onClick={iniciarSesion} type="button"> Iniciar Sesion</button>
        </form>
       </div>
    </div>
  );
}
