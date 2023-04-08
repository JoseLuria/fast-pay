import '@/styles/globals.css'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'
import { AxiosInterceptor } from '@/utils'

AxiosInterceptor()

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Component {...pageProps} />
      <Toaster richColors position='top-right' />
    </SessionProvider>
  )
}

export default App
