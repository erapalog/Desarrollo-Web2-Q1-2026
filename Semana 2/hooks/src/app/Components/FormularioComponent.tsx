
import React, { useEffect, useState } from 'react'

export default function FormularioComponent() {

    //contador de letras

    const [texto, setTexto] = useState<string>('');
    const [contadorLetras, setContadorLetras] = useState<number>(0);

    //detecta cuando el componente se monta
    useEffect(() => {

        console.log('FormularioComponent montado');
        setContadorLetras(0);
    }, []);

    //detecta cuando el texto cambia

    useEffect(() => {

        setContadorLetras(texto.length);
    }, [texto]);


    return (
        <>
            <div>Ingresar Palabra</div>

            <textarea value={texto}
              onChange={(e) => setTexto(e.target.value)}
            >

            </textarea>

            <h2>Contador de Letras: {contadorLetras}</h2>
        </>

    )
}
