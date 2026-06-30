/**
 * =============================================================================
 * 🔒 TRACKING COMPONENT — DOKUNULMAZ BÖLGE (DO NOT MODIFY)
 * =============================================================================
 *
 * Bu component, projedeki tüm analiz ve izleme (tracking) script'lerini
 * merkezi ve izole bir şekilde barındırır.
 *
 * İçerik:
 *   1. Google Tag Manager (GTM) — GTM-54G2BZFQ
 *   2. Google Analytics 4 (GA4) — G-2G0CFKRQXQ
 *   3. Google Ads Conversion Tracking — AW-18196965496
 *
 * ⚠️  ÖNEMLİ KURAL:
 *     Tasarım, UI veya fonksiyon geliştirme talepleri sırasında
 *     bu dosya ve içindeki script'ler KESİNLİKLE değiştirilmemelidir.
 *     Sadece tracking/analitik ile ilgili talepler doğrultusunda
 *     düzenleme yapılabilir.
 *
 * =============================================================================
 */

import Script from 'next/script'

// GTM Container ID
const GTM_ID = 'GTM-54G2BZFQ'

// GA4 Measurement ID
const GA4_ID = 'G-2G0CFKRQXQ'

// Google Ads Conversion ID
const GADS_ID = 'AW-18196965496'

/**
 * GTM Head Script — Google Tag Manager ana yükleme script'i.
 * _document.js içindeki <Head> bölümüne eklenir.
 */
export function GTMHeadScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  )
}

/**
 * GTM Noscript — JavaScript devre dışı olan tarayıcılar için GTM iframe'i.
 * _document.js içindeki <body> bölümüne eklenir.
 */
export function GTMNoscript() {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  )
}

/**
 * TrackingScripts — GA4 ve Google Ads script'lerini yükler.
 * _app.js içinde <Component> öncesinde çağrılır.
 */
export default function TrackingScripts() {
  return (
    <>
      {/* Google Analytics 4 (GA4) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}');
        `}
      </Script>

      {/* Google Ads Conversion Tracking */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
      />
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GADS_ID}');
          `,
        }}
      />
    </>
  )
}
