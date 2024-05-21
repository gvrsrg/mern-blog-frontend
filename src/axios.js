import axios from 'axios'

const baseURL = process.env.BASE_URL;
//    baseURL: 'http://localhost:4444',
console.log(baseURL);
const instance = axios.create({

    baseURL: baseURL,})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token') || ''
    return config;
});

export default instance