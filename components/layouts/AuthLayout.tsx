import type { ReactNode, FC } from 'react'
import { Head } from '@/components'

interface Props {
  title: string
  children?: ReactNode
}

export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <main className='w-full px-6 py-20 max-w-auth md:px-12'>{children}</main>
    </>
  )
}
