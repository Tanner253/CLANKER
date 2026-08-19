import { useMemo } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Starfield() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          repulse: { distance: 90, duration: 0.35 },
          push: { quantity: 3 },
        },
      },
      particles: {
        color: { value: ['#ffffff', '#ffc107', '#7ec8ff'] },
        move: {
          enable: true,
          speed: 0.35,
          direction: 'none',
          outModes: { default: 'out' },
        },
        number: { density: { enable: true }, value: 180 },
        opacity: { value: { min: 0.15, max: 0.7 } },
        size: { value: { min: 0.6, max: 2.4 } },
        shape: { type: 'circle' },
      },
    }),
    [],
  )

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles id="tsparticles" className="starfield" options={options} />
    </ParticlesProvider>
  )
}
