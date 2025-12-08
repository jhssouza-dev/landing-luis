import { services } from '../data/services'
import { ServiceCard } from '../components/ServiceCard'

export function Services() {
  return (
    <section
      id="servicos"
      className="sr-section border-t border-white/5 py-16"
    >
      <div className="page-container">
        {/* Cabeçalho da seção */}
        <div className="mb-14 max-w-2xl">
          <p className="text-lg uppercase tracking-[0.3em] text-slate-400">
            Serviços
          </p>

          <h2 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight uppercase">
            Do conceito ao render final.
          </h2>

          <p className="mt-4 text-lg md:text-xl text-slate-400 leading-relaxed">
            Arquitetura, interiores e visualização 3D para apresentar projetos
            com clareza e impacto, seja para uso residencial ou comercial.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
