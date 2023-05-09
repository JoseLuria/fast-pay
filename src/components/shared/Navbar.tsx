import Link from 'next/link'
import { Logo } from '@/components/svg'
import { Button } from '@/components'

export const Navbar = () => {
  return (
    <nav className='w-full h-24 flex justify-between items-center border-b-[1px] border-b-white border-opacity-10'>
      <Link href='/' title='Inicio'>
        <Logo height={32} />
      </Link>

      <Button href='/login' variant='outline'>
        Login
      </Button>
    </nav>
  )
}
