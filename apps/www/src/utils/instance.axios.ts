import axios, { type AxiosInstance } from 'axios'
import { API_URL } from '@/utils/common.constants'

export function setInterceptors(instance: AxiosInstance): AxiosInstance {
  instance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('THE_TOKEN')
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    async function (error) {
      return await Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      // console.log(`${response.config.url}`, response);
      return response
    },
    async function (error) {
      return await Promise.reject(error)
    }
  )
  return instance
}

console.log('API_URL : ', API_URL)
// console.log('import.meta.env : ', import.meta.env)

function createInstance(): AxiosInstance {
  const instance: AxiosInstance = axios.create({
    timeout: 10 * 1000,
    // headers: { 'Content-Type': ContentTypeEnum.JSON },
    // baseURL: API_URL
    baseURL: 'http://localhost:5199/'
  })
  return setInterceptors(instance)
}

export const axiosInstance = createInstance()
