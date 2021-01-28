import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['Authorization'] = getToken()
    }
    if (config.method === 'post' || config.method === 'put') {
      config.data = {
        param: config.data,
        client: 'cms',
        timestamp: Date.now()
      }
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      const res = response.data
      if (res.code !== 0) {
        Message({
          message: res.msg || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        if (res.code === -10086) {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        }
        return Promise.reject(res.msg)
      } else {
        return res.data
      }
    } else {
      return Promise.reject(new Error('code:' + response.status))
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
