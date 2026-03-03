import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~100vh
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[92vw]"
        >
          <div className="flex items-center gap-4 px-5 py-3 rounded-2xl bg-[#16171a]/95 backdrop-blur-xl border border-[#653ad2]/30 shadow-[0_0_40px_rgba(101,58,210,0.25)]">
            {/* Avatar with online indicator */}
            <div className="relative flex-shrink-0">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#653ad2]/40">
                <img src="/images/photo-pro 3.jpg" alt="Axel" className="w-full h-full object-cover" />
              </div>
              {/* Green online dot */}
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#16171a] animate-pulse-slow" />
            </div>

            {/* Name & status */}
            <div className="flex flex-col min-w-0">
              <span className="text-white font-semibold text-sm leading-tight">Axel</span>
              <span className="text-emerald-400 text-xs font-medium">En ligne · Répond sous 24h</span>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-white/10 mx-1" />

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              {/* Phone */}
              <a
                href="tel:+33600000000"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-[#2708a0]/30 border border-white/10 hover:border-[#653ad2]/40 text-white/70 hover:text-white transition-all duration-200 group"
                title="Appeler"
              >
                <Phone size={17} className="group-hover:scale-110 transition-transform" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 hover:border-[#25D366]/50 text-[#25D366] transition-all duration-200 group"
                title="WhatsApp"
              >
                <MessageCircle size={17} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
