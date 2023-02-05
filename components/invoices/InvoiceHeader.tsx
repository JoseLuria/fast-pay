import { NavArrowDown, Plus } from 'iconoir-react'
import type { FC } from 'react'

interface Props {
  size?: number
}

export const InvoiceHeader: FC<Props> = ({ size }) => {
  return (
    <section className='w-full flex relative flex-wrap gap-4 items-center mb-8 md:mb-12'>
      <span>
        <h1 className='text-xl font-semibold md:text-3xl md:mb-2'>Facturas</h1>
        <p className='text-sm text-white text-opacity-50'>{size || 'Sin'} facturas</p>
      </span>

      <button className='text-sm flex ml-auto gap-1 font-semibold'>
        Filtros
        <NavArrowDown />
      </button>

      <button className='h-12 py-1 flex gap-2 pl-2 pr-4 items-center focus-visible:outline-2 focus-visible:outline-green font-semibold text-sm rounded-3xl bg-dark-gray'>
        <div className='w-8 h-8 bg-black flex rounded-full'>
          <Plus className='m-auto' width={28} height={28} />
        </div>
        Nueva
      </button>
    </section>
  )
}
