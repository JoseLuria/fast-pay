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
      <main className='w-full px-6 flex flex-col py-20 items-center md:px-12'>{children}</main>
    </>
  )
}
