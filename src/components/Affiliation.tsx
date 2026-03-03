import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Gift, ArrowRight, Share2, Euro, Handshake } from 'lucide-react'

const steps = [
  {
    icon: Share2,
    title: 'Vous présentez un client',
    description: 'Parlez de moi à quelqu\'un de votre réseau qui a besoin d\'un site web. Un simple message suffit.',
  },
  {
    icon: Handshake,
    title: 'Je m\'occupe de tout',
    description: 'Je prends en charge le projet de A à Z. Votre contact est entre de bonnes mains.',
  },
  {
    icon: Euro,
    title: 'Vous recevez 10%',
    description: 'Une fois le projet signé et payé, vous recevez 10% du montant total. Simple, rapide, transparent.',
  },
]

export default function Affiliation() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="affiliation" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#653ad2]/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#653ad2]/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#653ad2]/30 bg-[#653ad2]/10 mb-6">
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">Programme Affiliation</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-4">
            Présentez-moi un client,{' '}
            <br />
            <span className="text-gradient">recevez 10%</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Votre réseau vaut de l'argent. Si vous connaissez quelqu'un qui a besoin d'un site web, parlez-en moi et soyez récompensé.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl border border-white/8 bg-[#16171a] hover:border-[#653ad2]/30 transition-all duration-300 card-hover text-center">
                {/* Step number */}
                <div className="w-8 h-8 rounded-full bg-primary-gradient flex items-center justify-center text-xs font-black text-white mx-auto mb-4 shadow-primary-sm">
                  {i + 1}
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#653ad2]/20 border border-[#653ad2]/25 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#8B5CF6]" />
                </div>

                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{description}</p>
              </div>

              {/* Arrow between steps */}
              {i < 2 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={18} className="text-[#653ad2]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-[#653ad2]/40 bg-[#16171a] p-8 md:p-10"
        >
          {/* Gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2708a0]/15 to-[#653ad2]/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#653ad2]/15 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-primary flex-shrink-0">
              <Gift size={36} className="text-white" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-white mb-2">
                Un site moyen coûte entre{' '}
                <span className="text-gradient">1 500€ et 8 000€</span>
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                10% sur un projet signé, c'est entre <span className="text-white font-semibold">150€ et 800€</span> dans votre poche pour simplement avoir fait une présentation. Aucun effort de vente, aucun risque.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Users size={13} />
                  Ouvert à tous, réseau perso ou pro
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Euro size={13} />
                  Paiement à la signature du projet
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary-gradient hover:shadow-primary transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Je veux participer
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
