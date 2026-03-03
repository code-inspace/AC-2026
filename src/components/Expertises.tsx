import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, ShoppingBag, LayoutDashboard, AppWindow, ArrowRight } from 'lucide-react'

const expertises = [
  {
    icon: Monitor,
    title: 'Site Vitrine',
    description:
      'Votre présence en ligne professionnelle. Un site élégant qui présente votre activité, vos services et renforce votre crédibilité auprès de vos prospects.',
    features: ['Design sur-mesure', 'SEO optimisé', 'Formulaire de contact', 'Responsive'],
    gradient: 'from-[#2708a0] to-[#653ad2]',
    glow: 'rgba(39, 8, 160, 0.4)',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description:
      'Une boutique en ligne performante pour vendre 24h/24. Gestion des produits, paiements sécurisés et tunnel de vente optimisé pour convertir.',
    features: ['Paiement sécurisé', 'Gestion stock', 'Tunnel de vente', 'Analytics'],
    gradient: 'from-[#653ad2] to-[#8B5CF6]',
    glow: 'rgba(101, 58, 210, 0.4)',
  },
  {
    icon: LayoutDashboard,
    title: 'Back Office',
    description:
      'Un tableau de bord sur-mesure pour gérer votre activité en interne. CRM, gestion de contenu, outils métier adaptés à vos process.',
    features: ['Interface admin', 'Gestion utilisateurs', 'Tableau de bord', 'API intégrée'],
    gradient: 'from-[#8B5CF6] to-[#a78bfa]',
    glow: 'rgba(139, 92, 246, 0.4)',
  },
  {
    icon: AppWindow,
    title: 'Application Web',
    description:
      'Des outils web complexes et évolutifs. SaaS, plateformes collaboratives, applications métier : je conçois des solutions robustes qui scalent avec votre croissance.',
    features: ['Architecture solide', 'Auth & sécurité', 'API RESTful', 'Scalable'],
    gradient: 'from-[#653ad2] to-[#2708a0]',
    glow: 'rgba(101, 58, 210, 0.4)',
  },
]

export default function Expertises() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="expertises" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#653ad2]/30 to-transparent" />

      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2708a0]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#653ad2]/30 bg-[#653ad2]/10 mb-6">
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">Mes expertises</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Ce que je{' '}
            <span className="text-gradient">construis</span>{' '}
            pour vous
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Du site vitrine à l'application web complexe, je m'adapte à votre besoin et à votre budget.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {expertises.map(({ icon: Icon, title, description, features, gradient, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
              className="group relative p-6 rounded-2xl border border-white/8 bg-[#16171a] overflow-hidden card-hover cursor-default"
              style={{ '--glow-color': glow } as React.CSSProperties}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `inset 0 0 60px ${glow}15`,
                }}
              />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {title}
              </h3>

              <p className="text-white/55 text-sm leading-relaxed mb-5">{description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-white/50"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span>En savoir plus</span>
                <ArrowRight size={14} />
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradient} opacity-5 rounded-bl-[60px]`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">Pas sûr de ce dont vous avez besoin ?</p>
          <a
            href="#audit"
            className="inline-flex items-center gap-2 text-[#8B5CF6] font-semibold hover:text-white transition-colors duration-200 group"
          >
            Discutons de votre projet
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
