/* eslint-disable no-console */
import type {AxiosRequestConfig, AxiosResponse} from 'axios'
import Axios from 'axios'

import Config from '@/Config/Config'

const axiosInstance = Axios.create({
  baseURL: Config.BASE_URL,
  timeout: 1000 * 60 * 2
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`axios request ${config.url} =>`, config)
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`axios response ${response.config.url} =>`, response)
    return response
  },
  (error) => Promise.reject(error)
)

const getFormData = (object: Record<string, any>) => {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key])
  })
  return formData
}

const APICall = (
  method: string,
  url: string,
  body?: any,
  headers?: any,
  formData?: boolean
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    method: method.toLowerCase() as any,
    url,
    headers
  }

  if (body && method.toLowerCase() === 'get') {
    config.params = body
  } else if (body && formData) {
    config.data = getFormData(body)
    config.headers = {
      ...headers,
      'Content-Type': 'multipart/form-data'
    }
  } else if (body) {
    config.data = body
  }

  // ✅ Return axios promise directly
  return axiosInstance(config)
}

export default APICall
