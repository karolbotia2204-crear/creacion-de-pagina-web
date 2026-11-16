'use client'

import { useEffect, useState } from 'react'
import { WEDDING_DATE_ISO } from '@/lib/guests'

const target = new Date(WEDDING_DATE_ISO).getTime()

function getParts(now: number) {
  const d = Math.max(0, target - now)
  return [
    { label: 'Días', value: Math.floor(d / 86_400_000) },
    { label: 'Horas', value: Math.floor(d / 3_600_000) % 24 },
    { label: 'Minutos', value: Math.floor(d / 60_000) % 60 },
    { label: 'Segundos', value: Math.floor(d / 1000) % 60 },
  ]
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const parts = now === null ? getParts(target).map((p) => ({ ...p, value: '–' })) : getParts(now)

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3" role="timer" aria-label="Cuenta regresiva para la boda">
      {parts.map((p) => (
        <div key={p.label} className="min-w-[68px] border border-line bg-white/50 px-2 py-3">
          <strong className="block text-[27px] font-normal tabular-nums">{p.value}</strong>
          <span className="font-sans text-[10px] uppercase tracking-[0.1em] text-gold-deep">{p.label}</span>
        </div>
      ))}
    </div>
  )
}
