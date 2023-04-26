import type { FC } from 'react'
import { GetServerSideProps } from 'next'
import { DashboardLayout, Text, BackButton, Input } from '@/components'
import { formatId, getCurrentDate } from '@/utils'

interface Props {
  title: string
  id?: string
}

const TicketEdit: FC<Props> = ({ title, id }) => {
  return (
    <DashboardLayout title={title}>
      <BackButton />
      <Text className='mt-8 mb-6' tag='h1'>
        {title}
      </Text>
      <form className='flex flex-col gap-6'>
        <Input name='decription' label='Descripción' placeholder='Diseño gráfico' />
        <Input name='clientName' label='Nombre del destinatario' placeholder='Jhon Doe' />
        <Input name='clientEmail' label='Correo del destinatario' placeholder='correo@mail.com' />
        <Input
          name='date'
          type='date'
          label='Fecha del ticket'
          defaultValue={getCurrentDate()}
          disabled
        />
      </form>
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
