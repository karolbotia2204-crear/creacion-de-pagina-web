'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function EnvelopeScreen() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  function handleOpen() {
    if (open) return
    setOpen(true)
    window.setTimeout(() => setHidden(true), 850)
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-paper to-[#f1ede4] p-6 text-center transition-[opacity,visibility] duration-700',
        hidden && 'pointer-events-none invisible opacity-0',
      )}
      aria-hidden={hidden}
    >
      <div className="w-full max-w-md">
        <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold-deep">
          Una invitación especial para ti
        </p>
        <h1 className="mt-5 text-4xl italic">Tienes una invitación</h1>

        <button
          type="button"
          onClick={handleOpen}
          data-open={open}
          aria-label="Abrir invitación"
          aria-expanded={open}
          className="envelope relative mx-auto mb-6 mt-8 block h-[205px] w-[min(310px,80vw)] cursor-pointer touch-manipulation border border-[#cbb47c] bg-paper shadow-[0_18px_45px_#705b4825] [perspective:800px] focus-visible:outline-3 focus-visible:outline-offset-[6px] focus-visible:outline-gold"
        >
          <span className="envelope-lines absolute inset-0" aria-hidden="true" />
          <span
            className="envelope-flap absolute inset-x-0 top-0 z-10 h-[112px] bg-[#e9dfc8]"
            aria-hidden="true"
          />
          <span
            className="envelope-seal seal-gradient absolute left-1/2 top-[83px] z-20 grid size-12 -translate-x-1/2 place-items-center rounded-full text-lg italic text-white shadow-[0_3px_9px_#0002] transition-opacity duration-200"
            aria-hidden="true"
          >
            {'D&S'}
          </span>
        </button>

        <p className="font-sans text-[11px] uppercase tracking-[0.18em] text-gold-deep">
          Pulsa el sobre para abrir
        </p>
      </div>
    </div>
  )
}
