import type { SingleInvoice, Invoices } from '@/server/types'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const useInvoices = () => {
  const [invoices, setInvoices] = useState<SingleInvoice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchInvoices = async () => {
    setError(false)
    try {
      const { data } = await axios.get<Invoices>('/api/invoice')
      setInvoices(data.invoices)
      setIsLoading(false)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchInvoices()
  }, [])

  return { isLoading, invoices, error }
}
