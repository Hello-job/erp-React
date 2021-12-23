import baseURL from './baseURL'
import axios from 'axios'
import { Notify } from 'zent'
// 引入reduce
import {  } from '../utils/store'
// aixos 默认配置
axios.defaults.timeout = 1000 * 60 * 15
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true
axios.defaults.baseURL = baseURL
// 请求拦截器
axios.interceptors.request.use(
    request => {
        let token = window.localStorage.getItem('token')
        if (token) {
            request.headers.Authorization = 'Bearer ' + token
        }
     
        return request
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
axios.interceptors.response.use(
    response => {
        console.log(response)
        if (response.data.status) {
           return response.data
        } else {
            Notify.error(response.data.message)
            return Promise.reject(response.data) 
       }
    },
    error => {
        console.log(error)
        if (error.response.status === 401) {
			window.location.href = '/login'
		} else if (error.response.status === 500) {
			Notify.error(error.response.message)
			return Promise.reject(error.response.data)
		}
    }
)

export default axios