type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  )
}
