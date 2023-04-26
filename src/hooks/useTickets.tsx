import type { TicketList, TicketStatusList, FetchStatus } from '@/types'
import type { Tickets } from '@/server/types'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export const useTickets = () => {
  const [tickets, setTickets] = useState<TicketList>([])
  const initialTickets = useRef<TicketList>([])
  const [status, setStatus] = useState<FetchStatus>('loading')

  const filterByStatus = (statusToFilter: TicketStatusList) => {
    const isStatusToFilterEmpty = statusToFilter.length === 0

    if (isStatusToFilterEmpty) {
      setTickets(initialTickets.current)
      return
    }

    const filteredStatusList = initialTickets.current.filter(({ status }) => {
      return statusToFilter.includes(status)
    })

    setTickets(filteredStatusList)
  }

  const fetchTickets = async () => {
    try {
      const { data } = await axios.get<Tickets>('/api/ticket')
      const { tickets } = data
      initialTickets.current = tickets
      setTickets(tickets)
      setStatus('loaded')
    } catch (error) {
      setStatus('error')
    }
  }

  useEffect(() => {
    fetchTickets()
  }, [])

  return { tickets, status, filterByStatus }
}
