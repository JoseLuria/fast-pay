import type { Invoice } from '@prisma/client'

export type InvoiceApi = { message: string } | { invoices: Invoice[] }
