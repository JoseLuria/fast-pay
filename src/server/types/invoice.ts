import type { InvoiceSatus } from '@prisma/client'

export interface SingleInvoice {
  id: string
  date: Date
  clientName: string
  status: InvoiceSatus
  total: number
}

export type Invoices = { invoices: SingleInvoice[] }

export type InvoiceApi = { message: string } | Invoices
