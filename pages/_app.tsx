import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AxiosInterceptor } from '@/utils'

AxiosInterceptor()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer icon theme='colored' />
    </>
  )
}
