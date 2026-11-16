import { SectionTitle } from './kicker'

const events = [
  {
    label: 'Ceremonia religiosa',
    time: '6:00 p. m.',
    title: 'Parroquia Santa Teresa de Calcuta',
    address: ['Km 1, Vía Guatiguará', 'Piedecuesta, Santander, Colombia'],
    map: 'https://www.google.com/maps/search/?api=1&query=Parroquia+Santa+Teresa+de+Calcuta+Km+1+Via+Guatiguara+Piedecuesta+Santander+Colombia',
  },
  {
    label: 'Recepción y fiesta',
    time: '8:00 p. m.',
    title: '¡A celebrar juntos!',
    address: ['Junto a la parroquia', 'Km 1, Vía Guatiguará', 'Piedecuesta, Santander, Colombia'],
    map: 'https://www.google.com/maps/search/?api=1&query=Km+1+Via+Guatiguara+Piedecuesta+Santander+Colombia',
  },
]

export function EventDetails() {
  return (
    <section className="bg-cream px-5 py-16 text-center sm:py-[70px]">
      <div className="mx-auto max-w-[760px]">
        <SectionTitle eyebrow="Reserva la fecha" title="El gran día" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {events.map((e) => (
            <article key={e.label} className="border border-line bg-white px-5 py-8">
              <p className="font-sans text-xs uppercase tracking-[0.12em] text-gold-deep">{e.label}</p>
              <p className="mb-3.5 mt-2 text-3xl">{e.time}</p>
              <h3 className="text-lg font-bold">{e.title}</h3>
              <address className="mt-3 text-[15px] not-italic leading-[1.7]">
                {e.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={e.map}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-[2px] border border-gold px-5 py-3.5 font-sans text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:bg-gold hover:text-white"
              >
                Ver ubicación<span className="sr-only"> de {e.label.toLowerCase()} (se abre en una pestaña nueva)</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
