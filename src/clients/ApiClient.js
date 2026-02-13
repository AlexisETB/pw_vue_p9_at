import axios from "axios";
const BaseUrl = "http://localhost:8081/concecionario/api/v1.0/vehiculos"

const guardarVehiculo = async (vehiculo, token) => {
    const data = axios.post(`${BaseUrl}`, vehiculo, {headers: {Authorization: `Bearer ${token}`}}   ).then(r => r.data);
    return data;
}

const obtenerVehiculos = async (token) => {
    const data = axios.get(`${BaseUrl}`, {headers: {Authorization: `Bearer ${token}`}}   ).then(r => r.data);
    return data;
}

const eliminarVehiculo = async (id, token) => {
    const data = axios.delete(`${BaseUrl}/${id}`, {headers: {Authorization: `Bearer ${token}`}}   ).then(r => r.data);
    return data;
}

export const guardarVehiculoFacade = async (vehiculo, token) =>{
    return await guardarVehiculo(vehiculo, token);
}

export const obtenerVehiculosFacade = async (token) =>{
    return await obtenerVehiculos(token);
}
export const eliminarVehiculoFacade = async (id, token) =>{
    return await eliminarVehiculo(id, token);
}   