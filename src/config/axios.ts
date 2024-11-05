import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://skills-api-zeta.vercel.app',
})

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

axiosInstance.interceptors.response.use((response) => {
  return response.data
})

export default axiosInstance
