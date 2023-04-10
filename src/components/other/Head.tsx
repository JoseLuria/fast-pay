import type { FC } from 'react'
import NextHead from 'next/head'

interface Props {
  title: string
  description?: string
  otg?: string
}

export const Head: FC<Props> = ({
  title,
  description = 'FastPay es una plataforma que permite enviar tickets a tus contactos mediante correo electrónico y recibir pagos a través de PayPal de manera sencilla y eficiente.',
  otg = 'otg.webp'
}) => {
  const pageTitle = `${title} - FastPay`

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
