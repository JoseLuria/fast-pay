import { EmptyIllustration } from '@/components/icons'

export const InvoiceEmpty = () => {
  return (
    <section className='mt-16 flex flex-col text-center items-center md:mt-20'>
      <EmptyIllustration className='w-full max-w-[241px]' />
      <h2 className='my-6 font-semibold text-xl'>Parece que no hay nada</h2>
      <p className='max-w-[250px] text-sm text-white text-opacity-50'>
        Cree una factura haciendo clic en el botón Nuevo y empiece a recibir pagos
      </p>
    </section>
  )
}
