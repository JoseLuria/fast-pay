import { useEffect } from 'react'
import { toast } from 'sonner'
import axios from 'axios'

export const useAxiosInterceptor = () => {
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        const { data, statusText } = error.response
        toast.error(data.message ?? statusText)
        return Promise.reject(error)
      }
    )

    return () => axios.interceptors.response.eject(interceptor)
  }, [])
}
