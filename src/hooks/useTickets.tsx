import type { UserTicket, Tickets } from '@/server/types'
import { useState, useEffect } from 'react'
import axios from 'axios'

type FetchStatus = 'loading' | 'loaded' | 'error'

export const useTicket = () => {
  const [tickets, setTickets] = useState<UserTicket[]>([])
  const [status, setStatus] = useState<FetchStatus>('loading')

  const fetchTickets = async () => {
    try {
      const { data } = await axios.get<Tickets>('/api/ticket')
      setTickets(data.tickets)
      setStatus('loaded')
    } catch (error) {
      setStatus('error')
    }
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  return { tickets, status }
}
