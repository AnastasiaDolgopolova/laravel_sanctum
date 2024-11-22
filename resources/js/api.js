import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: true,
});

axiosInstance.get('/sanctum/csrf-cookie');

export default axiosInstance;
