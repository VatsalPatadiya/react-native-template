/* eslint-disable no-console */

import type {AxiosRequestConfig} from 'axios'
import Axios from 'axios'

import Config from '@/Config/Config'

const axiosInstance = Axios.create({
  baseURL: Config.BASE_URL
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    console.log(`axios request ${config.url}=>`, config)
    return config
  },
  async (error: any) => {
    console.log('axios request error =>', error)
    return await Promise.reject(error)
  }
)

// Response interceptor

axiosInstance.interceptors.response.use(
  (config: any) => {
    console.log(`axios response ${config.config.url}=>`, config)
    return config
  },
  async (error: any) => {
    console.log('axios response error =>', error.response || error)
    if (error.response) {
      console.log('axios response error', error.response)
    }
    return await Promise.reject(error)
  }
)

const getFormData = (object: any) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key])
  })
  return formData
}

const APICall = async (
  method: string,
  url: string,
  body?: any,
  headers?: any,
  formData?: boolean
) => {
  method = method.toLowerCase()
  const config: AxiosRequestConfig = {
    method,
    url,
    timeout: 1000 * 60 * 2
  }
  if (url) {
    config.url = url
  }
  if (body && method === 'get') {
    config.params = body
  } else if (body && method.toLowerCase() === 'post' && !formData) {
    config.data = body
  } else if (body && method.toLowerCase() === 'post' && formData) {
    headers = {...config.headers, 'Content-Type': 'multipart/form-data'}
    if (formData) {
      config.data = getFormData(body)
    } else {
      config.data = body
    }
  } else {
    config.data = body
  }
  if (headers) {
    config.headers = headers
  }

  return new Promise(async (resolve, reject) => {
    axiosInstance(config)
      .then((res: any) => {
        resolve(res)
      })
      .catch(async (error: any) => {
        // You can set your error condition at here and access code using error.response.status
        if (error.code === 'ECONNABORTED') {
          reject('Request timeout. Please check your internet connection')
          return
        }
        reject(error)
      })
  })
}

export default APICall
