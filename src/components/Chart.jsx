import { CHART_EMBED, LINKS } from '../config.js'

export default function Chart() {
  return (
    <section className="section chart-section" id="chart">
      <p className="eyebrow">live · solana</p>
      <h2>Watch the meatbags panic.</h2>
      <p className="section-copy">
        The chart is the whole scoreboard. Tap it. Pinch it. Cry at it.
      </p>
      <div className="chart-frame">
        <iframe
          title="$CLANKER DexScreener chart"
          src={CHART_EMBED}
          loading="lazy"
        />
      </div>
      <a className="btn btn-ghost" href={LINKS.dexscreener} target="_blank" rel="noreferrer">
        Open on Dexscreener ↗
      </a>
    </section>
  )
}
