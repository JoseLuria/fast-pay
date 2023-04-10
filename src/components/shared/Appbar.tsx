import { Fragment } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useSession, signOut } from 'next-auth/react'
import { Flash, User, LogOut, Logo } from '@/components/svg'
import { Menu, Transition } from '@headlessui/react'

const Image = dynamic(() => import('next/image'))

export const Appbar = () => {
  const { data, status } = useSession()

  return (
    <header className='fixed z-[1] bg-black top-0 left-0 w-full h-24 px-6 border-b-2 border-dark-gray md:px-12 lg:w-28 lg:h-full lg:border-r-2 lg:border-b-0 lg:p-12'>
      <nav className='flex h-full justify-between items-center lg:flex-col'>
        <Link className='flex items-center gap-1' href='/app'>
          <span className='hidden lg:block'>
            <Flash width={40} height={40} />
          </span>
          <span className='lg:hidden'>
            <Logo height={30} />
          </span>
        </Link>

        <Menu>
          <Menu.Button className='w-11 h-11 bg-dark-gray duration-200 border-2 border-dark-gray rounded-full overflow-hidden focus-visible:border-gray'>
            {status === 'authenticated' && (
              <>
                {data.user.image ? (
                  <Image
                    priority
                    width={44}
                    height={44}
                    src={data.user.image}
                    alt={data.user.name}
                  />
                ) : (
                  <Flash className='fill-white m-auto' width={26} height={26} />
                )}
              </>
            )}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='fixed bg-white top-28 right-2 text-sm p-2 outline-none rounded-xl text-black md:right-12 lg:bottom-12 lg:left-36 lg:top-auto lg:right-auto'>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href='/app/profile'
                    className={`w-full py-3 px-4 flex tap-none gap-1 items-center rounded-lg duration-200 ${
                      active ? 'bg-[#D2D9E7] text-black' : 'bg-none'
                    }`}
                  >
                    <User width={24} height={24} />
                    Mi perfil
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type='button'
                    onClick={() => signOut()}
                    className={`w-full py-3 px-4 flex tap-none gap-1 items-center rounded-lg duration-200 ${
                      active ? 'bg-[#D2D9E7] text-black' : 'bg-none'
                    }`}
                  >
                    <LogOut width={24} height={24} />
                    Cerrar sesión
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  )
}
