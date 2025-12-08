import type { Service } from '../data/services'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-(--border) bg-(--bg-soft)/80 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-(--accent)/60 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold md:text-lg">
          {service.title}
        </h3>
        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
          Serviço
        </span>
      </div>

      <p className="text-sm text-slate-300">{service.description}</p>

      {service.items && service.items.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[3px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
