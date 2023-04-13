import type { FC } from 'react'
import Link from 'next/link'
import { Text } from '@/components'
import { ArrowDown, Plus } from '@/components/svg'

interface Props {
  size?: number
}

export const TicketsHeader: FC<Props> = ({ size }) => {
  return (
    <section className='w-full flex relative flex-wrap gap-4 items-center mb-8 md:mb-12'>
      <span>
        <Text tag='h1'>Tickets</Text>
        <Text>{size || 'Sin'} tickets</Text>
      </span>

      <button type='button' className='text-sm flex ml-auto gap-1 font-semibold'>
        Filtros
        <ArrowDown width={18} height={18} />
      </button>

      <Link
        href='/app/ticket/edit?id=new'
        className='h-12 py-1 flex gap-2 pl-2 pr-4 items-center font-semibold text-sm duration-200 rounded-3xl bg-dark-gray hover:bg-low-gray focus-visible:bg-low-gray'
      >
        <span className='w-8 h-8 bg-black flex justify-center items-center rounded-full'>
          <Plus width={28} height={28} />
        </span>
        Nuevo
      </Link>
    </section>
  )
}
