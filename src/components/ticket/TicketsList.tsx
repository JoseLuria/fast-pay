import type { FC } from 'react'
import type { Tickets } from '@/server/types'
import Link from 'next/link'
import { TicketsContainer, TicketStatus } from '@/components'
import { formatId, formatPrice, formatDate } from '@/utils'

export const TicketsList: FC<Tickets> = ({ tickets }) => {
  return (
    <TicketsContainer>
      {tickets.map(({ id, clientName, date, total, status }) => (
        <li key={id}>
          <Link
            className='w-full flex flex-col p-6 gap-4 text-sm min-h-invoice rounded-lg bg-dark-gray md:min-h-invoice-md md:items-center md:flex-row'
            href={`/app/ticket/${id}`}
          >
            <div className='w-full flex flex-wrap gap-3 justify-between md:w-auto md:gap-12'>
              <p className='uppercase font-semibold'>{formatId(id)}</p>
              <p className='text-gray'>{clientName}</p>
            </div>
            <div className='mt-auto flex flex-wrap gap-3 justify-between items-center md:gap-12 md:ml-auto'>
              <div className='md:flex md:gap-12'>
                <p className='text-gray'>{formatDate(date)}</p>
                <p className='font-semibold'>MXN {formatPrice(total)}</p>
              </div>
              <TicketStatus status={status} />
            </div>
          </Link>
        </li>
      ))}
    </TicketsContainer>
  )
}
