import Head from 'next/head'
import { useState, useEffect } from 'react'
import fs from 'fs'
import path from 'path'

export default function BlogPost({ post }) {

  
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle Navbar Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen bg-spa-dark flex items-center justify-center text-white">
        <p>Yazı bulunamadı.</p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{post.title} | Sürmeli Spa Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.surmelispa.com/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${post.title} | Sürmeli Spa Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://www.surmelispa.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Head>

      <div className="bg-spa-dark text-spa-cream min-h-screen font-sans antialiased">
        {/* Navbar */}
        <header
          className={`fixed w-full z-50 transition-all duration-500 border-b border-spa-accent/15 backdrop-blur-md ${
            isScrolled ? 'nav-scrolled' : 'bg-spa-dark/40'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              <a href="/adana-masaj" className="flex items-center gap-4">
                <img
                  src="/assets/images/Logo.webp"
                  alt="Sürmeli Spa Logo"
                  className="w-14 h-14 rounded-md object-contain border border-spa-accent/30 bg-white p-1"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-[.15em] text-spa-accent-light uppercase font-serif leading-none">Sürmeli</span>
                  <span className="text-xs tracking-[.3em] text-spa-muted uppercase mt-1">Spa & Masaj</span>
                </div>
              </a>
              <nav className="hidden md:flex items-center space-x-10">
                <a href="/adana-masaj#hizmetler" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Hizmetler</a>
                <a href="/adana-masaj#fiyatlar" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Fiyatlar</a>
                <a href="/adana-masaj#oyun" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300 text-spa-accent-light">İndirim Kazan</a>
                <a href="/adana-masaj#lokasyon" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Lokasyon</a>
                <a href="/adana-masaj#iletisim" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">İletişim</a>
                <a href="/adana-masaj" className="text-sm tracking-widest uppercase font-semibold text-spa-accent-light hover:text-white transition-colors duration-300">Geri Dön</a>
              </nav>
              <div className="hidden md:flex items-center gap-6">
                <a
                  onClick={handlePhoneClick} href="tel:+905305153770"
                  className="flex items-center gap-2 text-spa-accent-light hover:text-white transition-colors border border-spa-accent/30 rounded-full px-6 py-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm tracking-widest">0530 515 37 70</span>
                </a>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Menü"
              >
                <span className={`block w-7 h-[2px] bg-spa-accent-light transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-7 h-[2px] bg-spa-accent-light transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-7 h-[2px] bg-spa-accent-light transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div className={`md:hidden bg-spa-darker/98 backdrop-blur-xl border-t border-spa-accent/10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-6 py-8 flex flex-col gap-6">
              <a href="/adana-masaj#hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Hizmetler</a>
              <a href="/adana-masaj#fiyatlar" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Fiyatlar</a>
              <a href="/adana-masaj#oyun" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors text-spa-accent-light">İndirim Kazan</a>
              <a href="/adana-masaj#lokasyon" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Lokasyon</a>
              <a href="/adana-masaj#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">İletişim</a>
              <a href="/adana-masaj" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors text-spa-accent-light">Geri Dön</a>
              <a onClick={handlePhoneClick} href="tel:+905305153770" className="text-spa-accent-light text-sm tracking-widest mt-4">0530 515 37 70</a>
            </div>
          </div>
        </header>

        {/* Blog Hero */}
        <section className="relative pt-44 pb-20 bg-gradient-to-b from-spa-darker via-spa-deep/20 to-spa-dark overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-4 text-spa-accent-light text-xs tracking-[.25em] uppercase font-semibold mb-6">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-spa-accent-light/45"></span>
              <span>{post.readTime}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-spa-accent-light/45"></span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-serif drop-shadow-2xl">
              {post.title}
            </h1>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="pb-32 bg-spa-dark">
          <div className="max-w-4xl mx-auto px-4">
            {/* Main Image */}
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-spa-accent/15 mb-16 shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Body */}
            <article className="prose prose-invert prose-spa max-w-none text-spa-cream/80 leading-relaxed font-light text-lg mb-20">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Call To Action Box (Conversion Box) */}
            <div className="bg-gradient-to-br from-spa-deep to-spa-darker border-2 border-spa-accent/30 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-44 h-44 bg-spa-accent/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <span className="bg-spa-accent text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full mb-4 inline-block">Kampanyayı Kaçırmayın</span>
                  <h3 className="text-3xl font-serif text-white mb-2">Hemen Randevunuzu Oluşturun</h3>
                  <p className="text-spa-muted text-sm font-light max-w-md">Tüm 45 Dk masaj seanslarımızda hamam, kese ve köpük hediye! Kendinizi profesyonel bayan masözlerimizin ellerine bırakın.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 justify-center">
                  <a
                    onClick={handlePhoneClick} href="tel:+905305153770"
                    className="bg-transparent hover:bg-white/10 text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all duration-300 border border-white/30 text-center"
                  >
                    Hemen Ara
                  </a>
                  <a
                    onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba!%20Blog%20yaz%C4%B1n%C4%B1z%C4%B1%20okudum.%20Masaj%20seans%C4%B1%20i%C3%A7in%20randevu%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-spa-accent hover:bg-spa-accent-light text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg text-center"
                  >
                    WhatsApp Randevu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-spa-darker py-16 border-t border-spa-accent/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-spa-accent-light uppercase tracking-[.2em] font-serif mb-4">Sürmeli Spa</h2>
            <p className="text-spa-muted mb-8 text-sm font-light">Kuruköprü, Sefa Özler Cd. No:49, 01060, 01130 Seyhan/Adana</p>
            <a onClick={handlePhoneClick} href="tel:+905305153770" className="text-spa-cream text-3xl font-serif hover:text-spa-accent transition-colors block mb-12">+90 530 515 37 70</a>
            <div className="pt-8 border-t border-white/5 text-sm text-spa-muted/60 tracking-widest uppercase font-light">
              &copy; 2026 Sürmeli Spa. Tüm hakları saklıdır.
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a
            onClick={handleWhatsappClick} href="https://wa.me/905305153770"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            aria-label="WhatsApp ile İletişime Geç"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            onClick={handlePhoneClick} href="tel:+905305153770"
            className="w-14 h-14 bg-spa-deep border border-spa-accent/50 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-spa-accent transition-all"
            aria-label="Hemen Ara"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

// SSG getStaticPaths
export async function getStaticPaths() {
  const postsFilePath = path.join(process.cwd(), 'data', 'posts.json')
  const fileContents = fs.readFileSync(postsFilePath, 'utf8')
  const posts = JSON.parse(fileContents)

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}

// SSG getStaticProps
export async function getStaticProps({ params }) {
  const postsFilePath = path.join(process.cwd(), 'data', 'posts.json')
  const fileContents = fs.readFileSync(postsFilePath, 'utf8')
  const posts = JSON.parse(fileContents)

  const post = posts.find((p) => p.slug === params.slug) || null

  return {
    props: {
      post,
    },
  }
}
