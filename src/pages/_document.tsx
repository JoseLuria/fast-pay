import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='es'>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#131313' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-black text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
