import { useState } from 'react'
import bannerImg from '../assets/banner.png'
import passImg from '../assets/cword-pass.png'
import tokenImg from '../assets/token.png'

const MEMES = [
  { src: tokenImg, name: 'clanker-token.png', label: 'Token pic', fit: 'contain' },
  { src: passImg, name: 'cword-pass.png', label: 'C-Word Pass', fit: 'contain' },
  { src: bannerImg, name: 'clanker-banner.png', label: 'Banner', fit: 'cover' },
]

async function blobFrom(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('fetch failed')
  return response.blob()
}

async function downloadAsset(url, name) {
  const blob = await blobFrom(url)
  const href = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = href
  link.download = name
  link.click()
  URL.revokeObjectURL(href)
}

async function copyAsset(url) {
  const blob = await blobFrom(url)
  if (!navigator.clipboard?.write) throw new Error('clipboard unavailable')
  const type = blob.type || 'image/png'
  await navigator.clipboard.write([new ClipboardItem({ [type]: blob })])
}

function StillCard({ item }) {
  const [status, setStatus] = useState('')
  const flash = (text) => {
    setStatus(text)
    window.setTimeout(() => setStatus(''), 1600)
  }

  return (
    <article className="meme-card">
      <div className={`meme-frame is-${item.fit}`}>
        <img src={item.src} alt={item.label} />
      </div>
      <div className="meme-actions">
        <button
          type="button"
          onClick={() => copyAsset(item.src).then(() => flash('Copied')).catch(() => flash('Copy failed'))}
        >
          Copy
        </button>
        <button
          type="button"
          onClick={() => downloadAsset(item.src, item.name).then(() => flash('Saved')).catch(() => flash('Save failed'))}
        >
          Download
        </button>
      </div>
      <p className="meme-status">{status || item.label}</p>
    </article>
  )
}

export default function MemeDepot() {
  return (
    <section className="section" id="memes">
      <p className="eyebrow">ammo</p>
      <h2>The Meme Depot</h2>
      <p className="section-copy">
        Token pic, C-Word Pass, banner. Copy or download and go raid. No scavenger
        hunt through old Telegram threads.
      </p>
      <div className="still-grid">
        {MEMES.map((item) => (
          <StillCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}
