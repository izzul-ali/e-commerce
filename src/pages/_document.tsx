import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta
          name="description"
          content="eksperimen membuat aplikasi e-commerce sederhana yang dibuat dengan next.js dan zustand sebagai state management"
        />
        <meta name="theme-color" content="#7c3aed" />
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
