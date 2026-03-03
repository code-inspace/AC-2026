import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src="/images/logo-axelcoudair.png" alt="Axel Coudair" className="h-8 w-auto opacity-80" />
        </div>

        <p className="text-xs text-white/25 text-center">
          © {new Date().getFullYear()} · Conçu avec soin · React, Next.js, Tailwind CSS
        </p>

        <div className="flex items-center gap-5 text-xs text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-white/60 transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
