import type { NextApiRequest, NextApiResponse } from 'next'
import type { TicketApi } from '@/server/types'
import { db } from '@/server'
import { invalidMethod, catchError, AppError, getSession } from '@/server/utils'

export default catchError(async (req: NextApiRequest, res: NextApiResponse<TicketApi>) => {
  switch (req.method) {
    case 'GET':
      return await getTickets(req, res)
    default:
      return invalidMethod()
  }
})

const getTickets = async (req: NextApiRequest, res: NextApiResponse<TicketApi>) => {
  const session = await getSession(req)

  if (!session) {
    throw new AppError(401, 'No estás autenticado')
  }

  const userId = session.user.id

  const dbTickets = await db.ticket.findMany({
    where: { userId },
    include: {
      items: true
    }
  })

  if (dbTickets.length === 0) {
    return res.status(200).json({ tickets: [] })
  }

  const tickets = dbTickets.map(({ id, date, clientName, status, items }) => {
    const { price: total } = items.reduce((prev, { price, quantity }) => ({
      ...prev,
      price: prev.price + price * quantity
    }))

    return { id, date, clientName, status, total }
  })

  res.status(200).json({ tickets })
}
