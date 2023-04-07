import type { FC, ReactNode } from 'react'
import { Head } from '@/components'

interface Props {
  title: string
  children: ReactNode
}

export const DashboardLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      {children}
    </>
  )
}
