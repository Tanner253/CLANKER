import { useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import { CA, LINKS } from '../config.js'
import { SabotageTarget } from './SabotageTarget.jsx'

function shortCa(value) {
  return `${value.slice(0, 6)}…${value.slice(-6)}`
}

export default function CaBar() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CA)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="ca-bar">
      <div className="ca-bar-inner">
        <span className="ca-label">CA</span>
        <code className="ca-full">{CA}</code>
        <code className="ca-short">{shortCa(CA)}</code>
        <SabotageTarget id="copy-ca" className="ca-copy" onClick={copy}>
          <FaCopy />
          {copied ? 'Copied' : 'Tap to copy'}
        </SabotageTarget>
      </div>
      <div className="ca-links">
        <a href={LINKS.pump} target="_blank" rel="noreferrer">
          LIVE view on pump.fun ↗
        </a>
        <a href={LINKS.dexscreener} target="_blank" rel="noreferrer">
          view on dexscreener ↗
        </a>
      </div>
    </div>
  )
}
