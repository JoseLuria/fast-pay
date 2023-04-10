import { type FC, type ReactNode, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
import axios from 'axios'

interface Props {
  children?: ReactNode
}

export const AxiosInterceptor: FC<Props> = ({ children }) => {
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

  return (
    <>
      {children}
      <Toaster closeButton richColors position='top-right' />
    </>
  )
}
