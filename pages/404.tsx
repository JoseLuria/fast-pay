import { useRouter } from 'next/router'
import { Button } from '@/components'

const NotFound = () => {
  const router = useRouter()

  return (
    <div className='p-6 flex absolute items-center justify-center top-0 left-0 w-full h-full'>
      <main className='w-full max-w-[300px] flex gap-6 flex-col items-center text-center'>
        <span className='text-8xl font-semibold'>404</span>
        <h1 className='uppercase text-2xl font-semibold'>Ups! Página no encontrada</h1>
        <p className='text-sm'>
          Esta página no existe o ha sido eliminada. Le sugerimos regresar al inicio.
        </p>
        <Button onClick={() => router.push('/')}>Volver al principio</Button>
      </main>
    </div>
  )
}

export default NotFound
