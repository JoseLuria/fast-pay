import type { TicketSatus, Ticket, Item } from '@prisma/client'
import type { CatchError } from '@/server/types'

export interface UserTicket {
  id: string
  date: Date
  clientName: string
  status: TicketSatus
  total: number
}

export type Tickets = { tickets: UserTicket[] }

export interface SingleTicketItem extends Omit<Item, 'ticketId'> {
  total: string
}

export interface SingleTicket extends Omit<Ticket, 'date' | 'terms' | 'userId' | 'transactionId'> {
  createdAt: Date
  expiredAt: Date
  items: SingleTicketItem
  total: number
}

export type TicketApi = CatchError | Tickets

export type SingleTicketApi = CatchError | SingleTicket
