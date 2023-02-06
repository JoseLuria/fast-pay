import type { InvoiceSatus } from '@prisma/client'

interface SingleInvoice {
  id: string
  date: Date
  clientName: string
  status: InvoiceSatus
  total: number
}

export type InvoiceApi = { message: string } | { invoices: SingleInvoice[] }
