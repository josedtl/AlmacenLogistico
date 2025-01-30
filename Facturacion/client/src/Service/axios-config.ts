import axios from 'axios';

const URL = import.meta.env.VITE_SOME_KEY; // URL base de tu API
const apiLg = axios.create({
    baseURL: URL,
});

const api2 = axios.create({
    baseURL: URL,
});

// Función para obtener el token
const getToken = async (): Promise<string | null> => {
    try {
        // Aquí podrías tener un mecanismo para obtener el token del almacenamiento local o contexto
        const response = await axios.post(`${URL}/api/Auth/token`, {
            username: localStorage.getItem('user'), // Reemplaza con el nombre de usuario adecuado
            password: localStorage.getItem('pwd'), // Reemplaza con la contraseña adecuada
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': 'gergjs5435s4fefefusfs2323', // Añadir API Key a los encabezados
            },
        });
        
        return response.data.token; // Ajusta según la estructura de respuesta
    } catch (error) {
        console.error('Error al obtener el token', error);
        return null;
    }
};

// Interceptor de solicitud para apiLg
apiLg.interceptors.request.use(
    async (config) => {
        const apiKey = 'gergjs5435s4fefefusfs2323'; // API Key fija
        if (apiKey) {
            config.headers['X-API-KEY'] = apiKey;
        }

        // Obtener el token antes de cada solicitud
        const token = await getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de solicitud para api2
api2.interceptors.request.use(
    async (config) => {
        const apiKey = 'gergjs5435s4fefefus2323'; // API Key fija
        if (apiKey) {
            config.headers['X-API-KEY'] = apiKey;
        }

        // Obtener el token antes de cada solicitud
        const token = await getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { apiLg, api2 };
