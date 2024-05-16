import axios from 'axios'

const instance = axios.create({
//    baseURL: 'http://localhost:4444',
    baseURL: 'https://mern-3qyu.onrender.com',})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token') || ''
    return config;
});

export default instance