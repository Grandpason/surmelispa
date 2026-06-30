export default function Footer() {
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18196965496/H7nRCIG-jr4cEPjQ_uRD'
      });
    }
  };

  return (
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
  )
}
