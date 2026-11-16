import { EnvelopeScreen } from '@/components/invitation/envelope-screen'
import { Hero } from '@/components/invitation/hero'
import { Story } from '@/components/invitation/story'
import { EventDetails } from '@/components/invitation/event-details'
import { DressCode } from '@/components/invitation/dress-code'
import { RsvpSection } from '@/components/invitation/rsvp-section'
import { getGuest } from '@/lib/guests'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ g?: string | string[] }>
}) {
  const { g } = await searchParams
  const guestId = Array.isArray(g) ? g[0] : g
  const guest = getGuest(guestId?.toLowerCase())

  return (
    <>
      <EnvelopeScreen />
      <Hero guestName={guest?.name} />
      <main>
        <Story />
        <EventDetails />
        <DressCode />
        <RsvpSection guest={guest} />
      </main>
      <footer className="bg-ink px-5 py-11 text-center italic text-champagne">
        <p className="mb-4 text-4xl">Diego &amp; Sofía</p>
        <p>Con amor, esperamos compartir este día contigo.</p>
      </footer>
    </>
  )
}
