import { Html, Head, Main, NextScript } from 'next/document'
import { GTMHeadScript, GTMNoscript } from '../components/Tracking'

export default function Document() {
  return (
    <Html lang="tr" className="scroll-smooth">
      <Head>
        {/* 🔒 Google Tag Manager — Bu component'e dokunmayın (bkz. components/Tracking.js) */}
        <GTMHeadScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=League+Spartan:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/icon-512.png" />
      </Head>
      <body className="bg-spa-dark text-spa-cream antialiased font-sans">
        {/* 🔒 GTM Noscript — Bu component'e dokunmayın (bkz. components/Tracking.js) */}
        <GTMNoscript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
