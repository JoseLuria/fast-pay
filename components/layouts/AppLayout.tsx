import type { FC, ReactNode } from 'react'
import { Head, AppBar } from '@/components'

interface Props {
  children?: ReactNode
  title: string
}

export const AppLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <AppBar />

      <div className='w-full mt-24 p-6 md:p-12 lg:mt-0 lg:py-20 lg:ml-28 lg:w-auto lg:grow'>
        <main className='w-full max-w-container mx-auto'>{children}</main>
      </div>
    </>
  )
}
