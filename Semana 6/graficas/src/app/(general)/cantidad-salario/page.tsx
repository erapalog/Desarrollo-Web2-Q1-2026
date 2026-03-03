'use client';
import React, { useEffect, useState } from 'react'
import { fectchCantidadPuestoTrabajoByDepto } from '@/services/api';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function page() {


 const [charData, setCharData] = useState<any>({
    labels: [],
    datasets: [
        {
            label: 'Cantidad de puesto de trabajo por departamento',
            data: [],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        }
    ]
 });


 useEffect(() => {
    fectchCantidadPuestoTrabajoByDepto().then((data) => {
        const labels = data.map((item: any) => item.department_id);
        const countData = data.map((item: any) => item.cant_puesto_trabajo);

        setCharData({
            labels: labels,
            datasets: [
                {
                    label: 'Cantidad de puesto de trabajo por departamento',
                    data: countData,
                }
            ]
        });


    });
 }, []);



  return (
    <div>
        {
            charData ? (
                <div> <Line data={charData} /></div>
            ) : (
                <p>Informacion cargando....</p>
            )
        }
    </div>
  )
}
