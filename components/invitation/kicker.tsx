import { cn } from '@/lib/utils'

export function Kicker({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('font-sans text-[11px] uppercase tracking-[0.28em] text-gold-deep', className)}>
      {children}
    </p>
  )
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="font-sans text-xs uppercase tracking-[0.12em] text-gold-deep">{eyebrow}</p>
      <h2 className="mt-2 text-[31px] font-normal italic text-balance sm:text-4xl">{title}</h2>
    </>
  )
}

export function Rule() {
  return <div className="mx-auto my-6 h-px w-14 bg-gold" aria-hidden="true" />
}
