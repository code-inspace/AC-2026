import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Calendar, Tag } from 'lucide-react'

const TAG_COLORS: Record<string, string> = {
  'Développement web': 'bg-[#2708a0]/20 border-[#2708a0]/40 text-[#8B5CF6]',
  'UI Design': 'bg-[#653ad2]/20 border-[#653ad2]/40 text-[#a78bfa]',
  'UX Design': 'bg-[#8B5CF6]/15 border-[#8B5CF6]/30 text-[#c4b5fd]',
  'Stratégie digitale': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  'SEO': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  'E-commerce': 'bg-pink-500/10 border-pink-500/20 text-pink-400',
}

const projects = [
  {
    title: 'Lucafit',
    client: 'Lucas M. · Coach sportif indépendant',
    date: 'Octobre 2024',
    description:
      'Site vitrine et booking pour un coach sportif. Refonte complète de l\'identité digitale, intégration d\'un système de réservation de séances, et stratégie SEO pour capter des prospects locaux sur Paris.',
    context:
      'Lucas avait un vieux site WordPress qui ne reflétait plus son niveau d\'expertise. Les prospects ne passaient pas à l\'acte. Il avait besoin d\'un site moderne, rapide et qui inspire confiance au premier regard.',
    tags: ['Développement web', 'UI Design', 'UX Design', 'SEO'],
    link: 'https://lucafit.fr',
    color: 'from-[#2708a0] to-[#653ad2]',
    emoji: '💪',
    result: '+220% de prises de RDV en ligne en 3 mois',
  },
  {
    title: 'ADN Paris',
    client: 'Camille B. · Créatrice de mode parisienne',
    date: 'Janvier 2025',
    description:
      'Boutique en ligne haut de gamme pour une marque de mode parisienne. Design épuré et luxueux, expérience d\'achat fluide, et stratégie de conversion pour maximiser le panier moyen.',
    context:
      'ADN Paris vendait uniquement en boutique physique et sur Instagram. La créatrice voulait ouvrir un canal digital premium à l\'image de sa marque : élégant, exclusif, parisien.',
    tags: ['Développement web', 'UI Design', 'UX Design', 'Stratégie digitale', 'E-commerce'],
    link: 'https://adnparis.fr',
    color: 'from-[#653ad2] to-[#8B5CF6]',
    emoji: '👗',
    result: 'Lancé en 30 jours · 40% des ventes désormais en ligne',
  },
]

export default function Realisations() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="realisations" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#653ad2]/30 to-transparent" />

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
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">Réalisations</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
            Des projets qui{' '}
            <span className="text-gradient">parlent</span>{' '}
            d'eux-mêmes
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Chaque site est unique. Voici quelques exemples concrets de ce que j'ai réalisé.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map(({ title, client, date, description, context, tags, link, color, emoji, result }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative rounded-2xl border border-white/8 bg-[#16171a] overflow-hidden hover:border-[#653ad2]/30 transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${color}`} />

              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left */}
                  <div className="flex-1">
                    {/* Title row */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-4xl">{emoji}</span>
                      <div>
                        <h3 className="text-2xl font-black text-white">{title}</h3>
                        <p className="text-sm text-white/40 mt-0.5">{client}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-2 text-sm text-white/40">
                        <Calendar size={14} />
                        {date}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/65 leading-relaxed mb-5">{description}</p>

                    {/* Context (expandable) */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={expanded === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-1 pb-4">
                        <p className="text-sm text-white/45 leading-relaxed border-l-2 border-[#653ad2]/40 pl-4 italic">
                          <span className="text-[#8B5CF6] font-semibold not-italic">Contexte : </span>
                          {context}
                        </p>
                      </div>
                    </motion.div>

                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="text-xs text-white/30 hover:text-[#8B5CF6] transition-colors mb-5 underline underline-offset-2"
                    >
                      {expanded === i ? 'Masquer le contexte' : 'Voir le contexte'}
                    </button>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border ${TAG_COLORS[tag] ?? 'bg-white/5 border-white/10 text-white/50'}`}
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: result card + CTA */}
                  <div className="lg:w-[260px] flex-shrink-0 space-y-4">
                    {/* Result highlight */}
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 border border-white/10`}>
                      <p className="text-xs text-white/50 mb-1 uppercase tracking-wider font-medium">Résultat</p>
                      <p className="text-sm font-semibold text-white leading-snug">{result}</p>
                    </div>

                    {/* CTA */}
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border border-[#653ad2]/30 bg-[#653ad2]/10 text-sm font-semibold text-white/80 hover:text-white hover:border-[#653ad2]/60 hover:bg-[#653ad2]/20 transition-all duration-200 group"
                    >
                      Voir le site
                      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-white/30 text-sm">
            D'autres projets disponibles sur demande,{' '}
            <a href="#contact" className="text-[#8B5CF6] hover:text-white transition-colors underline underline-offset-2">
              contactez-moi
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
