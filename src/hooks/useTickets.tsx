import type { SingleInvoice, Invoices } from '@/server/types'
import { useState, useEffect } from 'react'
import axios from 'axios'

type FetchStatus = 'loading' | 'loaded' | 'error'

export const useTicket = () => {
  const [tickets, setTickets] = useState<SingleInvoice[]>([])
  const [status, setStatus] = useState<FetchStatus>('loading')

  const fetchInvoices = async () => {
    try {
      const { data } = await axios.get<Invoices>('/api/invoice')
      setTickets(data.invoices)
      setStatus('loaded')
    } catch (error) {
      setStatus('error')
    }
  }

  useEffect(() => {
    fetchInvoices()
  }, [])

  return { tickets, status }
}
