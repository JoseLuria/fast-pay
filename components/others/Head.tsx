import type { FC } from 'react'
import NextHead from 'next/head'

interface Props {
  title: string
  description?: string
  otg?: string
}

export const Head: FC<Props> = ({
  title,
  description = 'FastPay es una plataforma que facilita la creación y envió de facturas a tus contactos por medio de correo electrónico, así como la implementación de PayPal para poder recibir de forma fácil el dinero de dichas facturas.',
  otg = 'otg.webp'
}) => {
  const pageTitle = `FastPay - ${title}`

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name='description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={otg} />
    </NextHead>
  )
}
