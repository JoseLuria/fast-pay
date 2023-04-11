import type { FC } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components'

interface Props {
  type?: 'page' | 'error'
}

const errorData = {
  page: {
    title: 'Página no encontrada',
    message: 'Esta página no existe o ha sido eliminada. Le sugerimos regresar al inicio.',
    buttonText: 'Volver al principio'
  },
  error: {
    title: 'Error de la aplicación',
    message: 'Sucedió un error al cargar la información. Le sugerimos recargar la página.',
    buttonText: 'Recargar página'
  }
}

export const Error: FC<Props> = ({ type = 'error' }) => {
  const { title, message, buttonText } = errorData[type]
  const router = useRouter()

  return (
    <div className='px-6 py-36 flex items-center justify-center'>
      <main className='w-full max-w-[300px] flex gap-6 flex-col items-center text-center'>
        <span className='text-8xl font-semibold'>404</span>
        <h1 className='uppercase text-2xl font-semibold'>Ups! {title}</h1>
        <p className='text-sm'>{message}</p>
        {type === 'page' ? (
          <Button href='/'>{buttonText}</Button>
        ) : (
          <Button onClick={() => router.reload()}>{buttonText}</Button>
        )}
      </main>
    </div>
  )
}
