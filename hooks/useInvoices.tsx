import { useState, useEffect } from 'react'
import axios from 'axios'
import type { SingleInvoice, Invoices } from '@/server/types'

export const useInvoices = () => {
  const [invoices, setInvoices] = useState<SingleInvoice[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchInvoices = async () => {
    try {
      const { data } = await axios.get<Invoices>('/api/invoice')
      setInvoices(data.invoices)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchInvoices()
  }, [])

  return { isLoading, invoices }
}
