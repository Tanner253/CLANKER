import { useState, useMemo, useEffect, useRef } from 'react'
import './App.css'
import bannerImg from './assets/BANNER.jpg'
import portraitImg from './assets/profile pic.png'
import iconImg from './assets/ICon.jpg'
import alphaImg from './assets/ALPHA.png'
import { FaTwitter, FaCopy, FaVolumeUp, FaVolumeMute, FaTiktok, FaTelegram } from 'react-icons/fa'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import spaceAmbience from './assets/ambient-soundscapes-007-space-atmosphere-304974.mp3'
import clankbeatVideo from './assets/CLANKBEAT.mp4'
import clankerVideo from './assets/CLANKER.mp4'
import keepitgoingVideo from './assets/KEEPITGOING.mp4'
import jumptVideo from './assets/jumpt.mp4'
import dirtyClankVideo from './assets/DIRTYCLANK.mp4'

function App() {
  const contractAddress = 'DeBnWpmtZyQJ6anXD6ie3CDW2BsTKWWzaWEndKmuxray'
  const xCommunityLink = 'https://x.com/i/communities/1942266643608228197'
  const tiktokLink = 'https://www.tiktok.com/search?q=CLANKER&t=1751915588970'
  const telegramLink = 'https://t.me/CLANKERCTO'
  const raydiumLink = 'https://raydium.io/launchpad/token/?mint=DeBnWpmtZyQJ6anXD6ie3CDW2BsTKWWzaWEndKmuxray&fromCreate=true'
  const [copyFeedback, setCopyFeedback] = useState('')
  const [isAlphaModalOpen, setIsAlphaModalOpen] = useState(false)
  const [isChartModalOpen, setIsChartModalOpen] = useState(false)
  const [init, setInit] = useState(false)
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isAmbientPaused, setIsAmbientPaused] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted])
  
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleAudioEnd = () => {
        audio.currentTime = 0;
        audio.play();
      };
      audio.addEventListener('ended', handleAudioEnd);
      return () => {
        audio.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isAmbientPaused) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => console.log("Autoplay was prevented: ", error))
      }
    }
  }, [isAmbientPaused])

  useEffect(() => {
    if(init && audioRef.current && !isAmbientPaused) {
      audioRef.current.play().catch(error => console.log("Autoplay was prevented: ", error))
    }
  }, [init, isAmbientPaused])

  const particlesLoaded = (container) => {
    console.log("Particles loaded", container)
  }

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 0.1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 }
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setCopyFeedback('Copied!')
      setTimeout(() => setCopyFeedback(''), 2000)
    }, () => {
      setCopyFeedback('Failed to copy')
      setTimeout(() => setCopyFeedback(''), 2000)
    })
  }

  const handleVideoPlay = () => {
    setIsAmbientPaused(true)
  }

  const handleVideoPauseOrEnd = () => {
    setIsAmbientPaused(false)
  }

  if (init) {
    return (
      <div className="App">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className="header-buttons-container">
          <button onClick={() => setIsAlphaModalOpen(true)} className="alpha-button">ALPHA</button>
          <button onClick={() => setIsChartModalOpen(true)} className="chart-button">CHART</button>
          <a href={raydiumLink} target="_blank" rel="noopener noreferrer" className="raydium-button">RAYDIUM</a>
        </div>

        {isAlphaModalOpen && (
          <div className="modal-overlay" onClick={() => setIsAlphaModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsAlphaModalOpen(false)} className="close-button">&times;</button>
              <img src={alphaImg} alt="Alpha" className="modal-image" />
            </div>
          </div>
        )}

        {isChartModalOpen && (
          <div className="modal-overlay" onClick={() => setIsChartModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setIsChartModalOpen(false)} className="close-button">&times;</button>
              <iframe src="https://dexscreener.com/solana/DeBnWpmtZyQJ6anXD6ie3CDW2BsTKWWzaWEndKmuxray?embed=1&loadChartSettings=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=1&chartType=marketCap&interval=60"></iframe>
            </div>
          </div>
        )}

        <audio ref={audioRef} src={spaceAmbience} loop />
        <div className="audio-controls">
          <button onClick={() => setIsMuted(!isMuted)} className="mute-button">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="volume-slider"
          />
        </div>
        <img src={bannerImg} className="banner" alt="Banner" />
        <div className="content">
          <div className="portrait-container">
            <img src={portraitImg} className="portrait" alt="Portrait" />
            <div className="meme-quote quote1">"You only lose if you sell" - Warren Buffet</div>
            <div className="meme-quote quote2">"To the moon!"</div>
            <div className="meme-quote quote3">"WAGMI"</div>
          </div>
          <div className="title-container">
            <img src={iconImg} className="icon" alt="Icon" />
            <h1>$CLANKER</h1>
          </div>
          
          <div className="contract-info">
            <span className="contract-address">{contractAddress}</span>
            <button onClick={handleCopy} className="copy-button">
              <FaCopy />
            </button>
          </div>
          <div className="copy-feedback">{copyFeedback}</div>

          <div className="social-links">
            <a href={xCommunityLink} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
          </div>

          <div className="body-text">
            <p>$Clanker is an offensive slur used to describe robots and AIs. I lost my software engineering job to them, and I hate them. I HATE CLANKERS!</p>
            <p>The robots in the picture are filthy $Clankers. As a term, "Clanker" is infinitely memeable and growing in usage daily. It's used and laughed at on xQc's stream—slowly at first, then all at once.</p>
          </div>

          <div className="updates-notice">
            More updates coming soon...
          </div>
        </div>

        <div className="video-gallery">
          <video 
            src={dirtyClankVideo} 
            controls 
            onPlay={handleVideoPlay} 
            onPause={handleVideoPauseOrEnd} 
            onEnded={handleVideoPauseOrEnd}
          />
          <video src={clankbeatVideo} autoPlay loop muted playsInline />
          <video src={clankerVideo} autoPlay loop muted playsInline />
          <video src={keepitgoingVideo} autoPlay loop muted playsInline />
          <video src={jumptVideo} autoPlay loop muted playsInline />
        </div>
      </div>
    )
  }

  return <></>
}

export default App
