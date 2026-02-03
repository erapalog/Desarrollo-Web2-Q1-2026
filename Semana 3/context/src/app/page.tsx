'use client'
import Image from "next/image";
import { useState } from "react";
import SumarContador from "./components/SumarContador";
import ProviderContador from "./provider/ProviderContador";
import SumarContadorConsumer from "./components/SumarContadorConsumer";
import SumarContadorConsumer2 from "./components/SumarContadorConsumer2";

export default function Home() {

  /*const [contador,setContador] = useState(0);

  function incrementar(){
    setContador(contador + 1);
  }

  function decrementar(){
    setContador(contador - 1);
  }*/
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
       {
        /*<button className="btn btn-info" onClick={incrementar}>Incrementar</button>
       <button className="btn btn-info" onClick={decrementar}>Decrementar</button>
       <h1 className="text-2xl font-bold">{contador}</h1>

       <SumarContador contador={contador}></SumarContador>
       */
       }

       <ProviderContador>
        <SumarContadorConsumer></SumarContadorConsumer>
        <SumarContadorConsumer2> </SumarContadorConsumer2>
       </ProviderContador>

       
       
      </main>
    </div>
  );
}
