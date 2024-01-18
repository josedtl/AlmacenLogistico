import axios from 'axios';
import { environment } from '../../environments/environment';



const apiGeneral = axios.create({
    baseURL: environment.apiUrl,
});

const api2 = axios.create({
    baseURL: environment.apiUrl2,
});

// Interceptores de errores globales para api1
apiGeneral.interceptors.response.use(

    (response) => {
        console.log(environment.apiUrl)
        return response;
    },
    (error) => {
        console.error('Error en la solicitud de la primera API:', error);
        return Promise.reject(error);
    }
);

// Interceptores de errores globales para api2
api2.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Error en la solicitud de la segunda API:', error);
        return Promise.reject(error);
    }
);

// Función para establecer el token de autorización en las solicitudes
const setAuthorizationToken = (token: string) => {
    apiGeneral.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    api2.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export { apiGeneral, api2, setAuthorizationToken };