import axios, {AxiosError, AxiosResponse, AxiosRequestHeaders, InternalAxiosRequestConfig} from 'axios'
import { ElMessage } from 'element-plus';
import { getToken } from '../utils/token';
import router from '../router/index';
import { AxiosCanceler } from './cancel'
import { ResultEnum } from "../enums/http";
// import { useUserStore } from '../store/index'
import { RequestConfig } from '../types/axios';
const axiosCanceler = new AxiosCanceler();

const config = {
    baseURL: '/',
    timeout: ResultEnum.TIMEOUT as number, // 请求超市时间
    withCredentials: true, // 跨域时是否允许携带凭证
    validateStatus: (status: number) => {
        return status >= 200 && status <= 500;
    }
};

let lock: number = 0;
const instance = axios.create(config);
instance.interceptors.request.use(
    (config: RequestConfig)=> {
        const headers = config.headers;
        // 添加请求
        axiosCanceler.addPending(config);
        (config.headers as AxiosRequestHeaders)['Authorization'] = `Basic c2FiZXI6c2FiZXJfc2VjcmV0`;
        if (getToken() && !headers?.isToken) {
            (config.headers as AxiosRequestHeaders)['Blade-Auth'] = 'bearer' + getToken();
        }
        (config.headers as AxiosRequestHeaders)['Content-Type'] = 'application/json;charset=UTF-8';

        return config as InternalAxiosRequestConfig;
    }, 
    (error: AxiosResponse)=>{
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response: AxiosResponse) => {
        const { status: code, data } = response;
        const config: RequestConfig = response.config;
        // 移除已执行完的请求（当前请求）
        axiosCanceler.removePending(config);
        const status = data.code || code;
        const message = data.msg || data.error_description || '未知错误';
        if(status === 401) {
            if(lock === 1) return false;
            lock === 0 && ElMessage.error(message);
            lock = 1;
            // const userStore = useUserStore()
        }
        return data
    }
)

export default instance;