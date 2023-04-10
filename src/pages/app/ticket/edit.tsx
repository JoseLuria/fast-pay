import type { FC } from 'react'
import { GetServerSideProps } from 'next'
import { DashboardLayout, Text } from '@/components'
import { formatId } from '@/utils'

interface Props {
  title: string
  isNew: boolean
  id: string
}

const TicketEdit: FC<Props> = ({ title, id, isNew }) => {
  return (
    <DashboardLayout title={title}>
      <Text tag='h1'>{title}</Text>
    </DashboardLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id = '' } = query

  const title = id ? `Editando ${formatId(id.toString())}` : 'Nuevo ticket'
  const isNew = id === 'new' || !id

  return {
    props: { title, isNew, id }
  }
}

export default TicketEdit
