import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function Highlights() {
  return (
    <section
      id="projetos"
      className="absolute inset-0 z-2 overflow-hidden"
      data-projects-scene
    >
      {/* Panel (entire stacking catalog) slides in from the right via ProjectsScene */}
      <div data-projects-panel className="absolute inset-0 bg-background">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            data-catalog-card
            className="absolute inset-0 block overflow-hidden rounded-2xl"
            style={{ zIndex: i + 1 }}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/88 via-black/20 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-[clamp(1.5rem,4vw,3.5rem)] pb-[clamp(2rem,5svh,4rem)]">
              <div>
                <p className="eyebrow text-foreground/52">{project.eyebrow}</p>
                <h2 className="display-type mt-3 text-[clamp(2.2rem,5vw,5.5rem)] uppercase leading-[0.9] text-foreground">
                  {project.title}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-[clamp(3rem,6vw,7rem)] font-extralight leading-none text-foreground/15 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-foreground/52">
                  {project.year}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
