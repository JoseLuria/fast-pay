import type { FC, ReactNode } from 'react'
import { Head, Navbar } from '@/components'

interface Props {
  title: string
  children: ReactNode
}

export const HomeLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className='px-6 md:px-12'>
      <Head title={title} />
      <div className='w-full max-w-landing mx-auto'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
