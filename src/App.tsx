import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Expertises from './components/Expertises'
import Realisations from './components/Realisations'
import Process from './components/Process'
import SeoSection from './components/SeoSection'
import Affiliation from './components/Affiliation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingBar from './components/FloatingBar'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertises />
        <Realisations />
        <Process />
        <SeoSection />
        <Affiliation />
        <Contact />
      </main>
      <Footer />
      <FloatingBar />
    </div>
  )
}
