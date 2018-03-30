import axios from "axios";
import store from 'store/index';
import { loadingShow,loadingHide } from 'store/common/action';

// 创建axios实例
const service = axios.create({
    baseURL: "/api",
    timeout: 60000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use((config) => {
    store.dispatch(loadingShow())
    return config;
}, error => {
    console.log(error);
    Promise.reject(error);
    store.dispatch(loadingHide())
})

// respone拦截器
service.interceptors.response.use(
    response => {
        store.dispatch(loadingHide())
        let data = response.data;
        // 如果返回失败，status为false表示失败
        if (!data.status) {
            //如果失败的信息存在，跳出失败的信息
            if (data.message) {
                // Message({
                //     type: data.level || "warning",
                //     message: data.message
                // })
            }
            //session失效
            if (data.code === 'SESSION_EXPIRED') {
                
            }
        }
        return data;
    }, error => {
        store.dispatch(loadingHide())
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            const response = error.response;
            const data = response.data;
            if (data && data.message) {
                // Message({
                //     type: data.level || warning,
                //     message: data.message
                // })
            }
            return Promise.reject(response);
        } else {
            console.log('Error', error.message);
        }
    });

export default service;