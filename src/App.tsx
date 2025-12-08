import { Hero } from './sections/Hero'
import { Highlights } from './sections/Highlights'
import { About } from './sections/About'
import { Services } from './sections/Services'
import { Contact } from './sections/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useSectionObserver } from './hooks/useSectionObserver'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  const { activeSection } = useSectionObserver()
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#050816] text-[#F9FAFB]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header/>

        <main className="flex-1">
          <Hero />
          <Highlights />
          <About />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
