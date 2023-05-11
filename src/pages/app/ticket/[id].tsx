import type { FC } from 'react'
import type { SingleTicket } from '@/server/types'
import { GetServerSideProps } from 'next'
import { DashboardLayout, BackButton, TicketDetailsPlaceholder, ErrorBoundary } from '@/components'
import { useFetch } from '@/hooks'
import dynamic from 'next/dynamic'

const TicketDetails = dynamic(import('@/components').then(({ TicketDetails }) => TicketDetails))

interface Props {
  id: string
}

const TicketById: FC<Props> = ({ id }) => {
  const { data, status } = useFetch<SingleTicket>(`/api/ticket/${id}`)

  return (
    <ErrorBoundary type='page' error={status === 'error'}>
      <DashboardLayout className='mb-24 lg:mb-0 text-sm' title='Ticket'>
        <BackButton className='mb-8' />
        {status === 'loaded' && data ? <TicketDetails {...data} /> : <TicketDetailsPlaceholder />}
      </DashboardLayout>
    </ErrorBoundary>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query as { id: string }

  return { props: { id } }
}

export default TicketById
