import type { FC } from 'react'
import { ArrowDown, Plus } from '@/components/svg'

interface Props {
  size?: number
}

export const InvoiceHeader: FC<Props> = ({ size }) => {
  return (
    <section className='w-full flex relative flex-wrap gap-4 items-center mb-8 md:mb-12'>
      <span>
        <h1 className='text-xl font-semibold md:text-3xl md:mb-2'>Tickets</h1>
        <p className='text-sm text-white text-opacity-50'>{size || 'Sin'} tickets</p>
      </span>

      <button type='button' className='text-sm flex ml-auto gap-1 font-semibold'>
        Filtros
        <ArrowDown width={18} height={18} />
      </button>

      <button
        type='button'
        className='h-12 py-1 flex gap-2 pl-2 pr-4 items-center focus-visible:outline-2 focus-visible:outline-green font-semibold text-sm rounded-3xl bg-dark-gray'
      >
        <span className='w-8 h-8 bg-black flex justify-center items-center rounded-full'>
          <Plus width={28} height={28} />
        </span>
        Nuevo
      </button>
    </section>
  )
}
