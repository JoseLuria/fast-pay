import dynamic from 'next/dynamic'
import { DashboardLayout, ErrorBoundary, TicketsHeader, TicketLoading } from '@/components'
import { useTicket } from '@/hooks'

const TicketEmpty = dynamic(import('@/components').then(({ TicketsEmpty }) => TicketsEmpty))
const TicketList = dynamic(import('@/components').then(({ TicketsList }) => TicketsList))

const Dashboard = () => {
  const { tickets, status } = useTicket()

  return (
    <ErrorBoundary error={status === 'error'}>
      <DashboardLayout title='Mis facturas'>
        <TicketsHeader size={tickets.length} />
        {status === 'loading' ? (
          <TicketLoading />
        ) : (
          <>{tickets.length > 0 ? <TicketList tickets={tickets} /> : <TicketEmpty />}</>
        )}
      </DashboardLayout>
    </ErrorBoundary>
  )
}

export default Dashboard
