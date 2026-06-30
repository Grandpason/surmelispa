import Head from 'next/head'
import PageLayout from '../components/PageLayout'

export default function Lokasyon() {
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18196965496/H7nRCIG-jr4cEPjQ_uRD'
      });
    }
  };

  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18196965496/lGC5CJuxib4cEPjQ_uRD'
      });
    }
  };

  return (
    <PageLayout>
      <Head>
        <title>Sürmeli Spa Adana Lokasyon ve Adres | Seyhan</title>
        <meta name="description" content="Sürmeli Spa Adana lokasyon ve adres bilgileri. Kuruköprü, Sefa Özler Cd. No:49, Seyhan/Adana. Google Maps ile yol tarifi alın." />
        <meta name="keywords" content="Sürmeli Spa adres, Adana masaj salonu adres, Seyhan masaj, Kuruköprü spa, Sürmeli Spa lokasyon" />
        <link rel="canonical" href="https://www.surmelispa.com/lokasyon" />
        <meta property="og:title" content="Sürmeli Spa Adana Lokasyon ve Adres | Seyhan" />
        <meta property="og:description" content="Sürmeli Spa Adana lokasyon ve adres bilgileri. Google Maps ile yol tarifi alın." />
        <meta property="og:url" content="https://www.surmelispa.com/lokasyon" />
        <meta property="og:type" content="website" />
      </Head>

      <section id="lokasyon" className="pt-32 pb-32 bg-spa-darker border-t border-spa-deep/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up pr-0 lg:pr-12">
              <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">Lokasyon</span>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Sürmeli Spa Adana —<br /><span className="italic text-spa-accent-light">Lokasyon ve Ulaşım</span></h1>
              <p className="text-spa-muted text-lg mb-12 font-light leading-relaxed">
                Adana Seyhan'da, Kuruköprü semtinde; şehir merkezine yürüme mesafesinde bulunan salonumuzda profesyonel masaj ve spa hizmetleriyle sizi bekliyoruz.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-spa-accent-light">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-spa-accent-light mb-2">Adres</h3>
                    <p className="text-spa-cream font-light">Kuruköprü, Sefa Özler Cd. No:49, 01060, 01130 Seyhan / Adana</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-spa-accent-light">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-spa-accent-light mb-2">Çalışma Saatleri</h3>
                    <p className="text-spa-cream font-light">Her gün · 12:00 — 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-spa-accent-light">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-spa-accent-light mb-2">Telefon</h3>
                    <a onClick={handlePhoneClick} href="tel:+905305153770" className="text-spa-cream font-light hover:text-spa-accent transition-colors">+90 530 515 37 70</a>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a onClick={handlePhoneClick} href="tel:+905305153770" className="bg-spa-deep hover:bg-spa-accent text-white px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 text-center flex-1">Hemen Ara</a>
                <a
                  onClick={handleWhatsappClick} href="https://wa.me/905305153770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-spa-accent text-spa-accent-light hover:bg-spa-accent/10 px-8 py-4 text-sm tracking-widest uppercase rounded-sm transition-all duration-300 text-center flex-1 flex justify-center items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="fade-up rounded-md overflow-hidden shadow-[0_20px_50px_rgba(124,58,237,0.15)] border border-spa-accent/20 h-[600px] grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166!2d35.3194413!3d36.9893876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f309433923d%3A0x5d2b1ec0c03891a!2sADANA+MASAJ+%2FS%C3%BCrmeli+Spa!5e0!3m2!1str!2str!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sürmeli Spa Google Harita Lokasyonu"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
