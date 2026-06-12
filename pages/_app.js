import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2G0CFKRQXQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2G0CFKRQXQ');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
