export const pointer = { x: -9999, y: -9999 }

let attached = false

export function trackPointer() {
  if (attached || typeof window === 'undefined') return
  attached = true
  window.addEventListener(
    'pointermove',
    (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    },
    { passive: true },
  )
}
