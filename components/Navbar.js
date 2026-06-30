import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18196965496/H7nRCIG-jr4cEPjQ_uRD'
      });
    }
  };

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

  return (
    <header
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-500 border-b border-spa-accent/15 backdrop-blur-md ${
        isScrolled ? 'nav-scrolled' : 'bg-spa-dark/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/adana-masaj" className="flex items-center gap-4">
            <img
              src="/assets/images/Logo.webp"
              alt="Sürmeli Spa Logo"
              className="w-14 h-14 rounded-md object-contain border border-spa-accent/30 bg-white p-1"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-[.15em] text-spa-accent-light uppercase font-serif leading-none">Sürmeli</span>
              <span className="text-xs tracking-[.3em] text-spa-muted uppercase mt-1">Spa & Masaj</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/hizmetler" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Hizmetler</Link>
            <Link href="/fiyatlar" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Fiyatlar</Link>
            <Link href="/indirim-kazan" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300 text-spa-accent-light">İndirim Kazan</Link>
            <Link href="/lokasyon" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Lokasyon</Link>
            <Link href="/iletisim" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">İletişim</Link>
            <Link href="/blog/adana-masajin-faydalari" className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors duration-300">Blog</Link>
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
          <Link href="/hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Hizmetler</Link>
          <Link href="/fiyatlar" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Fiyatlar</Link>
          <Link href="/indirim-kazan" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors text-spa-accent-light">İndirim Kazan</Link>
          <Link href="/lokasyon" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Lokasyon</Link>
          <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">İletişim</Link>
          <Link href="/blog/adana-masajin-faydalari" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase font-medium hover:text-spa-accent transition-colors">Blog</Link>
          <a onClick={handlePhoneClick} href="tel:+905305153770" className="text-spa-accent-light text-sm tracking-widest mt-4">0530 515 37 70</a>
        </div>
      </div>
    </header>
  )
}
