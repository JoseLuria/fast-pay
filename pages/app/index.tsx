import dynamic from 'next/dynamic'
import { AppLayout, InvoiceHeader, InvoiceLoading } from '@/components'
import { useInvoices } from '@/hooks'

const InvoiceEmpty = dynamic(import('@/components').then(({ InvoiceEmpty }) => InvoiceEmpty))
const InvoiceList = dynamic(import('@/components').then(({ InvoiceList }) => InvoiceList))

const Dashboard = () => {
  const { invoices, isLoading } = useInvoices()

  return (
    <AppLayout title='Mis facturas'>
      <InvoiceHeader size={invoices.length} />
      {isLoading ? (
        <InvoiceLoading />
      ) : (
        <>{invoices.length > 0 ? <InvoiceList invoices={invoices} /> : <InvoiceEmpty />}</>
      )}
    </AppLayout>
  )
}

export default Dashboard
