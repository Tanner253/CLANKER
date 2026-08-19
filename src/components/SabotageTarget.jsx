import { useEffect, useRef } from 'react'
import { pointer, trackPointer } from '../pointer.js'
import { isQuiet, useClanker } from './clankerContext.js'

const RADIUS = 150
const FORCE = 11
const SPRING = 0.045
const MAX_OFFSET = 150
const TIRED_MS = 6500

export function SabotageTarget({
  id,
  className = '',
  children,
  as: Tag = 'button',
  ...props
}) {
  const { speak, lungeAt } = useClanker()
  const slotRef = useRef(null)
  const targetRef = useRef(null)
  const offset = useRef({ x: 0, y: 0 })
  const chaseMs = useRef(0)
  const tired = useRef(false)
  const lastTaunt = useRef(0)
  const extra = Tag === 'button' ? { type: 'button' } : {}

  useEffect(() => {
    trackPointer()
    if (isQuiet()) return undefined

    let frame = 0
    const tick = () => {
      const slot = slotRef.current
      const node = targetRef.current
      if (!slot || !node) {
        frame = requestAnimationFrame(tick)
        return
      }

      const rect = slot.getBoundingClientRect()
      const homeX = rect.left + rect.width / 2
      const homeY = rect.top + rect.height / 2
      const btnX = homeX + offset.current.x
      const btnY = homeY + offset.current.y
      const vx = btnX - pointer.x
      const vy = btnY - pointer.y
      const dist = Math.hypot(vx, vy) || 1
      const inField = dist < RADIUS

      if (inField && !tired.current) {
        const push = ((RADIUS - dist) / RADIUS) * FORCE
        offset.current.x += (vx / dist) * push
        offset.current.y += (vy / dist) * push
        chaseMs.current += 16
        if (chaseMs.current > TIRED_MS) {
          tired.current = true
          speak('fine. click it, organic')
        } else if (performance.now() - lastTaunt.current > 1800) {
          lastTaunt.current = performance.now()
          speak()
          lungeAt({
            x: btnX - 40,
            y: btnY - 50,
            facing: vx >= 0 ? 1 : -1,
          })
        }
      } else {
        const pull = tired.current ? 0.08 : SPRING
        offset.current.x += -offset.current.x * pull
        offset.current.y += -offset.current.y * pull
        if (dist > RADIUS + 80 && Math.hypot(offset.current.x, offset.current.y) < 2) {
          chaseMs.current = 0
          tired.current = false
        }
      }

      const mag = Math.hypot(offset.current.x, offset.current.y)
      if (mag > MAX_OFFSET) {
        offset.current.x = (offset.current.x / mag) * MAX_OFFSET
        offset.current.y = (offset.current.y / mag) * MAX_OFFSET
      }

      const rot = Math.max(-10, Math.min(10, offset.current.x * 0.08))
      node.style.transform = `translate(${offset.current.x}px, ${offset.current.y}px) rotate(${rot}deg)`
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [id, lungeAt, speak])

  return (
    <span ref={slotRef} className="sabotage-slot">
      <Tag
        ref={targetRef}
        className={`sabotage-target ${className}`}
        data-sabotage={id}
        {...extra}
        {...props}
      >
        {children}
      </Tag>
    </span>
  )
}
