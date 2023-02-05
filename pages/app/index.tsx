import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { AppLayout, InvoiceHeader, InvoiceLoading } from '@/components'

const InvoiceEmpty = dynamic(import('@/components').then(({ InvoiceEmpty }) => InvoiceEmpty))

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const invoices = []

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AppLayout title='Mis facturas'>
      <InvoiceHeader size={invoices.length} />
      {isLoading ? <InvoiceLoading /> : <InvoiceEmpty />}
    </AppLayout>
  )
}

export default Dashboard
