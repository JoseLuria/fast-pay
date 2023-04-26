import type { ReactNode, FC } from 'react'
import Link from 'next/link'
import { Head } from '@/components'
import { Logo } from '@/components/svg'

interface Props {
  title: string
  children?: ReactNode
}

export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head title={title} />
      <main className='w-full px-6 flex flex-col py-20 items-center md:px-12'>
        <Link className='mb-10' href='/' title='Inicio'>
          <Logo height={40} />
        </Link>

        {children}
      </main>
    </>
  )
}
