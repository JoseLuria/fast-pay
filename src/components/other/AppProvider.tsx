import { type FC, type ReactNode } from 'react'
import { Toaster } from 'sonner'
import { useAxiosInterceptor, usePathInitializer } from '@/hooks'

interface Props {
  children?: ReactNode
}

export const AppProvider: FC<Props> = ({ children }) => {
  useAxiosInterceptor()
  usePathInitializer()

  return (
    <>
      {children}
      <Toaster closeButton richColors position='top-right' />
    </>
  )
}
