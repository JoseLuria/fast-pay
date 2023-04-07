import '@/styles/globals.css'
import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App
