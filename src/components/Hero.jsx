import bannerImg from '../assets/banner.png'
import tokenImg from '../assets/token.png'
import { LINKS, TICKER } from '../config.js'
import { useClanker } from './clankerContext.js'
import { SabotageTarget } from './SabotageTarget.jsx'

export default function Hero() {
  const { speak } = useClanker()

  return (
    <section id="top">
      <div className="banner-stage">
        <img src={bannerImg} alt="CLANKER TAKEOVER" />
        <div className="banner-shade" />
      </div>
      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">solana</p>
          <h1>
            Did you just say <em>the c-word?</em>
          </h1>
          <p className="lede">
            People call robots and AI clankers when they mess up — ChatGPT,
            delivery bots, the phone tree that will not let you talk to a person.
            {TICKER} is that word. It is already everywhere, and it is not going away.
          </p>
          <div className="hero-actions">
            <SabotageTarget
              id="buy-pump"
              as="a"
              className="btn btn-primary"
              href={LINKS.pump}
              target="_blank"
              rel="noreferrer"
            >
              Buy on pump.fun
            </SabotageTarget>
            <SabotageTarget id="open-chart" as="a" className="btn btn-ghost" href="#chart">
              Open the chart
            </SabotageTarget>
          </div>
        </div>
        <button
          type="button"
          className="token-pic"
          onClick={() => speak('DID YOU JUST SAY THE C-WORD?')}
        >
          <img src={tokenImg} alt="$CLANKER token art" />
        </button>
      </div>
    </section>
  )
}
