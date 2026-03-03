import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Briefcase, Palette, CheckCircle2 } from 'lucide-react'

const experiences = [
  { icon: Building2, label: 'SNCF', sub: 'Grand groupe' },
  { icon: Building2, label: 'DGAC', sub: 'Institution publique' },
  { icon: Building2, label: 'Osmos Group', sub: 'Génie civil' },
  { icon: Briefcase, label: 'Cinqmars', sub: 'Agence communication' },
]

const skills = [
  'Développeur web',
  'Chef de projets',
  'UX Designer',
  'Stratège digital',
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#653ad2]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#653ad2]/30 bg-[#653ad2]/10 mb-6">
              <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">À propos</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6">
              Derrière chaque{' '}
              <span className="text-gradient">bon site</span>
              , il y a quelqu'un qui{' '}
              <span className="relative inline-block">
                <span className="text-white">comprend</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary-gradient rounded-full" />
              </span>{' '}
              <span className="text-gradient">votre métier.</span>
            </h2>

            <div className="space-y-5 text-white/65 leading-relaxed text-[1.05rem]">
              <p>
                J'ai passé des années à travailler sur des projets digitaux pour de{' '}
                <span className="text-white/90 font-medium">grands groupes</span> : la SNCF, la DGAC, Osmos Group, et en agence de communication chez Cinqmars, dans des secteurs très variés.
              </p>
              <p>
                J'ai été <span className="text-white/90 font-medium">développeur, chef de projets, UX designer</span>. J'ai vu ce qui fonctionne, et ce qui coûte cher sans rapporter grand-chose.
              </p>
              <p>
                Aujourd'hui, je mets cette expérience au service des entrepreneurs, PME et indépendants qui veulent un site à leur image : <span className="text-white/90 font-medium">efficace, moderne, et pensé pour convertir</span>.
              </p>
              <p className="text-[#8B5CF6] font-medium">
                Pas de grande agence impersonnelle, pas de freelance qui disparaît après la livraison. Un vrai partenaire qui s'implique dans votre projet comme si c'était le sien.
              </p>
            </div>

            {/* Skills chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#653ad2]/15 border border-[#653ad2]/25 text-sm text-white/80"
                >
                  <CheckCircle2 size={12} className="text-[#8B5CF6]" />
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Card with experience */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="space-y-4"
          >
            {/* Avatar + intro card */}
            <div className="relative p-6 rounded-2xl border border-[#653ad2]/25 bg-[#16171a] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2708a0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-primary-sm flex-shrink-0">
                  <img src="/images/photo-pro 3.jpg" alt="Axel Coudair" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Axel</h3>
                  <p className="text-sm text-white/50">Expert Web · Depuis 2018</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
                    <span className="text-xs text-emerald-400">Disponible pour de nouveaux projets</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-white/50 italic">
                « Mon objectif : que votre site soit votre meilleur commercial, disponible 24h/24. »
              </p>
            </div>

            {/* Experience grid */}
            <div className="grid grid-cols-2 gap-3">
              {experiences.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-xl border border-white/8 bg-[#16171a] hover:border-[#653ad2]/30 transition-all duration-300 group cursor-default"
                >
                  <Icon size={20} className="text-[#8B5CF6] mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-white/40">{sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '6+', label: 'Ans d\'expérience' },
                { value: '30+', label: 'Projets livrés' },
                { value: '100%', label: 'Clients satisfaits' },
              ].map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center p-4 rounded-xl border border-[#653ad2]/20 bg-[#653ad2]/8"
                >
                  <p className="text-2xl font-black text-gradient">{value}</p>
                  <p className="text-xs text-white/45 mt-1 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
