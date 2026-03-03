import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Clock, Zap } from 'lucide-react'

const FLOATING_WORDS = [
  { text: 'Next.js', x: '8%', y: '20%', delay: 0 },
  { text: 'SEO', x: '85%', y: '15%', delay: 0.5 },
  { text: 'UX Design', x: '75%', y: '70%', delay: 1 },
  { text: 'React', x: '12%', y: '75%', delay: 1.5 },
  { text: 'Figma', x: '90%', y: '45%', delay: 2 },
  { text: 'Conversion', x: '5%', y: '48%', delay: 0.8 },
  { text: 'Performance', x: '60%', y: '85%', delay: 1.3 },
  { text: 'TypeScript', x: '38%', y: '10%', delay: 0.3 },
]

const MORPHING_WORDS = ['votre vitrine', 'votre e-commerce', 'votre portfolio', 'votre application', 'votre machine à leads']

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [morphIndex, setMorphIndex] = useState(0)
  const [morphVisible, setMorphVisible] = useState(true)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  // 3D card tilt values
  const cardRotateX = useTransform(springY, [0, 1], [8, -8])
  const cardRotateY = useTransform(springX, [0, 1], [-8, 8])

  // Spotlight position
  const spotX = useTransform(springX, [0, 1], ['20%', '80%'])
  const spotY = useTransform(springY, [0, 1], ['20%', '80%'])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }, [mouseX, mouseY])

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Morphing text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setMorphVisible(false)
      setTimeout(() => {
        setMorphIndex((i) => (i + 1) % MORPHING_WORDS.length)
        setMorphVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Gradient orbs */}
      <motion.div
        className="orb w-[600px] h-[600px] bg-[#2708a0]/20"
        style={{ top: '-10%', left: '-5%' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb w-[500px] h-[500px] bg-[#653ad2]/15"
        style={{ bottom: '-5%', right: '-5%' }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="orb w-[300px] h-[300px] bg-[#8B5CF6]/10"
        style={{ top: '40%', left: '40%', transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Mouse-following spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${spotX.get()} ${spotY.get()}, rgba(101, 58, 210, 0.18), transparent 50%)`,
        }}
        animate={{
          background: `radial-gradient(800px circle at ${spotX.get()} ${spotY.get()}, rgba(101, 58, 210, 0.18), transparent 50%)`,
        }}
      />
      <SpotlightOverlay springX={springX} springY={springY} />

      {/* Floating tech words */}
      {FLOATING_WORDS.map((word, i) => (
        <motion.div
          key={word.text}
          className="absolute text-xs font-mono text-white/15 select-none pointer-events-none hidden lg:block"
          style={{ left: word.x, top: word.y }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 0.4, 0.2, 0.4], y: [10, 0, -5, 0] }}
          transition={{
            duration: 6,
            delay: word.delay + 1.5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          {word.text}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge: Réponse 24h */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#653ad2]/40 bg-[#653ad2]/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            <Clock size={13} className="text-[#8B5CF6]" />
            <span className="text-sm font-medium text-white/80">Réponse sous 24h garantie</span>
          </motion.div>

          {/* H1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-2">
              <span className="text-white">Avoir un site</span>
              <br />
              <span className="text-white">ne suffit</span>{' '}
              <span className="text-white">plus.</span>
            </h1>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-6">
              <span className="text-gradient">Il doit vendre.</span>
            </h1>
          </motion.div>

          {/* Morphing subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-white/60 max-w-xl mb-4 leading-relaxed"
          >
            Je conçois{' '}
            <span
              className={`text-[#8B5CF6] font-semibold transition-all duration-400 inline-block ${
                morphVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
              style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
            >
              {MORPHING_WORDS[morphIndex]}
            </span>{' '}
            performant, visible sur Google,
            <br />
            pensé pour transformer vos visiteurs en clients.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10"
          >
            <MagneticButton href="#audit" primary>
              <Zap size={16} />
              Audit gratuit
            </MagneticButton>

            <MagneticButton href="#contact">
              Me contacter
              <ArrowRight size={16} />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Interactive 3D card mockup */}
        <div className="flex-shrink-0 relative">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              rotateX: cardRotateX,
              rotateY: cardRotateY,
              transformPerspective: 1000,
            }}
            className="relative w-[320px] md:w-[380px]"
          >
            {/* Browser mockup */}
            <div className="rounded-2xl overflow-hidden border border-[#653ad2]/30 shadow-[0_0_60px_rgba(101,58,210,0.3)] bg-[#16171a]">
              {/* Browser bar */}
              <div className="bg-[#1e1f24] px-4 py-3 flex items-center gap-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 bg-[#0E0F11] rounded-md px-3 py-1.5 text-xs text-white/30 font-mono">
                  votresite.fr
                </div>
              </div>

              {/* Website preview content */}
              <div className="p-5 space-y-4 min-h-[260px]">
                {/* Hero preview */}
                <motion.div
                  className="rounded-xl bg-gradient-to-br from-[#2708a0]/30 to-[#653ad2]/20 p-4 border border-[#653ad2]/20"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="h-2 w-3/4 bg-white/30 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/15 rounded mb-4" />
                  <div className="flex gap-2">
                    <div className="h-7 w-24 bg-primary-gradient rounded-full" />
                    <div className="h-7 w-20 bg-white/10 rounded-full border border-white/10" />
                  </div>
                </motion.div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {['+340%', '4.9★', '#1'].map((stat, i) => (
                    <motion.div
                      key={stat}
                      className="bg-[#0E0F11] rounded-lg p-2 text-center border border-white/5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.2 }}
                    >
                      <div className="text-sm font-bold text-gradient">{stat}</div>
                      <div className="text-[10px] text-white/30 mt-0.5">
                        {(['Trafic', 'Avis', 'Google'] as const)[i]}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Content bars */}
                <div className="space-y-2">
                  {[80, 60, 70, 45].map((w, i) => (
                    <motion.div
                      key={i}
                      className="h-1.5 rounded-full bg-white/10"
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{ delay: 1.5 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Glow under card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#653ad2]/20 blur-2xl rounded-full" />

            {/* Floating badge: 2 places */}
            <motion.div
              className="absolute -top-5 -right-5 bg-[#0E0F11] border border-[#653ad2]/50 rounded-2xl px-3 py-2 shadow-primary-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <motion.span
                  className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-semibold text-white whitespace-nowrap">
                  Plus que 2 places
                </span>
              </div>
              <p className="text-[10px] text-white/40 mt-0.5">disponibles ce mois-ci</p>
            </motion.div>

            {/* Floating performance badge */}
            <motion.div
              className="absolute -bottom-3 -left-5 bg-[#0E0F11] border border-emerald-500/30 rounded-xl px-3 py-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Zap size={13} className="text-emerald-400" />
                <span className="text-xs text-white/80 font-medium">Livré en 30 jours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">Découvrir</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[#653ad2] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

// Spotlight that follows mouse smoothly
function SpotlightOverlay({
  springX,
  springY,
}: {
  springX: ReturnType<typeof useSpring>
  springY: ReturnType<typeof useSpring>
}) {
  const [pos, setPos] = useState({ x: '50%', y: '50%' })

  useEffect(() => {
    const unsubX = springX.on('change', () => {
      setPos({
        x: `${springX.get() * 100}%`,
        y: `${springY.get() * 100}%`,
      })
    })
    return () => unsubX()
  }, [springX, springY])

  return (
    <div
      className="absolute inset-0 pointer-events-none transition-none"
      style={{
        background: `radial-gradient(700px circle at ${pos.x} ${pos.y}, rgba(101, 58, 210, 0.15), transparent 50%)`,
      }}
    />
  )
}

// Magnetic button component
function MagneticButton({
  href,
  primary,
  children,
}: {
  href: string
  primary?: boolean
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 300, damping: 20 }
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25)
    y.set((e.clientY - cy) * 0.25)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (primary) {
    return (
      <motion.a
        ref={ref}
        href={href}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white overflow-hidden group cursor-pointer"
        whileTap={{ scale: 0.97 }}
      >
        <span className="absolute inset-0 bg-primary-gradient" />
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#653ad2] to-[#8B5CF6] transition-opacity duration-300" />
        <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
        <span className="relative flex items-center gap-2">{children}</span>
      </motion.a>
    )
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-white/80 hover:text-white border border-white/15 hover:border-[#653ad2]/60 transition-all duration-300 cursor-pointer group"
      whileTap={{ scale: 0.97 }}
    >
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[#653ad2]/10 transition-opacity duration-300" />
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.a>
  )
}
