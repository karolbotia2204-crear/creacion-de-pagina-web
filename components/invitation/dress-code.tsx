import { Rule, SectionTitle } from './kicker'

export function DressCode() {
  return (
    <section className="px-5 py-16 text-center sm:py-[70px]">
      <div className="mx-auto max-w-[760px]">
        <SectionTitle eyebrow="Un detalle importante" title="Código de vestimenta" />
        <Rule />
        <p className="text-[22px] italic">Elegante</p>
        <p className="mx-auto mt-4 max-w-[560px] leading-[1.8] text-pretty">
          Queremos que disfrutes y luzcas espectacular. Te pedimos amablemente no vestir de color blanco, ya
          que ese color estará reservado para los novios.
        </p>
      </div>
    </section>
  )
}
