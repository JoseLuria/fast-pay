import Link from 'next/link'
import { Logo, Menu } from '@/components/svg'

export const Navbar = () => {
  return (
    <nav className='w-full h-24 flex justify-between items-center border-b-[1px] border-b-white border-opacity-10'>
      <Link href='/' title='Inicio'>
        <Logo height={32} />
      </Link>

      <button>
        <Menu width={32} height={32} />
      </button>
    </nav>
  )
}
