import Image from 'next/image'
import { Button, Text } from '@/components'

export const HomeHeader = () => {
  return (
    <header className='w-full flex flex-col py-12 gap-12 md:items-center md:flex-row lg:py-28'>
      <section className='w-full flex flex-col gap-5 lg:gap-8'>
        <h1 className='font-semibold text-4xl leading-9 lg:text-6xl lg:leading-none'>
          Envía tickets y recibe pagos con PayPal
        </h1>
        <Text className='max-w-[450px]'>
          FastPay es una plataforma que permite enviar tickets a tus contactos mediante correo
          electrónico y recibir pagos a través de PayPal de manera sencilla y eficiente.
        </Text>
        <Button href='/login' className='md:w-fit'>
          Comienza a recibir pagos
        </Button>
      </section>
      <Image
        priority
        width={600}
        height={480}
        className='w-full rounded-xl md:w-1/2'
        src='/assets/preview-mobile.jpg'
        alt='FastPay: Envía tickets y recibe pagos con PayPal'
      />
    </header>
  )
}
