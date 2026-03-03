'use client';
import { fetchSumaSalarioByDepto } from '@/services/api';
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function page() {

    const [charData, setCharData] = useState<any>({
        labels: [],
        datasets: [
            {
                label: 'Suma de salarios por departamento',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
        ]
    });


    useEffect(() => {
        fetchSumaSalarioByDepto().then((data) => {

            console.log(data);

            const departamentos = data.map((item: any) => item.department_id);
            const puestoTrabajo = data.map((item: any) => item.salario_total_depto);


            setCharData({
                labels: departamentos,
                datasets: [
                    {
                        label: 'Suma de salarios por departamento',
                        data: puestoTrabajo,
                    }
                ]
            })



        })

    }, []);



    return (

        <div>
            {
                charData ? (

                    <div> <Bar data={charData} /></div>

                ) : (
                    <p>Informacion cargando....</p>
                )
            }
        </div>


    )
}
