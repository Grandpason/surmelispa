import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=League+Spartan:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
      </Head>
      <body className="bg-spa-dark text-spa-cream antialiased font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
