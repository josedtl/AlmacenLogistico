import axios from 'axios';


const URL = import.meta.env.VITE_SOME_KEY;
const apiLg = axios.create({
    baseURL: URL,
});

const api2 = axios.create({
    baseURL: URL,
});

// Interceptores de errores globales para api1
apiLg.interceptors.response.use(
    (response) => {
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
    apiLg.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    api2.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};




export { apiLg, api2, setAuthorizationToken };