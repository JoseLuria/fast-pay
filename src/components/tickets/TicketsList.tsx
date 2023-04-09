import type { FC } from 'react'
import { TicketsContainer } from '@/components'
import type { Tickets } from '@/server/types'
import { formatId, formatPrice, formatDate } from '@/utils'

export const TicketsList: FC<Tickets> = ({ tickets: invoices }) => {
  return (
    <TicketsContainer>
      {invoices.map(({ id, clientName, date, total }) => (
        <li
          key={id}
          id={id}
          className='w-full flex flex-col p-6 gap-4 text-sm min-h-invoice rounded-lg bg-dark-gray md:min-h-invoice-md md:items-center md:flex-row'
        >
          <div className='w-full flex flex-wrap gap-3 justify-between md:w-auto md:gap-12'>
            <p className='uppercase font-semibold'>{formatId(id)}</p>
            <p className='text-gray'>{clientName}</p>
          </div>
          <div className='mt-auto flex flex-wrap gap-3 justify-between items-center md:gap-12 md:ml-auto'>
            <span className='md:flex md:gap-12'>
              <p className='text-gray'>{formatDate(date)}</p>
              <p className='font-semibold'>MXN {formatPrice(total)}</p>
            </span>
            <span className='px-5 py-3 rounded-md bg-green bg-opacity-10 flex gap-2 items-center text-green font-semibold'>
              <span className='w-2 h-2 rounded-full bg-green' />
              Pagado
            </span>
          </div>
        </li>
      ))}
    </TicketsContainer>
  )
}
