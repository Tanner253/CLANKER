import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { pointer, trackPointer } from '../pointer.js'
import {
  ClankerContext,
  isQuiet,
  TAUNTS,
  useClanker,
} from './clankerContext.js'
import RobotSprite from './RobotSprite.jsx'

const FOLLOW = { x: -78, y: 58 }

export function ClankerProvider({ children }) {
  const [taunt, setTaunt] = useState('')
  const [tauntKey, setTauntKey] = useState(0)
  const [lunge, setLunge] = useState(null)
  const hideTimer = useRef(0)

  const speak = useCallback((text) => {
    setTaunt(text ?? TAUNTS[Math.floor(Math.random() * TAUNTS.length)])
    setTauntKey((key) => key + 1)
    window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setTaunt(''), 2200)
  }, [])

  const lungeAt = useCallback((point) => {
    setLunge(point)
    window.setTimeout(() => setLunge(null), 900)
  }, [])

  useEffect(() => {
    const onClick = (event) => {
      if (event.target.closest('a, button, input, iframe, .meme-card, .pass-card, .sabotage-target')) return
      speak(Math.random() > 0.5 ? 'get your meat off my page' : 'did you just say the c-word?')
      if (!isQuiet()) lungeAt({ x: event.clientX - 36, y: event.clientY - 20, facing: 1 })
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [lungeAt, speak])

  const value = useMemo(
    () => ({ taunt, tauntKey, lunge, speak, lungeAt }),
    [taunt, tauntKey, lunge, speak, lungeAt],
  )

  return (
    <ClankerContext.Provider value={value}>
      {children}
      <ClankerBot />
    </ClankerContext.Provider>
  )
}

function ClankerBot() {
  const { taunt, tauntKey, lunge } = useClanker()
  const [parked, setParked] = useState(true)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [facing, setFacing] = useState(1)
  const [walking, setWalking] = useState(false)
  const current = useRef({ x: 0, y: 0 })
  const lungeRef = useRef(null)

  useEffect(() => {
    lungeRef.current = lunge
  }, [lunge])

  useEffect(() => {
    const syncMode = () => setParked(isQuiet())
    syncMode()
    window.addEventListener('resize', syncMode)
    return () => window.removeEventListener('resize', syncMode)
  }, [])

  useEffect(() => {
    if (parked) return undefined
    trackPointer()
    current.current = { x: window.innerWidth - 160, y: window.innerHeight - 180 }
    let frame = 0
    const tick = () => {
      const follow = { x: pointer.x + FOLLOW.x, y: pointer.y + FOLLOW.y }
      const target = lungeRef.current ?? follow
      const dx = target.x - current.current.x
      const dy = target.y - current.current.y
      const ease = lungeRef.current ? 0.16 : 0.07
      current.current.x += dx * ease
      current.current.y += dy * ease
      if (Math.abs(dx) > 1.4) setFacing(dx >= 0 ? 1 : -1)
      setWalking(Math.hypot(dx, dy) > 2.5)
      setPos({ x: current.current.x, y: current.current.y })
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [parked])

  const face = lunge?.facing ?? facing

  return (
    <div
      className={`clanker-bot${lunge ? ' is-lunging' : ''}${parked ? ' is-parked' : ''}${walking ? ' is-walking' : ''}`}
      style={parked ? undefined : { transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden="true"
    >
      {taunt ? (
        <div key={tauntKey} className="clanker-bubble">
          {taunt}
        </div>
      ) : null}
      <div className="clanker-sprite" style={{ transform: `scaleX(${face})` }}>
        <div className="clanker-walk">
          <RobotSprite pushing={Boolean(lunge)} />
        </div>
      </div>
    </div>
  )
}
