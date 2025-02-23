import axios from 'axios';

// Configura o Axios para todas as requisições
const api = axios.create({
  baseURL: 'http://localhost:5000', 
});

// Interceptor para adicionar o token de autenticação nas requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
