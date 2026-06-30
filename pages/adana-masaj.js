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
          <div className="relative z-10 max-w-4xl mx-auto px-4 mt-16 sm:mt-20">
            <span className="text-spa-accent-light text-[10px] sm:text-xs tracking-[.4em] uppercase font-semibold mb-3 sm:mb-6 block fade-up">Adana'nın Huzur Adresi</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-8 leading-tight font-serif fade-up drop-shadow-2xl">
              Adana Masaj Salonu &<br /><span className="text-spa-accent-light italic">VIP Spa Merkezi</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-spa-cream/80 mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed fade-up font-light">
              Adana'nın kalbinde, profesyonel masaj terapileri ile bedeninizi ve ruhunuzu yenileyecek bir kaçış noktası.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center fade-up">
              <a
                onClick={handlePhoneClick} href="tel:+905305153770"
                className="bg-spa-deep hover:bg-spa-accent text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm tracking-widest uppercase rounded-full transition-all duration-300 border border-spa-accent/50 hover:border-transparent"
              >
                Rezervasyon Yap
              </a>
              <Link
                href="/hizmetler"
                className="bg-transparent hover:bg-white/10 text-white px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm tracking-widest uppercase rounded-full transition-all duration-300 border border-white/30"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 z-20">
            <span className="text-spa-accent-light text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold opacity-80">İç Mekan İçin Kaydırın</span>
            <div className="animate-bounce mt-0.5">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-spa-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 13l-7 7-7-7m7 7V4"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* İç Mekan Galeri Section */}
        <section id="ic-mekan" className="py-24 bg-spa-dark border-t border-spa-deep/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 fade-up">
              <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">Sürmeli Spa Deneyimi</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Huzur Dolu <span className="italic text-spa-accent-light">İç Mekanımız</span></h2>
              <p className="text-spa-muted text-sm md:text-base max-w-xl mx-auto font-light">
                Sizler için her detayı özenle tasarlanmış, dinlendirici ve hijyenik VIP salonlarımızdan görüntüler.
              </p>
            </div>

            <div className="space-y-24">
              {/* Image 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-12 fade-up">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-spa-accent/15 shadow-2xl aspect-[16/10]">
                  <img src="/assets/images/3.webp" alt="Sürmeli Spa Yüzme Havuzu" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">

                  <h3 className="text-2xl md:text-3xl font-serif text-white">Yüzme Havuzumuz</h3>
                  <p className="text-spa-cream/80 font-light leading-relaxed">
                    Seans öncesi veya sonrasında vücudunuzu dinlendirmek, kaslarınızı gevşetmek için kullanabileceğiniz huzurlu sıcak su havuzumuz.
                  </p>
                </div>
              </div>

              {/* Image 4 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 fade-up">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-spa-accent/15 shadow-2xl aspect-[16/10]">
                  <img src="/assets/images/4.webp" alt="Sürmeli Spa VIP Masaj Odaları" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">

                  <h3 className="text-2xl md:text-3xl font-serif text-white">VIP Masaj Odaları</h3>
                  <p className="text-spa-cream/80 font-light leading-relaxed">
                    Tamamen size özel, hijyen standartlarının en üst seviyede tutulduğu, profesyonel masaj yatakları ve aromatik kokularla donatılmış kişisel terapi odalarımız.
                  </p>
                </div>
              </div>

              {/* Image 5 */}
              <div className="flex flex-col lg:flex-row items-center gap-12 fade-up">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-spa-accent/15 shadow-2xl aspect-[16/10]">
                  <img src="/assets/images/5.webp" alt="Sürmeli Spa Türk Hamamı" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">

                  <h3 className="text-2xl md:text-3xl font-serif text-white">Türk Hamamı</h3>
                  <p className="text-spa-cream/80 font-light leading-relaxed">
                    Geleneksel Türk hamamı kültürünü yaşatan mermer kaplama alanımızda, kese ve köpük masajı ritüelleri ile cildinizi tazeleyin, gözeneklerinizi açın ve toksinlerden tamamen arının.
                  </p>
                </div>
              </div>

              {/* Image 6 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 fade-up">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-spa-accent/15 shadow-2xl aspect-[16/10]">
                  <img src="/assets/images/6.webp" alt="Sürmeli Spa Konforlu Terapi Odası" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">

                  <h3 className="text-2xl md:text-3xl font-serif text-white">Konforlu Terapi Odalarımız</h3>
                  <p className="text-spa-cream/80 font-light leading-relaxed">
                    Genel standart odalarımızda yüksek konfor ve rahatlığı bir arada sunuyoruz. Her müşteri sonrası havlu ve çarşaflarımız günlük olarak yıkanıp sterilize edilerek maksimum hijyen sağlanmaktadır.
                  </p>
                </div>
              </div>

              {/* Image 7 */}
              <div className="flex flex-col lg:flex-row items-center gap-12 fade-up">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-spa-accent/15 shadow-2xl aspect-[16/10]">
                  <img src="/assets/images/7.webp" alt="Sürmeli Spa Bar Köşesi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">

                  <h3 className="text-2xl md:text-3xl font-serif text-white">Bar Köşesi</h3>
                  <p className="text-spa-cream/80 font-light leading-relaxed">
                    Terapilerinizin öncesinde veya sonrasında sıcak ve soğuk özel ikramlarımızı alıp keyifle vakit geçirebileceğiniz lüks bar köşemiz.
                  </p>
                </div>
              </div>

              {/* Image 8 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12 fade-up">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-spa-accent/15 shadow-2xl aspect-[16/10]">
                  <img src="/assets/images/8.webp" alt="Sürmeli Spa Resepsiyon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">

                  <h3 className="text-2xl md:text-3xl font-serif text-white">Resepsiyon</h3>
                  <p className="text-spa-cream/80 font-light leading-relaxed">
                    Güler yüzlü ekibimizle sizi karşıladığımız, randevularınızı organize ettiğimiz ve spa deneyiminiz başlamadan önce size rehberlik ettiğimiz şık karşılama alanımız.
                  </p>
                </div>
              </div>

              {/* Image 9 */}
              <div className="flex flex-col lg:flex-row items-center gap-12 fade-up">
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-spa-accent/15 shadow-2xl aspect-[16/10]">
                  <img src="/assets/images/9.webp" alt="Sürmeli Spa VIP Spa Terapi" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">

                  <h3 className="text-2xl md:text-3xl font-serif text-white">VIP Spa & Terapi</h3>
                  <p className="text-spa-cream/80 font-light leading-relaxed">
                    Özellikle sporcuların antrenman sonrası ter atma ve kas dinlendirme dönemleri için ideal, vücudu yenileyen ve rejenerasyonu hızlandıran özel spa seanslarımız.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
    </PageLayout>
  )
}
