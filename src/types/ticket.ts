import type { TicketSatus } from '@prisma/client'
import type { UserTicket } from '@/server/types'

export type TicketList = UserTicket[]
export type TicketStatusList = TicketSatus[]
