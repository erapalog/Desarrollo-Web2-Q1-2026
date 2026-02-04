import React, { useState } from 'react'
import { useUsuario } from '../provider/UsuarioProvider'
import { Usuario } from '../modelos/Usuario';

export default function FormularioConsumer() {

    const { listaUsuarios, agregarUsuario } = useUsuario()

    const [formData, setformData] = useState({
        id: 0,
        nombre: '',
        email: '',
        edad: 0
    });

    const handlerChange = (e: any) => {

        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });

    }

    function agregar() {
        let usuario: Usuario = {
            id: formData.id,
            nombre: formData.nombre,
            email: formData.email,
            edad: formData.edad
        }
        agregarUsuario(usuario);

    }
    return (
        <div>
            <form className='form'>

                <h4>Agregar usuario nuevo</h4>
                <input type="number" placeholder='ID' className='form-control mb-2'
                    onChange={handlerChange}
                    name="id"
                />
                <input type="text" placeholder='Nombre' className='form-control mb-2'
                    onChange={handlerChange}
                    name="nombre"
                />
                <input type="email" placeholder='Email' className='form-control mb-2'
                    onChange={handlerChange}
                    name="email"
                />
                <input type="number" placeholder='Edad' className='form-control mb-2'
                    onChange={handlerChange}
                    name="edad"
                />
                <button type="button" className='btn btn-success'
                    onClick={() => agregar()}
                >
                    Agregar Usuario
                </button>
            </form>

        </div>
    )
}
