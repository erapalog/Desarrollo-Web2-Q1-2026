'use client';
import { fectchMaxSalarioByDepto } from '@/services/api';
import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


export default function page() {

  const [charData, setCharData] = useState<any>({
    labels: [],
    responsive: true,
    maintainAspectRatio: false,
    datasets: [
      {
        label: 'Maximo salario por departamento',
        data: [],
      }
    ]
  });

  useEffect(() => {
    fectchMaxSalarioByDepto('50').then((data) => {

        const maxSalario = data.map((item: any) => item.max_salario);

      
        setCharData({
        labels: ['Salario Maximo','Otros'],
        datasets: [
          {
            label: 'Maximo salario por departamento',
            data: [maxSalario,10000-maxSalario],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
          }
  
            ]
          });
        });
      }, []);

      
  
  return (
    <div>
        {
            charData ? (
                <div> <Pie data={charData} /></div>
            ) : (
                <p>Informacion cargando....</p>
            )
        }
    </div>
  )
}
