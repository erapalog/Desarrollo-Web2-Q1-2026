import axios from "axios";


const API_URL = 'http://localhost:5000/api';


export const fetchSumaSalarioByDepto = async () => {
    const response = await axios.get(`${API_URL}/sum-salary-by-depto`);
    return response.data;

}

export const fectchCantidadPuestoTrabajoByDepto = async () => {
    const response = await axios.get(`${API_URL}/count-job-by-depto`);
    return response.data;

}

export const fectchMaxSalarioByDepto = async (department_id: string) => {
    const response = await axios.get(`${API_URL}/max-salary-by-depto/${department_id}`);
    return response.data;

}