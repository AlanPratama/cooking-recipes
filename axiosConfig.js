// axiosConfig.js
import axios from 'axios';

// Buat instance Axios dengan konfigurasi dasar
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
