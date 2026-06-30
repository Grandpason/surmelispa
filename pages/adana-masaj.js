import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../components/PageLayout'

export default function AdanaMasaj() {

  
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18196965496/H7nRCIG-jr4cEPjQ_uRD'
      });
    }
  };

  // Schema for HealthAndBeautyBusiness Structured Data
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    'name': 'Sürmeli Spa',
    'image': 'https://www.surmelispa.com/assets/images/Logo.jpeg',
    '@id': 'https://www.surmelispa.com/#business',
    'url': 'https://www.surmelispa.com/adana-masaj',
    'telephone': '+905305153770',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Kuruköprü, Sefa Özler Cd. No:49',
      'addressLocality': 'Seyhan',
      'addressRegion': 'Adana',
      'postalCode': '01060',
      'addressCountry': 'TR'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 36.9893876,
      'longitude': 35.3216329
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '12:00',
      'closes': '23:00'
    }
  }

  return (
    <PageLayout>
      <Head>
        <title>Adana Masaj Salonu ve Spa Merkezi | Sürmeli Spa</title>
        <meta name="description" content="Adana Seyhan'ın merkezinde huzur dolu bir mola. Profesyonel masaj ve spa ayrıcalığı için randevu alın!" />
        <meta name="keywords" content="Adana masaj, Adana masaj salonu, Sürmeli Spa, Adana spa, Seyhan masaj salonu, Adana masaj salonları, masaj salonu, spa merkezi" />
        <meta name="author" content="Sürmeli Spa" />
        <link rel="canonical" href="https://www.surmelispa.com/adana-masaj" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Adana Masaj Salonu ve Spa Merkezi | Sürmeli Spa" />
        <meta property="og:description" content="Adana Seyhan'ın merkezinde huzur dolu bir mola. Profesyonel masaj ve spa ayrıcalığı için randevu alın!" />
        <meta property="og:image" content="/assets/images/Logo.jpeg" />
        <meta property="og:url" content="https://www.surmelispa.com/adana-masaj" />
        <meta property="og:type" content="website" />

        {/* Dynamic Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 hero-bg bg-cover bg-center bg-no-repeat opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-spa-darker/80 via-spa-deep/60 to-spa-dark"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 mt-20">
            <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block fade-up">Adana'nın Huzur Adresi</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-serif fade-up drop-shadow-2xl">
              Adana Masaj Salonu &<br /><span className="text-spa-accent-light italic">VIP Spa Merkezi</span>
            </h1>
            <p className="text-lg md:text-xl text-spa-cream/80 mb-12 max-w-2xl mx-auto leading-relaxed fade-up font-light">
              Adana'nın kalbinde, profesyonel masaj terapileri ile bedeninizi ve ruhunuzu yenileyecek bir kaçış noktası.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-up">
              <a
                onClick={handlePhoneClick} href="tel:+905305153770"
                className="bg-spa-deep hover:bg-spa-accent text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all duration-300 border border-spa-accent/50 hover:border-transparent"
              >
                Rezervasyon Yap
              </a>
              <Link
                href="/hizmetler"
                className="bg-transparent hover:bg-white/10 text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all duration-300 border border-white/30"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>
        </section>
    </PageLayout>
  )
}
