import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Figma, Code2, FileSearch, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Découverte',
    description:
      'On commence par un échange pour comprendre votre activité, vos objectifs et vos clients. Pas de template générique : votre projet part de zéro.',
    color: '#2708a0',
  },
  {
    number: '02',
    icon: Figma,
    title: 'Maquette',
    description:
      'Je vous soumets un design complet sur Figma. On affine ensemble jusqu\'à ce que ce soit parfait. Aucun code avant votre validation.',
    color: '#3d12b8',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Développement',
    description:
      'Je code votre site avec les meilleures technologies du marché : Next.js, React. Rapide, solide, optimisé pour la performance.',
    color: '#531cc8',
  },
  {
    number: '04',
    icon: FileSearch,
    title: 'Contenu & SEO',
    description:
      'On intègre vos textes et vos visuels, on structure les pages pour le référencement. Vos futurs clients vous trouveront sur Google.',
    color: '#653ad2',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Tests & livraison',
    description:
      'Vérifications complètes sur tous les appareils et navigateurs, puis mise en ligne. Votre site est prêt à travailler pour vous.',
    color: '#7b52db',
  },
  {
    number: '06',
    icon: HeartHandshake,
    title: 'Accompagnement',
    description:
      'Je reste disponible après la livraison. Évolutions, questions, ajustements : vous n\'êtes pas seul. Je reste votre partenaire.',
    color: '#8B5CF6',
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="processus" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#653ad2]/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2708a0]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#653ad2]/30 bg-[#653ad2]/10 mb-6">
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">Processus</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-4">
            Votre site en ligne{' '}
            <span className="text-gradient">en 30 jours</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">
            Un processus éprouvé, transparent et efficace, du premier échange à la mise en ligne.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2708a0] via-[#653ad2] to-[#8B5CF6] opacity-30 hidden md:block" />

          <div className="space-y-8">
            {steps.map(({ number, icon: Icon, title, description, color }, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={number}
                  initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="group relative p-6 rounded-2xl border border-white/8 bg-[#16171a] hover:border-[#653ad2]/30 transition-all duration-300 card-hover">
                      {/* Glow on hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ boxShadow: `0 0 30px ${color}15` }} />

                      <div className={`flex items-start gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        {/* Icon */}
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `linear-gradient(135deg, ${color}40, ${color}20)`, border: `1px solid ${color}30` }}
                        >
                          <Icon size={20} style={{ color }} />
                        </div>

                        <div className={`flex-1 ${isEven ? 'md:text-right' : ''}`}>
                          <div className="flex items-center gap-2 mb-2" style={{ justifyContent: isEven ? undefined : undefined }}>
                            <span className="text-xs font-mono font-bold text-gradient opacity-60">{number}</span>
                            <h3 className="text-lg font-bold text-white">{title}</h3>
                          </div>
                          <p className="text-sm text-white/55 leading-relaxed">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center z-10"
                    style={{ background: '#0E0F11', border: `2px solid ${color}` }}>
                    <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                  </div>

                  {/* Empty side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-16"
        >
          <a
            href="#audit"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-primary-gradient hover:shadow-primary transition-all duration-300 hover:scale-105"
          >
            <Rocket size={18} />
            Commencer mon projet
          </a>
          <p className="mt-4 text-sm text-white/30">
            Audit gratuit inclus · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  )
}
