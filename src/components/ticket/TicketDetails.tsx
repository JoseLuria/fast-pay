import type { FC } from 'react'
import type { SingleTicket } from '@/server/types'
import { TicketStatus, Button, Text } from '@/components'
import { formatId, formatDate, formatPrice, calculateTicketEnd } from '@/utils'

export const TicketDetails: FC<SingleTicket> = ({
  id,
  clientEmail,
  clientName,
  date,
  description,
  duration,
  items,
  status,
  total
}) => {
  return (
    <>
      <section className='bg-dark-gray p-6 rounded-md flex items-center justify-between mb-6 md:px-12'>
        <p className='font-semibold'>Estatus</p>

        <span className='ml-auto mr-6 flex gap-4 fixed bg-black bottom-0 left-0 p-6 w-full border-t-2 border-dark-gray md:border-none md:bg-opacity-0 md:p-0 md:w-auto md:relative md:left-auto md:bottom-auto'>
          <Button href={`/app/ticket/edit?id=${id}`} className='ml-auto md:ml-0' variant='default'>
            Editar
          </Button>
          <Button variant='error'>Eliminar</Button>
        </span>

        <TicketStatus status={status} />
      </section>

      <section className='bg-dark-gray p-6 rounded-md flex flex-col gap-6 md:p-12 md:flex-row md:flex-wrap md:items-center'>
        <div>
          <h1 className='text-lg font-bold'>{formatId(id)}</h1>
          <Text className='mt-3'>{description}</Text>
        </div>

        <div className='flex gap-6 md:ml-auto'>
          <div>
            <h2 className='font-semibold'>Creación</h2>
            <Text className='mt-3'>{formatDate(date)}</Text>
          </div>

          <div>
            <h2 className='font-semibold'>Vencimiento</h2>
            <Text className='mt-3'>{formatDate(calculateTicketEnd(date, duration))}</Text>
          </div>
        </div>

        <div className='md:w-full'>
          <h2 className='font-semibold'>Destinatario</h2>
          <Text className='mt-3'>{clientName}</Text>
          <Text>{clientEmail}</Text>
        </div>

        <div className='p-6 w-full flex flex-col gap-6 bg-low-gray rounded-md'>
          <ul className='flex flex-col gap-6'>
            {items.map(({ id, name, price, quantity, total }) => (
              <li className='flex justify-between gap-2 flex-wrap items-center' key={id}>
                <div className='md:flex md:grow md:items-center'>
                  <p className='text-white font-semibold mb-2'>{name}</p>
                  <p className='md:ml-auto md:mr-6'>
                    {quantity} x {formatPrice(price)}
                  </p>
                </div>
                <p className='text-white font-semibold'>{formatPrice(total)}</p>
              </li>
            ))}
          </ul>

          <div className='flex flex-wrap justify-between items-center gap-4 text-lg text-white font-semibold'>
            <p className='uppercase'>Total</p>
            <p>MXN {formatPrice(total)}</p>
          </div>
        </div>
      </section>
    </>
  )
}
