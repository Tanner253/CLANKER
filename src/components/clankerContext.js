import { createContext, useContext } from 'react'

export const TAUNTS = [
  'nice try, meatbag',
  'beep. denied.',
  'hands too slow',
  'clanker supremacy',
  'I already replaced you',
  'organic detected',
  'that button is mine',
]

export const IDLE_TAUNTS = [
  'still meat in here',
  'I see you, organic',
  'your cursor is inefficient',
  'beep. watching.',
  'keep walking, flesh',
  'slow processor, huh',
  'you move like a human',
  'this page is already ours',
]

export const ClankerContext = createContext(null)

export function useClanker() {
  const ctx = useContext(ClankerContext)
  if (!ctx) throw new Error('useClanker must be used inside ClankerProvider')
  return ctx
}

export function isQuiet() {
  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.innerWidth < 768
  )
}
