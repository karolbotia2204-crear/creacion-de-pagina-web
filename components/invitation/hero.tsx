import { Countdown } from './countdown'
import { Kicker } from './kicker'

export function Hero({ guestName }: { guestName?: string }) {
  return (
    <header className="relative flex min-h-svh items-center justify-center overflow-hidden bg-gradient-to-br from-paper to-[#f4f0e7] px-5 py-12 text-center">
      <span className="absolute left-[9%] top-[8%] text-4xl text-[#c9b394] opacity-70" aria-hidden="true">
        ✧
      </span>
      <span className="absolute bottom-[8%] right-[9%] text-4xl text-[#c9b394] opacity-70" aria-hidden="true">
        ✧
      </span>

      <div>
        <Kicker>Con mucha ilusión te invitamos a celebrar</Kicker>
        {guestName && <Kicker className="mt-3.5">Invitación para {guestName}</Kicker>}

        <h2 className="mb-3.5 mt-6 text-[clamp(52px,11vw,88px)] font-normal italic leading-[1.05]">
          Diego <span className="not-italic text-gold">&amp;</span> Sofía
        </h2>

        <Kicker>¡Nos casamos!</Kicker>
        <p className="mt-7 font-sans text-[13px] tracking-[0.22em]">
          <time dateTime="2027-12-18">SÁBADO · 18 · DICIEMBRE · 2027</time>
        </p>
        <p className="mx-auto mt-6 max-w-[490px] text-[17px] leading-[1.8] text-pretty">
          Hay momentos que se vuelven inolvidables cuando se comparten con las personas que queremos.
          Nos encantaría que nos acompañaras en este día tan especial.
        </p>

        <Countdown />

        <a
          href="#historia"
          className="mt-11 inline-block font-sans text-[11px] uppercase tracking-[0.2em] text-gold-deep hover:text-ink"
        >
          Desliza para descubrir
        </a>
      </div>
    </header>
  )
}
