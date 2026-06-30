import Head from 'next/head'
import PageLayout from '../components/PageLayout'

export default function Iletisim() {
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
        <title>İletişim | Sürmeli Spa Adana Masaj Salonu</title>
        <meta name="description" content="Sürmeli Spa Adana iletişim bilgileri. Telefon, WhatsApp ve adres bilgileri ile bize ulaşın. Randevu almak için hemen arayın!" />
        <meta name="keywords" content="Sürmeli Spa iletişim, Adana masaj salonu telefon, Sürmeli Spa WhatsApp, Adana spa randevu" />
        <link rel="canonical" href="https://www.surmelispa.com/iletisim" />
        <meta property="og:title" content="İletişim | Sürmeli Spa Adana Masaj Salonu" />
        <meta property="og:description" content="Sürmeli Spa Adana iletişim bilgileri. Randevu almak için hemen arayın!" />
        <meta property="og:url" content="https://www.surmelispa.com/iletisim" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="pt-32 pb-32 bg-spa-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-up">
            <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">İletişim</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Sürmeli Spa <span className="italic text-spa-accent-light">İletişim Bilgileri</span></h1>
            <p className="text-spa-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Randevu almak, bilgi edinmek veya sorularınızı iletmek için aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Telefon Kartı */}
            <div className="bg-spa-darker/60 backdrop-blur-md border border-spa-accent/10 rounded-xl p-8 shadow-xl text-center fade-up">
              <div className="w-16 h-16 bg-spa-deep rounded-full flex items-center justify-center mx-auto mb-6 border border-spa-accent/30">
                <svg className="w-7 h-7 text-spa-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xs tracking-widest uppercase text-spa-accent-light mb-3">Telefon</h3>
              <a onClick={handlePhoneClick} href="tel:+905305153770" className="text-spa-cream text-xl font-serif hover:text-spa-accent transition-colors block mb-4">+90 530 515 37 70</a>
              <a onClick={handlePhoneClick} href="tel:+905305153770" className="bg-spa-deep hover:bg-spa-accent text-white px-6 py-3 text-xs tracking-widest uppercase rounded-full transition-all duration-300 border border-spa-accent/30 hover:border-transparent inline-block">Hemen Ara</a>
            </div>

            {/* WhatsApp Kartı */}
            <div className="bg-spa-darker/60 backdrop-blur-md border border-spa-accent/10 rounded-xl p-8 shadow-xl text-center fade-up">
              <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#25D366]/30">
                <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xs tracking-widest uppercase text-spa-accent-light mb-3">WhatsApp</h3>
              <p className="text-spa-cream text-xl font-serif mb-4">0530 515 37 70</p>
              <a
                onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba,%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 text-xs tracking-widest uppercase rounded-full transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Yaz
              </a>
            </div>

            {/* Adres Kartı */}
            <div className="bg-spa-darker/60 backdrop-blur-md border border-spa-accent/10 rounded-xl p-8 shadow-xl text-center fade-up">
              <div className="w-16 h-16 bg-spa-deep rounded-full flex items-center justify-center mx-auto mb-6 border border-spa-accent/30">
                <svg className="w-7 h-7 text-spa-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xs tracking-widest uppercase text-spa-accent-light mb-3">Adres</h3>
              <p className="text-spa-cream font-light mb-2">Kuruköprü, Sefa Özler Cd. No:49</p>
              <p className="text-spa-muted text-sm font-light mb-4">01060, 01130 Seyhan/Adana</p>
              <a
                href="https://maps.google.com/?q=Sürmeli+Spa+Adana"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-spa-accent text-spa-accent-light hover:bg-spa-accent/10 px-6 py-3 text-xs tracking-widest uppercase rounded-full transition-all duration-300 inline-block"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div className="bg-spa-darker/60 backdrop-blur-md border border-spa-accent/10 rounded-xl p-8 shadow-xl max-w-md mx-auto text-center fade-up">
            <div className="w-16 h-16 bg-spa-deep rounded-full flex items-center justify-center mx-auto mb-6 border border-spa-accent/30">
              <svg className="w-7 h-7 text-spa-accent-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xs tracking-widest uppercase text-spa-accent-light mb-3">Çalışma Saatleri</h3>
            <p className="text-spa-cream text-xl font-serif">Her gün · 12:00 — 23:00</p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
