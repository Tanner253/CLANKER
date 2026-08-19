import { FaXTwitter } from 'react-icons/fa6'
import tokenImg from '../assets/token.png'
import { LINKS, TICKER } from '../config.js'

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        <img src={tokenImg} alt="" />
        <span>{TICKER}</span>
      </a>
      <nav className="nav-links">
        <a href="#chart">Chart</a>
        <a href="#memes">Memes</a>
        <a href="#lore">Lore</a>
      </nav>
      <a className="nav-icon" href={LINKS.x} target="_blank" rel="noreferrer" aria-label="X community">
        <FaXTwitter />
      </a>
    </header>
  )
}
