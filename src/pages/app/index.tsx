import dynamic from 'next/dynamic'
import { DashboardLayout, ErrorBoundary, TicketsHeader, TicketListPlaceholder } from '@/components'
import { useTickets } from '@/hooks'

const TicketEmpty = dynamic(import('@/components').then(({ TicketsEmpty }) => TicketsEmpty))
const TicketList = dynamic(import('@/components').then(({ TicketsList }) => TicketsList))

const Dashboard = () => {
  const { tickets, status, filterByStatus } = useTickets()

  return (
    <ErrorBoundary error={status === 'error'}>
      <DashboardLayout title='Mis facturas'>
        <TicketsHeader onFilter={filterByStatus} size={tickets.length} />
        {status === 'loading' ? (
          <TicketListPlaceholder />
        ) : (
          <>{tickets.length > 0 ? <TicketList tickets={tickets} /> : <TicketEmpty />}</>
        )}
      </DashboardLayout>
    </ErrorBoundary>
  )
}

export default Dashboard
