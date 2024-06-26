import { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import styles from '../styles/StarryMeditation.module.css'

const meditations = [
  {
    title: "Leo Sun Empowerment",
    description: "Connect with your inner lion and embrace your natural leadership.",
    duration: 5, // minutes
    affirmation: "I am confident, creative, and shine my light brightly.",
    audioSrc: "/audio/leo-sun-meditation.mp3"
  },
  {
    title: "Libra Moon Balance",
    description: "Find emotional harmony and peace within yourself.",
    duration: 7,
    affirmation: "I am balanced, harmonious, and at peace with myself and others.",
    audioSrc: "/audio/libra-moon-meditation.mp3"
  },
  {
    title: "Aquarius Rising Innovation",
    description: "Tap into your unique perspective and innovative ideas.",
    duration: 6,
    affirmation: "I embrace my individuality and inspire positive change in the world.",
    audioSrc: "/audio/aquarius-rising-meditation.mp3"
  },
  {
    title: "Cosmic Connection",
    description: "Align yourself with the energy of the cosmos.",
    duration: 10,
    affirmation: "I am one with the universe, guided by celestial wisdom.",
    audioSrc: "/audio/cosmic-connection-meditation.mp3"
  }
]

export default function StarryMeditation() {
  const [activeMeditation, setActiveMeditation] = useState(null)
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef(null)
  const ambientAudioRef = useRef(null)

  useEffect(() => {
    let interval = null;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
        setProgress(prev => prev + (100 / (meditations[activeMeditation].duration * 60)));
      }, 1000);
    } else if (timer === 0) {
      setIsActive(false);
      if (audioRef.current) audioRef.current.pause();
      if (ambientAudioRef.current) ambientAudioRef.current.pause();
    }
    return () => clearInterval(interval);
  }, [isActive, timer, activeMeditation]);

  const startMeditation = (index) => {
    setActiveMeditation(index)
    setTimer(meditations[index].duration * 60)
    setProgress(0)
    setIsActive(true)
    if (audioRef.current) {
      audioRef.current.src = meditations[index].audioSrc;
      audioRef.current.play();
    }
    if (ambientAudioRef.current) {
      ambientAudioRef.current.play();
    }
  }

  const togglePause = () => {
    setIsActive(!isActive);
    if (audioRef.current) {
      isActive ? audioRef.current.pause() : audioRef.current.play();
    }
    if (ambientAudioRef.current) {
      isActive ? ambientAudioRef.current.pause() : ambientAudioRef.current.play();
    }
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  }

  return (
    <Layout>
      <div className={styles.container}>
      <BackButton />
        <h1 className={styles.title}>Starry Meditation</h1>
        {activeMeditation === null ? (
          <div className={styles.meditationGrid}>
            {meditations.map((meditation, index) => (
              <div key={index} className={styles.meditationCard} onClick={() => startMeditation(index)}>
                <h2>{meditation.title}</h2>
                <p>{meditation.description}</p>
                <p>Duration: {meditation.duration} minutes</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.activeMediation}>
            <h2>{meditations[activeMeditation].title}</h2>
            <p className={styles.affirmation}>{meditations[activeMeditation].affirmation}</p>
            <div className={styles.timerContainer}>
              <div className={styles.progressCircle} style={{ background: `conic-gradient(#ffd700 ${progress}%, transparent ${progress}%)`}}>
                <div className={styles.timer}>{formatTime(timer)}</div>
              </div>
            </div>
            {timer === 0 ? (
              <button className={styles.doneButton} onClick={() => setActiveMeditation(null)}>Done</button>
            ) : (
              <button className={styles.pauseButton} onClick={togglePause}>
                {isActive ? 'Pause' : 'Resume'}
              </button>
            )}
          </div>
        )}
        <audio ref={audioRef} />
        <audio ref={ambientAudioRef} loop src="/audio/ambient-space.mp3" />
      </div>
    </Layout>
  )
}