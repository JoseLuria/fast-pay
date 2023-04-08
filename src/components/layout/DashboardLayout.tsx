import type { FC, ReactNode } from 'react'
import { Head, Appbar } from '@/components'

interface Props {
  title: string
  children: ReactNode
}

export const DashboardLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <Appbar />

      <div className='w-full mt-24 px-6 py-6 pb-12 md:px-12 md:pt-12 md:pb-24 lg:mt-0 lg:py-20 lg:ml-28 lg:w-auto lg:grow'>
        <main className='w-full max-w-container mx-auto'>{children}</main>
      </div>
    </>
  )
}
