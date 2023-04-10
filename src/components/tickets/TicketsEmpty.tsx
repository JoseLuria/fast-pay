import { Text } from '@/components'
import { Illustration } from '@/components/svg'

export const TicketsEmpty = () => {
  return (
    <section className='mt-16 flex flex-col gap-4 text-center items-center md:mt-20'>
      <span className='w-full max-w-[241px]'>
        <Illustration />
      </span>
      <Text tag='h2'>Parece que no hay nada</Text>
      <Text className='max-w-[250px]'>
        Crea un ticket haciendo clic en el botón <span className='font-semibold'>Nuevo</span> y
        empiece a recibir pagos
      </Text>
    </section>
  )
}
