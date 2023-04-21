import axios from 'axios'
import $config from '../common/config'
import { Message } from 'element-ui'
// import router from '../router/router'

axios.defaults.baseURL = $config.api
axios.defaults.timeout = 10000

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // config.withCredentials = true // 设置后可以发送cookie
    // 在发送请求之前做些什么
    // 获取登录成功后保存的token
    let token = window.sessionStorage.getItem('token')

    if (token) {
      // console.log(token);
      config.headers['Auth'] = token
      // config.headers['content-type'] = 'application/json'
    }

    // console.log(config);
    return config
  },
  (err) => {
    Message.error('请求超时')
    return Promise.reject(err)
  }
)

// 响应拦截
axios.interceptors.response.use(
  (res) => {
    // console.log(res);
    // 状态码不是200的时候返回错误信息，按道理应该针对不同的状态码做相应判断
    if (res.status !== 200) {
      return Promise.reject(res.data)
    }

    
    return res.data
  },
  (err) => {
    // 响应错误时返回状态为rejected 的promise实例
    return Promise.reject(err)
  }
)

export default axios
