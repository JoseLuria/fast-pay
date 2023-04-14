import type { FC, ReactNode } from 'react'
import clsx from 'clsx'
import { Head, Appbar } from '@/components'

interface Props {
  title: string
  children: ReactNode
  className?: string
}

export const DashboardLayout: FC<Props> = ({ title, children, className }) => {
  const styles = clsx('w-full max-w-container mx-auto', className)

  return (
    <>
      <Head title={title} />
      <Appbar />

      <div className='w-full mt-24 px-6 py-6 pb-12 md:px-12 md:pt-12 md:pb-24 lg:mt-0 lg:py-20 lg:ml-28 lg:w-auto lg:grow'>
        <main className={styles}>{children}</main>
      </div>
    </>
  )
}
