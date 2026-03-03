import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Gauge, Target, RefreshCw, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'SEO on-page & technique',
    description:
      'Vos pages sont structurées pour apparaître sur les requêtes de vos clients potentiels. Balises, maillage interne, sitemap, schema.org. Rien n\'est laissé au hasard.',
    metric: '+300%',
    metricLabel: 'de trafic organique moyen',
  },
  {
    icon: Gauge,
    title: 'Performance & Core Web Vitals',
    description:
      'Un site lent fait fuir. Google le pénalise. Je m\'assure que le vôtre charge en un éclair : score Lighthouse optimisé, images compressées, cache configuré.',
    metric: '< 1s',
    metricLabel: 'Temps de chargement',
  },
  {
    icon: Target,
    title: 'UX orientée conversion',
    description:
      'Chaque élément est placé pour guider naturellement l\'utilisateur vers l\'action que vous attendez : appel, devis, achat. Plus de visiteurs qui repartent sans agir.',
    metric: '+80%',
    metricLabel: 'Taux de conversion',
  },
  {
    icon: RefreshCw,
    title: 'Évolutif & maintenable',
    description:
      'Votre site grandit avec vous. Architecture propre, code documenté, facile à faire évoluer sans tout refaire. Un investissement durable, pas une dépense.',
    metric: '∞',
    metricLabel: 'Évolutivité garantie',
  },
]

export default function SeoSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="seo" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#653ad2]/30 to-transparent" />

      {/* Background */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#2708a0]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#653ad2]/30 bg-[#653ad2]/10 mb-6">
              <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">Performance</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
              Je ne fais pas{' '}
              <br />
              que des sites{' '}
              <span className="text-gradient">beaux.</span>
            </h2>

            <div className="space-y-5 text-white/60 text-[1.05rem] leading-relaxed">
              <p>
                <span className="text-white font-semibold">Un site invisible, c'est un site inutile.</span>
              </p>
              <p>
                Un design soigné, c'est le minimum. Ce qui fait vraiment la différence, c'est un site que{' '}
                <span className="text-white/90">Google trouve</span>, que vos visiteurs{' '}
                <span className="text-white/90">comprennent</span>, et qui les pousse à{' '}
                <span className="text-white/90">agir</span>.
              </p>
            </div>

            {/* Key points */}
            <ul className="mt-8 space-y-3">
              {[
                'Structuré pour plaire à Google dès le premier jour',
                'Pensé pour guider vos visiteurs vers l\'action',
                'Rapide sur mobile, tablette et desktop',
                'Fait pour durer et évoluer avec votre business',
              ].map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-white/65"
                >
                  <CheckCircle size={16} className="text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* Lighthouse score card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 p-5 rounded-2xl border border-[#653ad2]/25 bg-[#16171a]"
            >
              <p className="text-xs text-white/40 mb-3 font-mono uppercase tracking-wider">Score Lighthouse moyen</p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: 'Performance', value: 98, color: '#22c55e' },
                  { label: 'SEO', value: 100, color: '#8B5CF6' },
                  { label: 'Accessibilité', value: 96, color: '#3b82f6' },
                  { label: 'Bonnes pratiques', value: 100, color: '#f59e0b' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <div
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center mx-auto mb-2 text-sm font-bold"
                      style={{ borderColor: color, color }}
                    >
                      {value}
                    </div>
                    <p className="text-[10px] text-white/35 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Feature cards */}
          <div className="space-y-4">
            {features.map(({ icon: Icon, title, description, metric, metricLabel }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.6 }}
                className="group relative p-5 rounded-2xl border border-white/8 bg-[#16171a] hover:border-[#653ad2]/30 transition-all duration-300 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#653ad2]/20 border border-[#653ad2]/25 flex items-center justify-center flex-shrink-0 group-hover:bg-[#653ad2]/30 transition-colors">
                    <Icon size={18} className="text-[#8B5CF6]" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold text-white">{title}</h3>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-lg font-black text-gradient">{metric}</p>
                        <p className="text-[10px] text-white/35 leading-tight">{metricLabel}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed">{description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
