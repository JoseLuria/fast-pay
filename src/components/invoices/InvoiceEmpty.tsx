import { Illustration } from '@/components/svg'

export const InvoiceEmpty = () => {
  return (
    <section className='mt-16 flex flex-col text-center items-center md:mt-20'>
      <span className='w-full max-w-[241px]'>
        <Illustration />
      </span>
      <h2 className='my-6 font-semibold text-xl'>Parece que no hay nada</h2>
      <p className='max-w-[250px] text-sm text-white text-opacity-50'>
        Crea un ticket haciendo clic en el botón <span className='font-semibold'>Nuevo</span> y
        empiece a recibir pagos
      </p>
    </section>
  )
}
