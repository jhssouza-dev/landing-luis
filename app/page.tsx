import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { IntroLogo } from "@/components/intro/IntroLogo";
import { ProjectsScene } from "@/components/transitions/ProjectsScene";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main>
      <IntroLogo />
      <ProjectsScene />
      {/* Push scene: Hero and Highlights share the same viewport layer.
          Hero is z-1 (back), Highlights panel is z-2 (front).
          ProjectsScene pins this container and animates within it. */}
      <div id="topo" data-push-scene className="relative h-svh overflow-hidden">
        <Hero />
        <Highlights />
      </div>
      <About />
      <Process />
      <Testimonials />
      <Services />
      <Contact />
    </main>
  );
}
