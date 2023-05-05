import { DashboardLayout, BackButton, TicketDetailsPlaceholder, ErrorBoundary } from '@/components'

const TicketById = () => {
  return (
    <ErrorBoundary>
      <DashboardLayout className='mb-24 lg:mb-0' title='Ticket'>
        <BackButton />
        <TicketDetailsPlaceholder />
      </DashboardLayout>
    </ErrorBoundary>
  )
}

export default TicketById
