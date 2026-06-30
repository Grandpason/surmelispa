import Head from 'next/head'
import PageLayout from '../components/PageLayout'

export default function Fiyatlar() {
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
        <title>Adana Masaj Fiyatları 2026 | Sürmeli Spa</title>
        <meta name="description" content="Sürmeli Spa Adana masaj fiyatları 2026. Klasik masaj, medical masaj, aroma terapi, VIP paketler ve kampanyalı fiyat listesi." />
        <meta name="keywords" content="Adana masaj fiyatları, masaj fiyat listesi, VIP masaj paketi, Sürmeli Spa fiyatlar" />
        <link rel="canonical" href="https://www.surmelispa.com/fiyatlar" />
        <meta property="og:title" content="Adana Masaj Fiyatları 2026 | Sürmeli Spa" />
        <meta property="og:description" content="Sürmeli Spa Adana masaj fiyatları 2026. Kampanyalı fiyat listesi." />
        <meta property="og:url" content="https://www.surmelispa.com/fiyatlar" />
        <meta property="og:type" content="website" />
      </Head>

      <section id="fiyatlar" className="pt-32 pb-32 bg-spa-dark border-t border-spa-deep/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-up">
            <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">Fiyat Listesi</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Adana Masaj Fiyatları ve <span className="italic text-spa-accent-light">VIP Spa Paketleri</span></h1>
            <div className="inline-flex items-center gap-3 bg-spa-deep/60 border border-spa-accent/30 rounded-full px-6 py-2.5 mt-4 text-spa-cream text-sm md:text-base font-semibold shadow-lg">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-spa-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-spa-accent-light"></span>
              </span>
              🎁 Kampanya: Tüm 45 Dk Masajlarımıza +15 Dk Hamam Kese Köpük Dahildir!
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Standart Masajlar Listesi */}
            <div className="lg:col-span-2 space-y-6 fade-up">
              <div className="bg-spa-darker/60 backdrop-blur-md border border-spa-accent/10 rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-serif text-white mb-8 border-b border-spa-accent/10 pb-4 flex items-center justify-between">
                  <span>Terapötik Masajlar</span>
                  <span className="text-xs text-spa-muted font-sans tracking-wider uppercase">Süre: 45 Dk</span>
                </h3>
                <div className="divide-y divide-spa-accent/5">
                  {/* Klasik Masaj */}
                  <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">💆♀️ Klasik Masaj</h4>
                      <p className="text-xs text-spa-muted mt-1">+15 dk Hamam Kese Köpük Hediye</p>
                    </div>
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span className="text-xl font-bold text-spa-accent-light">2500 ₺</span>
                      <a
                        onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba,%20Klasik%20Masaj%20için%20randevu%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-spa-deep hover:bg-spa-accent text-white border border-spa-accent/30 hover:border-transparent px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-medium whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        Randevu Al
                      </a>
                    </div>
                  </div>
                  {/* Medical Masaj */}
                  <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">🧖♂️ Medical Masaj</h4>
                      <p className="text-xs text-spa-muted mt-1">+15 dk Hamam Kese Köpük Hediye</p>
                    </div>
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span className="text-xl font-bold text-spa-accent-light">3200 ₺</span>
                      <a
                        onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba,%20Medical%20Masaj%20için%20randevu%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-spa-deep hover:bg-spa-accent text-white border border-spa-accent/30 hover:border-transparent px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-medium whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        Randevu Al
                      </a>
                    </div>
                  </div>
                  {/* Aroma Terapi Masajı */}
                  <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">🌸 Aroma Terapi Masajı</h4>
                      <p className="text-xs text-spa-muted mt-1">+15 dk Hamam Kese Köpük Hediye</p>
                    </div>
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span className="text-xl font-bold text-spa-accent-light">3000 ₺</span>
                      <a
                        onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba,%20Aroma%20Terapi%20Masajı%20için%20randevu%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-spa-deep hover:bg-spa-accent text-white border border-spa-accent/30 hover:border-transparent px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-medium whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        Randevu Al
                      </a>
                    </div>
                  </div>
                  {/* Mix Masajı */}
                  <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">💫 Mix Masajı</h4>
                      <p className="text-xs text-spa-muted mt-1">+15 dk Hamam Kese Köpük Hediye</p>
                    </div>
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span className="text-xl font-bold text-spa-accent-light">4500 ₺</span>
                      <a
                        onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba,%20Mix%20Masajı%20için%20randevu%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-spa-deep hover:bg-spa-accent text-white border border-spa-accent/30 hover:border-transparent px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-medium whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        Randevu Al
                      </a>
                    </div>
                  </div>
                  {/* Bali Masajı */}
                  <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">🌺 Geleneksel Bali Masajı</h4>
                      <p className="text-xs text-spa-muted mt-1">+15 dk Hamam Kese Köpük Hediye</p>
                    </div>
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span className="text-xl font-bold text-spa-accent-light">3500 ₺</span>
                      <a
                        onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba,%20Geleneksel%20Bali%20Masajı%20için%20randevu%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-spa-deep hover:bg-spa-accent text-white border border-spa-accent/30 hover:border-transparent px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-medium whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        Randevu Al
                      </a>
                    </div>
                  </div>
                  {/* Mandara Sultan Masajı */}
                  <div className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                    <div>
                      <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">👑 Mandara Sultan Masajı</h4>
                      <p className="text-xs text-spa-muted mt-1">+15 dk Hamam Kese Köpük Hediye</p>
                    </div>
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span className="text-xl font-bold text-spa-accent-light">5000 ₺</span>
                      <a
                        onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba,%20Mandara%20Sultan%20Masajı%20için%20randevu%20almak%20istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-spa-deep hover:bg-spa-accent text-white border border-spa-accent/30 hover:border-transparent px-5 py-2 text-xs tracking-wider uppercase rounded-full transition-all duration-300 font-medium whitespace-nowrap shadow-md hover:shadow-lg"
                      >
                        Randevu Al
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Paketler */}
            <div className="space-y-6 fade-up">
              <div className="bg-gradient-to-br from-spa-deep to-spa-darker border-2 border-spa-accent/30 rounded-xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-spa-accent/10 rounded-full blur-2xl"></div>
                <span className="bg-spa-accent text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full absolute top-6 right-6">EN POPÜLER</span>

                <h3 className="text-2xl font-serif text-white mb-2">VIP Masaj Paketimiz</h3>
                <p className="text-spa-accent-light font-medium text-3xl mb-6">7500 ₺</p>

                <ul className="space-y-4 mb-8 text-spa-cream/90 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-spa-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    60 Dk Profesyonel Masaj
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-spa-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    30 Dk Jakuzi Keyfi
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-spa-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Kese & Köpük Terapisi
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-spa-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Sıcak ve Soğuk İkramlar
                  </li>
                </ul>

                <a
                  onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba!%20VIP%20Masaj%20Paketi%20hakkında%20bilgi%20alabilir%20miyim?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-spa-accent hover:bg-spa-accent-light text-white font-medium py-3 rounded-lg transition-colors text-sm tracking-wider uppercase"
                >
                  WhatsApp'tan Randevu Al
                </a>
              </div>

              <div className="bg-spa-darker/60 backdrop-blur-md border border-spa-accent/10 rounded-xl p-8 shadow-xl">
                <h3 className="text-xl font-serif text-white mb-2">VIP Masaj + Köpük Masajı</h3>
                <p className="text-spa-accent-light font-medium text-2xl mb-4">10000 ₺</p>
                <p className="text-xs text-spa-muted leading-relaxed mb-6">VIP paket içeriğine ek olarak, geleneksel Türk hamamında köpük masajı seansını da içeren en kapsamlı deneyimimiz.</p>
                <a
                  onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba!%20VIP%20masaj%20paketi%20%2B%20köpük%20masajı%20paketi%20hakkında%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-spa-accent text-spa-accent-light hover:bg-spa-accent/10 font-medium py-2.5 rounded-lg transition-colors text-xs tracking-wider uppercase"
                >
                  Detaylı Bilgi Al
                </a>
              </div>
            </div>
          </div>

          {/* Bilgi Notu */}
          <div className="mt-16 bg-spa-deep/20 border border-spa-accent/15 rounded-lg p-6 text-center max-w-3xl mx-auto fade-up">
            <p className="text-spa-cream text-sm md:text-base font-light leading-relaxed">
              ✨ <span className="font-medium text-spa-accent-light">Önemli Bilgilendirme:</span> Tüm masajlarımız profesyonel bayan masöz arkadaşlarımız tarafından uygulanmaktadır. Hijyenik ve huzurlu bir ortamda hizmet almanız bizim için en büyük önceliktir.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
