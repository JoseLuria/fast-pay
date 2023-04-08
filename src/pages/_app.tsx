import '@/styles/globals.css'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { AxiosInterceptor } from '@/components'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <AxiosInterceptor>
        <Component {...pageProps} />
      </AxiosInterceptor>
    </SessionProvider>
  )
}

export default App
