import Head from 'next/head'
import { useState, useRef } from 'react'
import PageLayout from '../components/PageLayout'

export default function IndirimKazan() {
  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18196965496/lGC5CJuxib4cEPjQ_uRD'
      });
    }
  };

  // Game States
  const [clicks, setClicks] = useState(0)
  const [showReward, setShowReward] = useState(false)
  const [hintText, setHintText] = useState('Başlamak için mistik taşa dokunun...')
  const [rippleActive, setRippleActive] = useState(false)
  const [stoneAnim, setStoneAnim] = useState('')
  const [copyStatus, setCopyStatus] = useState('Kodu Kopyala')

  const audioCtxRef = useRef(null)
  const maxClicks = 20

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

  return (
    <PageLayout>
      <Head>
        <title>Oyna & İndirim Kazan | Sürmeli Spa Adana</title>
        <meta name="description" content="Sürmeli Spa'da interaktif oyun oynayarak %10 indirim kazanın! Mistik spa taşına dokunarak rahatla ve özel indirim kodunu kazan." />
        <meta name="keywords" content="Sürmeli Spa indirim, masaj indirimi, spa kampanya, Adana masaj indirim kodu" />
        <link rel="canonical" href="https://www.surmelispa.com/indirim-kazan" />
        <meta property="og:title" content="Oyna & İndirim Kazan | Sürmeli Spa Adana" />
        <meta property="og:description" content="Sürmeli Spa'da interaktif oyun oynayarak %10 indirim kazanın!" />
        <meta property="og:url" content="https://www.surmelispa.com/indirim-kazan" />
        <meta property="og:type" content="website" />
      </Head>

      <section id="oyun" className="pt-32 pb-32 bg-spa-dark border-t border-spa-deep/30 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-spa-accent-light text-xs tracking-[.4em] uppercase font-semibold mb-6 block">Etkileşimli Rahatlama</span>
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-6">Oyun Oyna & <span className="italic text-spa-accent-light">İndirim Kazan</span></h1>
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
    </PageLayout>
  )
}
