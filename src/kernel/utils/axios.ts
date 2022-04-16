import pureAxios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import config from 'config';

const axios: AxiosInstance = pureAxios.create({
    baseURL: config.baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

axios.interceptors.response.use(
    function (successRes: AxiosResponse) {
        return successRes;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

axios.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        const token: string | null = localStorage.getItem('accessToken');
        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`
            }
        }

        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

export default axios;
