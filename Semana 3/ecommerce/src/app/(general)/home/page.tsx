'use client'
import BotonAgregarCarrito from '@/app/components/BotonAgregarCarrito';
import CardProducto from '@/app/components/CardProducto';
import { Producto } from '@/app/modelos/Producto';
import { useProducto } from '@/app/providers/ProviderProducto'
import { useEffect } from 'react';

export default function page() {

  const { producto, agregarCarrito,obtenerProductos } = useProducto();

  useEffect(() => {
    obtenerProductos();
  }, [])

  return (
    <div className='content'>
      <div className='row'>

        {
          producto.map((item: Producto) => (


              <div className='col-md-3' key={item.id}> <br />
                <div className='card'>
                  <div className='card-body'>
                    <CardProducto {...item}></CardProducto>
                  </div>
                  <div className='card-footer'>
                    <BotonAgregarCarrito {...item}></BotonAgregarCarrito>
                  </div>

                </div>
              </div>
          ))
        }
      </div>

    </div>
  )
}
