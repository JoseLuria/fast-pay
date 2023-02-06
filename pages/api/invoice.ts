import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/server'
import type { InvoiceApi } from '@/server/types'
import { invalidMethod, catchError, AppError, getSession } from '@/utils'

export default catchError(async (req: NextApiRequest, res: NextApiResponse<InvoiceApi>) => {
  switch (req.method) {
    case 'GET':
      return await getInvoices(req, res)
    default:
      return invalidMethod()
  }
})

const getInvoices = async (req: NextApiRequest, res: NextApiResponse<InvoiceApi>) => {
  const session = await getSession(req)

  if (!session) {
    throw new AppError(401, 'No estás autenticado')
  }

  const userId = session.user.id

  const dbInvoices = await db.invoice.findMany({
    where: { userId },
    include: {
      items: true
    }
  })

  if (dbInvoices.length === 0) {
    return res.status(200).json({ invoices: [] })
  }

  const invoices = dbInvoices.map(({ id, date, clientName, status, items }) => {
    const { price: total } = items.reduce((prev, { price, quantity }) => ({
      ...prev,
      price: prev.price + price * quantity
    }))

    return { id, date, clientName, status, total }
  })

  res.status(200).json({ invoices })
}
