import Image from "next/image";

export default function Home() {

  let nombre="Ana"

  console.log(nombre)

  nombre =5

  console.log(nombre)
  
  nombre= [9,6,7,8]

  console.log(nombre)


  nombre=true
  console.log(nombre)


  function devolverNombre(){  
    
    return 6+6
  }

  console.log(devolverNombre())


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>Primera app en js con next js</h1>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
         
         
        </div>
      </main>
    </div>
  );
}
