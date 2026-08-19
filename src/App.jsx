import './App.css'
import CaBar from './components/CaBar.jsx'
import Chart from './components/Chart.jsx'
import { ClankerProvider } from './components/Clanker.jsx'
import Hero from './components/Hero.jsx'
import Lore from './components/Lore.jsx'
import MemeDepot from './components/MemeDepot.jsx'
import Nav from './components/Nav.jsx'
import Starfield from './components/Starfield.jsx'
import { LINKS, TICKER } from './config.js'

function App() {
  return (
    <ClankerProvider>
      <div className="page">
        <Starfield />
        <Nav />
        <CaBar />
        <main>
          <Hero />
          <Chart />
          <MemeDepot />
          <Lore />
        </main>
        <footer className="footer">
          <p>{TICKER} · please use responsibly</p>
          <a href={LINKS.x} target="_blank" rel="noreferrer">
            X community
          </a>
        </footer>
      </div>
    </ClankerProvider>
  )
}

export default App
