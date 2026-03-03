import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MessageCircle, Mail, Calendar, Clock, Zap } from 'lucide-react'

const actions = [
  {
    icon: Zap,
    title: 'Audit gratuit',
    description: 'Je passe en revue votre site actuel (ou votre projet) et vous donne un retour actionnable, gratuitement, sans engagement.',
    cta: 'Demander l\'audit',
    href: 'mailto:hello@axel.fr?subject=Audit gratuit',
    primary: true,
    badge: 'Gratuit & Sans engagement',
  },
  {
    icon: Calendar,
    title: 'Réserver un call',
    description: 'On échange 30 minutes pour parler de votre projet. Je réponds à toutes vos questions et on voit ensemble si je suis la bonne personne.',
    cta: 'Réserver un créneau',
    href: 'https://calendly.com/axel',
    primary: false,
    badge: '30 min · Gratuit',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Une question rapide ? Envoyez-moi un message sur WhatsApp. Je réponds en général dans la journée.',
    cta: 'Écrire sur WhatsApp',
    href: 'https://wa.me/33600000000',
    primary: false,
    badge: 'Réponse rapide',
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#653ad2]/30 to-transparent" />

      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2708a0]/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#653ad2]/30 bg-[#653ad2]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">En ligne · Disponible</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-4">
            Prêt à créer un site{' '}
            <span className="text-gradient">qui convertit ?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Choisissez la façon dont vous préférez qu'on se parle. Je m'adapte à vous.
          </p>

          {/* Availability indicator */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Clock size={14} />
              Réponse sous 24h garantie
            </div>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Zap size={14} className="text-[#8B5CF6]" />
              2 places disponibles ce mois-ci
            </div>
          </div>
        </motion.div>

        {/* Action cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {actions.map(({ icon: Icon, title, description, cta, href, primary, badge }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
              className={`relative flex flex-col p-6 rounded-2xl border card-hover ${
                primary
                  ? 'border-[#653ad2]/50 bg-[#16171a]'
                  : 'border-white/8 bg-[#16171a]'
              } overflow-hidden group`}
            >
              {primary && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#2708a0]/15 to-[#653ad2]/10 pointer-events-none" />
              )}

              {/* Badge */}
              <span className={`inline-flex self-start text-xs px-2.5 py-1 rounded-full mb-5 font-medium ${
                primary
                  ? 'bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/25'
                  : 'bg-white/5 text-white/40 border border-white/8'
              }`}>
                {badge}
              </span>

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                primary
                  ? 'bg-primary-gradient shadow-primary-sm'
                  : 'bg-[#653ad2]/20 border border-[#653ad2]/25'
              }`}>
                <Icon size={22} className="text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">{description}</p>

              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  primary
                    ? 'bg-primary-gradient text-white hover:shadow-primary hover:scale-[1.02]'
                    : 'border border-[#653ad2]/30 text-white/70 hover:text-white hover:border-[#653ad2]/60 hover:bg-[#653ad2]/10'
                }`}
              >
                {cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Alternative contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6 py-8 border-t border-white/5"
        >
          <span className="text-sm text-white/30">Autre façon de me joindre :</span>
          <a
            href="tel:+33600000000"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <Phone size={14} />
            +33 6 00 00 00 00
          </a>
          <a
            href="mailto:hello@axel.fr"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <Mail size={14} />
            hello@axel.fr
          </a>
        </motion.div>
      </div>
    </section>
  )
}
