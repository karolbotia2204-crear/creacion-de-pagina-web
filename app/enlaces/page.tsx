import type { Metadata } from 'next'
import { GuestLinks } from '@/components/invitation/guest-links'
import { guestGroups } from '@/lib/guests'

export const metadata: Metadata = {
  title: 'Enlaces de invitados | Diego & Sofía',
  robots: { index: false, follow: false },
}

export default function EnlacesPage() {
  const guests = Object.entries(guestGroups).map(([id, g]) => ({ id, ...g }))
  const totalSeats = guests.reduce((sum, g) => sum + g.allowed, 0)

  return (
    <main className="min-h-svh bg-cream px-5 py-12">
      <div className="mx-auto max-w-3xl">
        <p className="font-sans text-xs uppercase tracking-[0.12em] text-gold-deep">Solo para los novios</p>
        <h1 className="mt-2 text-4xl italic">Enlaces personales</h1>
        <p className="mt-3 leading-relaxed text-pretty">
          {guests.length} invitaciones · {totalSeats} plazas. Envía a cada invitado su enlace: verá su nombre y
          solo podrá confirmar el número de plazas reservadas.
        </p>
        <GuestLinks guests={guests} />
      </div>
    </main>
  )
}
