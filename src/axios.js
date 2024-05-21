import axios from 'axios'

export const baseURL = process.env.REACT_APP_BASE_URL;
//    baseURL: 'http://localhost:4444',

const instance = axios.create({

    baseURL: baseURL,})

instance.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem('token') || ''
    return config;
});

export default instance