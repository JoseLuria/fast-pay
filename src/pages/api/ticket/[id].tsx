import type { NextApiRequest, NextApiResponse } from 'next'
import { getTicketData } from '@/server'
import { invalidMethod, catchError, AppError, getSession } from '@/server/utils'

export default catchError(async (req: NextApiRequest, res: NextApiResponse<any>) => {
  switch (req.method) {
    case 'GET':
      return await getTicketById(req, res)
    default:
      return invalidMethod()
  }
})

const getTicketById = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { id = '' } = req.query as { id: string }

  const session = await getSession(req)

  if (!session) {
    throw new AppError(401, 'No estás autenticado')
  }

  const { id: userId } = session.user

  const ticket = await getTicketData({ userId, id })

  if (!ticket) {
    throw new AppError(401, 'Ticket no encontrado')
  }

  res.status(200).json({ ticket })
}
