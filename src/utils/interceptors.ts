import axios from 'axios'
import { toast } from 'react-toastify'

export const AxiosInterceptor = () => {
  if (typeof window === 'undefined') return

  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const { data, statusText } = error.response
      toast.error(data.message ?? statusText)
      return Promise.reject(error)
    }
  )
}
