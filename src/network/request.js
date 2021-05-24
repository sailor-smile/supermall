import axios from 'axios'
export function request(config){
  return new Promise((resolve,reject) => {
		//1.创建axios实例
		const instance = axios.create({
			baseURL:'http://123.207.32.32:8000',
			timeout:1000 * 3
		})
		//2.axios的拦截器
    //2.1.请求拦截的作用
/* 		instance.interceptors.request.use(config => {
			console.log(config);
		},err => {
			console.log(err);
		}) */

  //拦截器响应拦截 res.data
   instance.interceptors.response.use(res => {
    	return res.data
    },err => {
    	console.log(err);
    })

		//2.比如每次发送网络请求时，都希望在界面中显示一个 请求图标

		//3.某些网络请求((比如登录(token))),必须携带一些特殊的信息

		//2.2.响应拦截

		//发送真正的网络请求
	   instance(config).then(res => {
			 resolve(res)
		 }).catch(err => {
			 reject(err)
		 })
	})
	}
