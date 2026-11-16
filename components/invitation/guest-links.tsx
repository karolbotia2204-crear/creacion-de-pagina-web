'use client'

import { useState, useSyncExternalStore } from 'react'

type GuestLink = { id: string; name: string; allowed: number }

const subscribe = () => () => {}

export function GuestLinks({ guests }: { guests: GuestLink[] }) {
  const origin = useSyncExternalStore(
    subscribe,
    () => window.location.origin,
    () => '',
  )
  const [copied, setCopied] = useState<string | null>(null)
  const [query, setQuery] = useState('')

  const filtered = guests.filter((g) => g.name.toLowerCase().includes(query.trim().toLowerCase()))

  async function copy(id: string, url: string) {
    await navigator.clipboard.writeText(url)
    setCopied(id)
    window.setTimeout(() => setCopied((c) => (c === id ? null : c)), 1800)
  }

  return (
    <div className="mt-8">
      <label htmlFor="search" className="sr-only">
        Buscar invitado
      </label>
      <input
        id="search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar invitado…"
        className="w-full rounded-[2px] border border-line bg-white p-3 focus-visible:outline-2 focus-visible:outline-gold"
      />
      <ul className="mt-4 divide-y divide-line border border-line bg-white">
        {filtered.map((g) => {
          const url = `${origin}/?g=${g.id}`
          const message = `¡Hola ${g.name}! Diego y Sofía te invitamos a nuestra boda. Abre tu invitación aquí: ${url}`
          return (
            <li key={g.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="font-bold">{g.name}</p>
                <p className="truncate font-sans text-xs text-gold-deep">
                  {g.allowed} {g.allowed === 1 ? 'plaza' : 'plazas'} · /?g={g.id}
                </p>
              </div>
              <div className="flex shrink-0 gap-2 font-sans text-xs uppercase tracking-[0.08em]">
                <button
                  type="button"
                  onClick={() => copy(g.id, url)}
                  className="rounded-[2px] border border-gold px-3 py-2 hover:bg-gold hover:text-white"
                >
                  {copied === g.id ? 'Copiado' : 'Copiar'}
                  <span className="sr-only"> enlace de {g.name}</span>
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[2px] bg-gold-deep px-3 py-2 text-white hover:bg-ink"
                >
                  WhatsApp<span className="sr-only"> a {g.name}</span>
                </a>
                <a href={`/?g=${g.id}`} className="rounded-[2px] border border-line px-3 py-2 hover:bg-cream">
                  Ver<span className="sr-only"> invitación de {g.name}</span>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="sr-only" aria-live="polite">
        {copied ? 'Enlace copiado' : ''}
      </p>
    </div>
  )
}
