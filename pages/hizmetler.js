import Head from 'next/head'
import PageLayout from '../components/PageLayout'

export default function Hizmetler() {
  return (
    <PageLayout>
      <Head>
        <title>Adana Masaj Hizmetleri | Sürmeli Spa</title>
        <meta name="description" content="Sürmeli Spa'da sunulan profesyonel masaj hizmetleri: Klasik Masaj, Medical Masaj, Aroma Terapi, Bali Masajı ve daha fazlası. Adana Seyhan'da kaliteli spa deneyimi." />
        <meta name="keywords" content="Adana masaj hizmetleri, klasik masaj, medical masaj, aroma terapi, bali masajı, Sürmeli Spa hizmetler" />
        <link rel="canonical" href="https://www.surmelispa.com/hizmetler" />
        <meta property="og:title" content="Adana Masaj Hizmetleri | Sürmeli Spa" />
        <meta property="og:description" content="Sürmeli Spa'da sunulan profesyonel masaj hizmetleri. Adana Seyhan'da kaliteli spa deneyimi." />
        <meta property="og:url" content="https://www.surmelispa.com/hizmetler" />
        <meta property="og:type" content="website" />
      </Head>

      <section id="hizmetler" className="pt-32 pb-32 bg-spa-dark">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 fade-up">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Adana Masaj Salonumuzda Sunulan <span className="italic text-spa-accent-light">Hizmetler</span></h1>
            </div>
            <p className="text-spa-muted text-lg max-w-md mt-6 md:mt-0 font-light">
              Geleneksel Türk hamamından Uzakdoğu tekniklerine; bedeninizi ve ruhunuzu yenileyecek titizlikle seçilmiş bir menü sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Klasik Masaj */}
            <div className="group cursor-pointer fade-up">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6 service-img-wrapper">
                <img
                  src="/assets/images/isvec-masaji.webp"
                  alt="Klasik Masaj"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3 border-b border-spa-accent/20 pb-3">
                <h3 className="text-2xl font-serif text-white group-hover:text-spa-accent-light transition-colors">Klasik Masaj</h3>
                <span className="text-spa-accent-light text-xs tracking-widest">45 DK</span>
              </div>
              <p className="text-spa-muted font-light text-sm leading-relaxed mb-2">Klasik masaj tekniği ile kas gerginliğini çözen, kan dolaşımını hızlandıran rahatlatıcı dokunuş.</p>
              <span className="inline-block text-xs bg-spa-deep text-spa-accent-light px-2 py-1 rounded font-medium border border-spa-accent/20">+15 Dk Hamam, Kese & Köpük Hediye!</span>
            </div>

            {/* Medical Masaj */}
            <div className="group cursor-pointer fade-up">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6 service-img-wrapper">
                <img
                  src="/assets/images/sicak-tas.webp"
                  alt="Medical Masaj"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3 border-b border-spa-accent/20 pb-3">
                <h3 className="text-2xl font-serif text-white group-hover:text-spa-accent-light transition-colors">Medical Masaj</h3>
                <span className="text-spa-accent-light text-xs tracking-widest">45 DK</span>
              </div>
              <p className="text-spa-muted font-light text-sm leading-relaxed mb-2">Kas ağrılarını ve vücut yorgunluğunu dindiren, tıbbi anatomi temelli derin doku masajı.</p>
              <span className="inline-block text-xs bg-spa-deep text-spa-accent-light px-2 py-1 rounded font-medium border border-spa-accent/20">+15 Dk Hamam, Kese & Köpük Hediye!</span>
            </div>

            {/* Aroma Terapi Masajı */}
            <div className="group cursor-pointer fade-up">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6 service-img-wrapper">
                <img
                  src="/assets/images/aromaterapi.webp"
                  alt="Aroma Terapi Masajı"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3 border-b border-spa-accent/20 pb-3">
                <h3 className="text-2xl font-serif text-white group-hover:text-spa-accent-light transition-colors">Aroma Terapi Masajı</h3>
                <span className="text-spa-accent-light text-xs tracking-widest">45 DK</span>
              </div>
              <p className="text-spa-muted font-light text-sm leading-relaxed mb-2">Bitkisel öz yağlar eşliğinde, zihinsel sakinlik ve bedensel hafiflik kazandıran terapi.</p>
              <span className="inline-block text-xs bg-spa-deep text-spa-accent-light px-2 py-1 rounded font-medium border border-spa-accent/20">+15 Dk Hamam, Kese & Köpük Hediye!</span>
            </div>

            {/* Bali Masajı */}
            <div className="group cursor-pointer fade-up">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm mb-6 service-img-wrapper">
                <img
                  src="/assets/images/turk-hamami.webp"
                  alt="Geleneksel Bali Masajı"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3 border-b border-spa-accent/20 pb-3">
                <h3 className="text-2xl font-serif text-white group-hover:text-spa-accent-light transition-colors">Bali Masajı</h3>
                <span className="text-spa-accent-light text-xs tracking-widest">45 DK</span>
              </div>
              <p className="text-spa-muted font-light text-sm leading-relaxed mb-2">Uzak Doğu'nun mistik dokunuşlarıyla enerji noktalarını dengeleyen canlandırıcı masaj.</p>
              <span className="inline-block text-xs bg-spa-deep text-spa-accent-light px-2 py-1 rounded font-medium border border-spa-accent/20">+15 Dk Hamam, Kese & Köpük Hediye!</span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
