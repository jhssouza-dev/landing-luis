import { Hero } from "./sections/Hero";
import { Highlights } from "./sections/Highlights";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useSectionObserver } from "./hooks/useSectionObserver";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { Testimonials } from "./sections/Testimonials";
import { Process } from "./sections/Process";

function App() {
  const { activeSection } = useSectionObserver();
  useScrollReveal();

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header activeSection={activeSection} />

        <main className="flex-1">
          <Hero />
          <Highlights />
          <About />
          <Process />
          <Testimonials />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
