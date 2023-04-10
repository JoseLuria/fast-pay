import { db, calculateTicketTotal } from '@/server'

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
