import { db, calculateTicketTotal } from '@/server'
import { AppError, calculateItemsTotal, excludeFields } from '@/server/utils'

export const getUserTickets = async (userId: string) => {
  const dbTickets = await db.ticket.findMany({
    where: { userId },
    include: {
      items: true
    }
  })

  if (dbTickets.length === 0) {
    return []
  }

  return dbTickets.map(({ id, date, clientName, status, items }) => {
    const total = calculateTicketTotal(items)
    return { id, date, clientName, status, total }
  })
}

export const getTicketData = async ({ userId, id }: { userId: string; id: string }) => {
  try {
    const dbTicket = await db.ticket.findFirst({
      where: { id, userId },
      include: {
        items: true
      }
    })

    if (!dbTicket) return

    const { items: ticketItems, ...data } = excludeFields(dbTicket, ['transactionId', 'userId'])

    const items = calculateItemsTotal(ticketItems)
    const total = calculateTicketTotal(ticketItems)

    return { ...data, items, total }
  } catch (error) {
    const { message } = error as Error
    throw new AppError(500, message)
  }
}
