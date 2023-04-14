import '@/styles/globals.css'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { AppProvider } from '@/components'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </SessionProvider>
  )
}

export default App
