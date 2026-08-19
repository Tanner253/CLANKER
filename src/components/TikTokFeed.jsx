import { TIKTOK_VIDEOS } from '../config.js'
import { tiktokEmbedSrc, tiktokVideoId } from '../lib/tiktok.js'

const EMBEDS = TIKTOK_VIDEOS.map(tiktokVideoId).filter(Boolean)

export default function TikTokFeed() {
  if (EMBEDS.length === 0) return null

  return (
    <div className="tiktok-feed" aria-label="Clanker TikToks">
      {EMBEDS.map((id) => (
        <iframe
          key={id}
          className="tiktok-frame"
          title={`TikTok ${id}`}
          src={tiktokEmbedSrc(id)}
          allow="encrypted-media; fullscreen; picture-in-picture; accelerometer; gyroscope"
          allowFullScreen
          loading="lazy"
        />
      ))}
    </div>
  )
}
