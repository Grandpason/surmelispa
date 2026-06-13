import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

export default function AdanaMasaj() {

  
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

  // Game States
  const [clicks, setClicks] = useState(0)
  const [showReward, setShowReward] = useState(false)
  const [hintText, setHintText] = useState('Başlamak için mistik taşa dokunun...')
  const [rippleActive, setRippleActive] = useState(false)
  const [stoneAnim, setStoneAnim] = useState('')
  const [copyStatus, setCopyStatus] = useState('Kodu Kopyala')

  const audioCtxRef = useRef(null)
  const maxClicks = 20

  // Handle Navbar Scroll Background Change
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

  // Fade-up animation Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Play peaceful sound (Audio Synthesis)
  const playChime = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) return
      
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass()
      }
      
      const audioCtx = audioCtxRef.current
      if (audioCtx.state === 'suspended') {
        audioCtx.resume()
      }

      const freqs = [523.25, 659.25, 783.99, 987.77] // C5, E5, G5, B5 soft chord
      const now = audioCtx.currentTime

      freqs.forEach((freq, index) => {
        const osc = audioCtx.createOscillator()
        const gainNode = audioCtx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now)

        // Soothing ambient bell envelope
        gainNode.gain.setValueAtTime(0, now)
        gainNode.gain.linearRampToValueAtTime(0.08 / freqs.length, now + 0.05 + index * 0.02)
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.5 + index * 0.1)

        osc.connect(gainNode)
        gainNode.connect(audioCtx.destination)

        osc.start(now)
        osc.stop(now + 2.0)
      })
    } catch (e) {
      console.log('Audio feedback error or policy block:', e)
    }
  }

  // Handle Spa Stone Click
  const handleStoneClick = (e) => {
    if (e) {
      e.preventDefault()
    }
    if (clicks >= maxClicks) return

    const newClicks = clicks + 1
    setClicks(newClicks)
    playChime()

    // Trigger Ripple Effect
    setRippleActive(false)
    // Small timeout to allow state update to reset animation
    setTimeout(() => {
      setRippleActive(true)
    }, 10)

    // Alternate pulse and shake animation
    if (newClicks % 2 === 0) {
      setStoneAnim('animate-pulse-stone')
    } else {
      setStoneAnim('animate-shake-stone')
    }

    // Set interactive hint messages
    if (newClicks < 5) {
      setHintText('Dokunmaya devam edin, zihniniz arınıyor...')
    } else if (newClicks < 12) {
      setHintText('Derin bir nefes alın, omuzlarınız gevşiyor...')
    } else if (newClicks < 18) {
      setHintText('Negatif enerjiden tamamen uzaklaşıyorsunuz...')
    } else {
      setHintText('Son birkaç adım... Huzur çok yakın.')
    }

    if (newClicks === maxClicks) {
      setTimeout(() => {
        setShowReward(true)
      }, 500)
    }
  }

  // Reset Game state
  const resetGame = () => {
    setClicks(0)
    setHintText('Başlamak için mistik taşa dokunun...')
    setShowReward(false)
    setRippleActive(false)
    setStoneAnim('')
    setCopyStatus('Kodu Kopyala')
  }

  // Copy Promo Code to Clipboard
  const handleCopyCode = () => {
    const codeText = 'SURMELI10'
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText)
        .then(() => {
          setCopyStatus('Kopyalandı! ✓')
        })
        .catch(() => {
          fallbackCopy(codeText)
        })
    } else {
      fallbackCopy(codeText)
    }
  }

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      setCopyStatus('Kopyalandı! ✓')
    } catch (err) {
      console.error('Fallback copy failed', err)
    }
    document.body.removeChild(textArea)
  }

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
    <>
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

      <div className="bg-spa-dark text-spa-cream min-h-screen font-sans antialiased">
        {/* Navbar */}
        <header
          id="navbar"
          className={`fixed w-full z-50 transition-all duration-500 border-b border-spa-accent/15 backdrop-blur-md ${
            isScrolled ? 'nav-scrolled' : 'bg-spa-dark/40'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
              <a href="#" className="flex items-center gap-4">
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
                <a href="#hizmetler" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Hizmetler</a>
                <a href="#fiyatlar" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Fiyatlar</a>
                <a href="#oyun" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300 text-spa-accent-light">İndirim Kazan</a>
                <a href="#lokasyon" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Lokasyon</a>
                <a href="#iletisim" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">İletişim</a>
                <a href="/blog/adana-masajin-faydalari" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Blog</a>
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
              <a href="#hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Hizmetler</a>
              <a href="#fiyatlar" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Fiyatlar</a>
              <a href="#oyun" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors text-spa-accent-light">İndirim Kazan</a>
              <a href="#lokasyon" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Lokasyon</a>
              <a href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">İletişim</a>
              <a href="/blog/adana-masajin-faydalari" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Blog</a>
              <a onClick={handlePhoneClick} href="tel:+905305153770" className="text-spa-accent-light text-sm tracking-widest mt-4">0530 515 37 70</a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 hero-bg bg-cover bg-center bg-no-repeat opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-spa-darker/80 via-spa-deep/60 to-spa-dark"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 mt-20">
            <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block fade-up">Adana'nın Huzur Adresi</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-serif fade-up drop-shadow-2xl">
              Bedene huzur,<br /><span className="text-spa-accent-light italic">ruha sükûnet.</span>
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
              <a
                href="#hizmetler"
                className="bg-transparent hover:bg-white/10 text-white px-8 py-4 text-sm tracking-widest uppercase rounded-full transition-all duration-300 border border-white/30"
              >
                Hizmetlerimiz
              </a>
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section id="hizmetler" className="py-32 bg-spa-dark">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 fade-up">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Her dokunuş, <span className="italic text-spa-accent-light">bir sanat.</span></h2>
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

        {/* Fiyatlar */}
        <section id="fiyatlar" className="py-32 bg-spa-dark border-t border-spa-deep/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 fade-up">
              <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">Fiyat Listesi</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Şımartıcı Deneyimler & <span className="italic text-spa-accent-light">Fiyatlar</span></h2>
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
                        <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">💆‍♀️ Klasik Masaj</h4>
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
                        <h4 className="text-lg font-semibold text-spa-cream group-hover:text-spa-accent-light transition-colors">🧖‍♂️ Medical Masaj</h4>
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
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      60 Dk Profesyonel Masaj
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-spa-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      30 Dk Jakuzi Keyfi
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-spa-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      Kese & Köpük Terapisi
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-spa-accent-light shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
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

        {/* Oyun Oyna & İndirim Kazan */}
        <section id="oyun" className="py-32 bg-spa-dark border-t border-spa-deep/30 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">Etkileşimli Rahatlama</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Oyun Oyna & <span className="italic text-spa-accent-light">İndirim Kazan</span></h2>
            <p className="text-spa-muted text-sm md:text-base max-w-xl mx-auto mb-12 font-light">
              Ekranda parıldayan mistik spa taşına dokunarak negatif enerjiden arının. Her dokunuşta derinleşen meditasyon tınıları eşliğinde 20 adıma ulaştığınızda özel indirim kodunuz hazır olacak.
            </p>

            {/* Oyun Alanı */}
            <div className="relative max-w-md mx-auto bg-spa-darker/50 border border-spa-accent/15 rounded-2xl p-8 shadow-xl backdrop-blur-sm min-h-[350px] flex flex-col justify-between items-center overflow-hidden">
              {/* Adım Sayacı */}
              <div id="game-status" className="w-full flex justify-between items-center text-xs tracking-wider uppercase text-spa-muted font-medium mb-4">
                <span>Rahatlama Seviyesi</span>
                <span id="click-count">{clicks} / {maxClicks}</span>
              </div>

              {/* İlerleme Çubuğu */}
              <div className="w-full h-1 bg-spa-deep rounded-full overflow-hidden mb-8">
                <div
                  id="progress-bar"
                  className="h-full bg-gradient-to-r from-spa-accent to-spa-accent-light transition-all duration-300"
                  style={{ width: `${(clicks / maxClicks) * 100}%` }}
                ></div>
              </div>

              {/* İnteraktif Spa Taşı */}
              <div id="game-stage" className="flex-1 flex items-center justify-center py-6 w-full">
                <button
                  id="spa-stone"
                  aria-label="Spa Taşına Dokunun"
                  onPointerDown={handleStoneClick}
                  className={`relative w-36 h-36 rounded-full bg-gradient-to-tr from-[#1E1048] via-[#3B1C80] to-[#7C3AED] shadow-[0_0_50px_rgba(124,58,237,0.3)] hover:shadow-[0_0_60px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center justify-center cursor-pointer outline-none select-none active:scale-95 touch-none ${stoneAnim}`}
                >
                  {/* Ripple / Yayılma Efekti Halkası */}
                  <span
                    className={`absolute inset-0 rounded-full border border-spa-accent-light/40 ${
                      rippleActive ? 'animate-ping opacity-100' : 'opacity-0'
                    }`}
                    id="stone-ripple"
                  ></span>

                  {/* Ortadaki Mistik Sembol */}
                  <svg className="w-12 h-12 text-spa-cream/80 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </button>
              </div>

              {/* Teşvik Mesajı */}
              <p id="game-hint" className="text-xs text-spa-muted mt-6 font-light italic transition-opacity duration-300">
                {hintText}
              </p>

              {/* Kazanılan Ödül Kartı */}
              <div
                id="reward-card"
                className={`absolute inset-0 bg-spa-darker/95 backdrop-blur-md flex flex-col justify-center items-center p-6 text-center transition-all duration-500 z-10 ${
                  showReward ? 'opacity-100 scale-100' : 'opacity-0 pointer-events-none scale-95'
                }`}
              >
                <div className="w-16 h-16 bg-spa-accent/20 rounded-full flex items-center justify-center text-spa-accent-light mb-4 border border-spa-accent/30 animate-bounce">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Tebrikler, Zihniniz Arındı!</h3>
                <p className="text-xs text-spa-muted mb-6 font-light max-w-xs">20 meditasyon adımını tamamlayarak ilk ziyaretinize özel %10 indirim kazandınız.</p>

                {/* Kod Kartı */}
                <div className="bg-spa-dark border border-spa-accent/30 rounded-lg p-4 w-full mb-6 flex justify-between items-center shadow-inner">
                  <div className="text-left font-sans">
                    <span className="text-[10px] tracking-widest uppercase text-spa-muted block mb-1">İndirim Kodu</span>
                    <span className="text-lg font-mono font-bold tracking-wider text-spa-accent-light select-all">SURMELI10</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className={`text-xs font-semibold px-4 py-2 rounded-md transition-colors focus:outline-none ${
                      copyStatus.includes('✓')
                        ? 'bg-emerald-600 text-white'
                        : 'bg-spa-deep hover:bg-spa-accent text-spa-cream border border-spa-accent/30'
                    }`}
                  >
                    {copyStatus}
                  </button>
                </div>

                {/* Aksiyon Butonları */}
                <div className="flex gap-3 w-full">
                  <button
                    onClick={resetGame}
                    className="flex-1 border border-spa-accent/30 hover:bg-spa-accent/10 text-spa-cream text-xs tracking-wider uppercase font-semibold py-3 rounded-lg transition-colors"
                  >
                    Yeniden Oyna
                  </button>
                  <a
                    onClick={handleWhatsappClick} href="https://wa.me/905305153770?text=Merhaba!%20Oyun%20Oyna%20%26%20%C4%B0ndirim%20Kazan%20oyunundan%20%2510%20indirim%20kazand%C4%B1m.%20SURMELI10%20kodu%20ile%20randevu%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-spa-accent hover:bg-spa-accent-light text-white text-xs tracking-wider uppercase font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Randevu Al
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lokasyon */}
        <section id="lokasyon" className="py-32 bg-spa-darker border-t border-spa-deep/30">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-up pr-0 lg:pr-12">
                <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">Lokasyon</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">Şehrin kalbinde,<br /><span className="italic text-spa-accent-light">huzurun adresi.</span></h2>
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

        {/* Footer */}
        <footer id="iletisim" className="bg-spa-darker py-16 border-t border-spa-accent/10">
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
