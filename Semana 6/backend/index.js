const express = require('express');
const sequelize = require('./bd/conexion');
const Empleado = require('./models/Empleado');

const app = express();

app.use(express.json());


//ruta
//req, repo 
// 200, 404, 500
//try catch


//select SUM(salary) salario_total_depto, department_id from employees
//group by department_id;

app.get('/api/sum-salary-by-depto', async (req,resp)=>{
    try {

        const data= await Empleado.findAll({
            attributes: [
                'department_id', 
                [sequelize.fn('SUM', sequelize.col('salary')), 'salario_total_depto']],
            group: ['department_id'],
        });

        if(data.length === 0){
            resp.status(400).json({message: 'No se encontraron datos'});
        }
        else{
            resp.status(200).json(data);
        }
       
            
    } catch (error) {
        resp.status(500).json({message: 'Error al obtener los datos' + error});
    }
});

//select count(*) cant_puesto_trabajo,department_id,job_id from employees
//group by department_id,job_id;

app.get('/api/count-job-by-depto', async (req,resp)=>{


    try {

        const data= await Empleado.findAll({
            attributes: [
                'department_id',
                'job_id',
                [sequelize.fn('COUNT', sequelize.col('*')), 'cant_puesto_trabajo']],
            group: ['department_id', 'job_id'],
        })

        if(data.length === 0){
            resp.status(400).json({message: 'No se encontraron datos'});
        }
        else{
            resp.status(200).json(data);
        }
        
    } catch (error) {
        resp.status(500).json({message: 'Error al obtener los datos' + error});

    }
});

//select max(salary),department_id from employees
//group by department_id;


app.get('/api/max-salary-by-depto/:department_id', async (req,resp)=>{
    try {
        const data= await Empleado.findAll({
            attributes: [
                'department_id',
                [sequelize.fn('MAX', sequelize.col('salary')), 'max_salario']],
            where:{department_id: req.params.department_id},
            group: ['department_id'],
        })
    

        if(data.length === 0){
            resp.status(400).json({message: 'No se encontraron datos'});
        }
        else{
            resp.status(200).json(data);
        }
    

    } catch (error) {
        resp.status(500).json({message: 'Error al obtener los datos' + error});
    }
});


app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});

