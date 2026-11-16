import Image from 'next/image'
import { Rule } from './kicker'

export function Story() {
  return (
    <section id="historia" className="px-5 py-16 text-center sm:py-[70px]">
      <div className="mx-auto max-w-[760px]">
        <p className="text-sm tracking-[0.08em] text-gold-deep">30 · 04 · 2022 — Nuestra historia</p>
        <h2 className="mt-4 text-[31px] font-normal italic text-balance sm:text-4xl">
          Una historia, muchos recuerdos y un para siempre
        </h2>
        <Rule />
        <Image
          src="/nuestra-historia.jpg"
          alt="Diego y Sofía compartiendo recuerdos juntos"
          width={1200}
          height={1600}
          sizes="(max-width: 660px) 100vw, 620px"
          className="mx-auto my-7 block h-auto w-full max-w-[620px] rounded-[3px] shadow-[0_18px_45px_#00000020]"
        />
        <p className="leading-[1.8] text-pretty">
          Desde aquel 30 de abril de 2022, seguimos escribiendo nuestra historia. Ahora queremos celebrar
          contigo el comienzo de una nueva etapa.
        </p>
      </div>
    </section>
  )
}
