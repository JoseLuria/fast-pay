import type { NextApiRequest, NextApiResponse } from 'next'
import type { TicketApi } from '@/server/types'
import { getUserTickets } from '@/server'
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

  const { id } = session.user

  const tickets = await getUserTickets(id)

  res.status(200).json({ tickets })
}
