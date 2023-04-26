import type { FC } from 'react'
import type { TicketSatus } from '@prisma/client'
import clsx from 'clsx'
import { statusData } from '@/constants'

interface Props {
  status: TicketSatus
}

export const TicketStatus: FC<Props> = ({ status }) => {
  return (
    <div
      className={clsx(
        'px-5 py-3 rounded-md bg-green bg-opacity-10 flex gap-2 items-center text-green font-semibold',
        statusData[status].color,
        statusData[status].colorText
      )}
    >
      <span className={clsx('w-2 h-2 rounded-full', statusData[status].color)} />
      <p>{statusData[status].text}</p>
    </div>
  )
}
