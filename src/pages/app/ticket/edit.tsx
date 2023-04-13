import type { FC } from 'react'
import { GetServerSideProps } from 'next'
import { DashboardLayout, Text } from '@/components'
import { formatId } from '@/utils'

interface Props {
  title: string
  id?: string
}

const TicketEdit: FC<Props> = ({ title, id }) => {
  return (
    <DashboardLayout title={title}>
      <Text tag='h1'>{title}</Text>
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id = '' } = query as { id: string }

  if (!id) {
    return {
      notFound: true
    }
  }

  const title = id === 'new' ? 'Nuevo ticket' : `Editando ${formatId(id.toString())}`

  return {
    props: { title, id }
  }
}

export default TicketEdit
