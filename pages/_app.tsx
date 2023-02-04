import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { AxiosInterceptor } from '@/utils'

AxiosInterceptor()

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer icon theme='colored' />
    </>
  )
}

export default App
