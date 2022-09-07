/*
 * @Author: Bertram
 * @LastEditors: Bertram
 */
import axios from 'axios'
import { Toast } from 'vant';
const http = axios.create({
  baseURL: 'https://m.maizuo.com/',
  timeout: 10000,
  headers: {"X-Client-Info": '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16590727491774362659127297", "bc": "310100" }'}
});
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  Toast.clear()
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  Toast.clear()
  return Promise.reject(error);
});
export default http