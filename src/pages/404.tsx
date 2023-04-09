import { Head, Error } from '@/components'

const NotFound = () => {
  return (
    <>
      <Head title='Página no encontrada' />
      <Error type='page' />
    </>
  )
}

export default NotFound
