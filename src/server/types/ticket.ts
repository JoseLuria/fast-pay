import type { TicketSatus } from '@prisma/client'

export interface SingleTicket {
  id: string
  date: Date
  clientName: string
  status: TicketSatus
  total: number
}

export type Tickets = { tickets: SingleTicket[] }

export type TicketApi = { message: string } | Tickets
