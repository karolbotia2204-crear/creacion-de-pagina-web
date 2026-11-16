'use client'

import { useState } from 'react'
import { type Guest, WHATSAPP_NUMBER } from '@/lib/guests'
import { SectionTitle } from './kicker'

const fieldClass =
  'w-full rounded-[2px] border border-[#ddcfbf] bg-[#fffdfb] p-3.5 text-[15px] text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold'
const labelClass = 'mb-2 mt-4 block font-sans text-xs uppercase tracking-[0.08em] text-gold-deep'

export function RsvpSection({ guest }: { guest: Guest | null }) {
  const maxPeople = guest?.allowed ?? 10
  const [attendance, setAttendance] = useState('')
  const [count, setCount] = useState(String(guest?.allowed ?? 1))
  const [names, setNames] = useState('')
  const [status, setStatus] = useState('')

  const attending = attendance !== 'No podré asistir'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!guest) {
      setStatus('Solicita a los novios tu enlace personal para confirmar.')
      return
    }
    if (!attendance) return

    let message = `Hola, soy parte de la invitación de ${guest.name}. ${attendance}.`
    if (attendance === 'Sí, asistiré') {
      const n = Number(count)
      if (!Number.isInteger(n) || n < 1 || n > guest.allowed) {
        setStatus(`Tu invitación permite un máximo de ${guest.allowed} personas.`)
        return
      }
      const trimmed = names.trim()
      if (!trimmed) {
        setStatus('Escribe los nombres de las personas que asistirán.')
        return
      }
      message += ` Asistiremos ${n} persona(s). Nombres: ${trimmed}.`
    }
    message += ' Boda Diego y Sofía, 18 de diciembre de 2027.'
    setStatus('¡Gracias! Abriendo WhatsApp para enviar tu confirmación…')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
  }

  return (
    <section id="confirmacion" className="bg-cream px-5 py-16 text-center sm:py-[70px]">
      <div className="mx-auto max-w-[760px]">
        <SectionTitle eyebrow="Tu compañía es nuestro mejor regalo" title="¿Nos acompañas?" />
        <p className="mx-auto mt-4 max-w-[560px] leading-[1.8] text-pretty">
          Confírmanos si asistirás y quiénes te acompañarán. El número de plazas está reservado especialmente
          para tu invitación.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto my-7 max-w-[560px] border border-line bg-white p-6 text-left"
          noValidate={false}
        >
          {guest ? (
            <p className="font-sans text-xs uppercase tracking-[0.12em] text-gold-deep">
              Invitación reservada para {guest.name} · {guest.allowed} {guest.allowed === 1 ? 'plaza' : 'plazas'}
            </p>
          ) : (
            <p className="text-gold-deep">
              Para validar tus plazas, abre el enlace personal que te enviaron los novios.
            </p>
          )}

          <label htmlFor="attendance" className={labelClass}>
            ¿Podrás acompañarnos?
          </label>
          <select
            id="attendance"
            required
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className={fieldClass}
          >
            <option value="">Selecciona una opción</option>
            <option value="Sí, asistiré">¡Sí, asistiré!</option>
            <option value="No podré asistir">No podré asistir</option>
          </select>

          {attending && (
            <div>
              <label htmlFor="partyCount" className={labelClass}>
                ¿Cuántas personas asistirán en total?
              </label>
              <select
                id="partyCount"
                required
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className={fieldClass}
              >
                {Array.from({ length: maxPeople }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'persona' : 'personas'}
                  </option>
                ))}
              </select>

              <label htmlFor="partyNames" className={labelClass}>
                Nombre de las personas que asistirán
              </label>
              <textarea
                id="partyNames"
                rows={3}
                value={names}
                onChange={(e) => setNames(e.target.value)}
                placeholder={
                  guest
                    ? `Escribe los nombres de hasta ${guest.allowed} asistentes`
                    : 'Escribe tu nombre y el de tus acompañantes'
                }
                className={fieldClass}
              />
            </div>
          )}

          <button
            type="submit"
            className="mt-4 w-full cursor-pointer rounded-[2px] bg-gold-deep px-5 py-3.5 font-sans text-xs uppercase tracking-[0.1em] text-white transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Enviar confirmación por WhatsApp
          </button>
          <p className="mt-3 min-h-5 text-center text-sm text-gold-deep" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  )
}
