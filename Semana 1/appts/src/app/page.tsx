import Image from "next/image";
import Saludo from "./Saludo";
import Saludo2 from "./Saludo2";
import SaludoPersonaComponent from "./Componentes/SaludoPersonaComponent";

export default function Home() {

  let nombre:string="Juan";

  console.log(`Hola, ${nombre}`);

  let listaNombres:Array<string>=["Ana","Luis","Carlos"];

  console.log(listaNombres);

  for(let nombre of listaNombres){
    console.log(`Nombre: ${nombre}`);
  }


let persona:{nombre:string, edad:number}={nombre:"Maria", edad:30};
 console.log(`Persona: ${persona.nombre}, Edad: ${persona.edad}`);


 function saludar(nombre:string):string{
    return 'Hola, ' + nombre + '!';
  }


  let nombrePersona:string="Ana ";
  let apellidoPersona:string="Paz";


  let personaObjeto:Persona={
    nombre:"Luis", 
    apellido:"Lopez",
    edad:25
  };



  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
         <h1>Pagina creada con typescript</h1>

         <Saludo nombre={nombrePersona} apellido={apellidoPersona} edad={36}/>
         <Saludo2 nombre={nombrePersona} />

         <SaludoPersonaComponent {...personaObjeto}></SaludoPersonaComponent>
         
        </div>
     
      </main>
    </div>
  );
}
