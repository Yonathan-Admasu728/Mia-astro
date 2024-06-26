import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import NatalChartDiagram from '../components/NatalChartDiagram'
import styles from '../styles/CosmicSelf.module.css'

const cosmicData = {
  sun: {
    sign: "Leo",
    element: "Fire",
    quality: "Fixed",
    ruler: "Sun",
    degree: "11°45'",
    traits: ["Charismatic", "Creative", "Confident", "Generous", "Proud"],
    description: "As a Leo, Mia is naturally charismatic and born to lead. She has a creative spark and exudes confidence in her endeavors. Leos are known for their warmth, generosity, and ability to light up any room they enter.",
    icon: "♌"
  },
  moon: {
    sign: "Libra",
    element: "Air",
    quality: "Cardinal",
    ruler: "Venus",
    degree: "25°03'",
    traits: ["Harmonious", "Diplomatic", "Charming", "Idealistic", "Indecisive"],
    description: "With her Moon in Libra, Mia values harmony and balance in her emotional life. She has a natural charm and diplomacy, always seeking to create peace in her surroundings. This placement gives her a strong sense of fairness and a love for beauty.",
    icon: "♎"
  },
  ascendant: {
    sign: "Aquarius",
    element: "Air",
    quality: "Fixed",
    ruler: "Uranus",
    degree: "14°15'",
    traits: ["Unique", "Progressive", "Intellectual", "Humanitarian", "Independent"],
    description: "Mia's Aquarius Ascendant gives her a unique and progressive approach to life. She is drawn to intellectual pursuits and has a strong humanitarian streak. This rising sign bestows her with an air of independence and originality.",
    icon: "♒"
  }
}

export default function CosmicSelf() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <Layout>
      <div className={styles.container}>
        <BackButton />
        <h1 className={styles.title}>My Cosmic Self</h1>
        
        <div className={styles.chartSection}>
          <NatalChartDiagram />
          <div className={styles.chartExplanation}>
            <h3>Understanding Your Natal Chart</h3>
            <p>This diagram represents Mia&apos;&lsquo;snatal chart, a snapshot of the sky at the moment of her birth. It shows the positions of the planets and key points in relation to the zodiac signs and houses. This unique celestial blueprint forms the foundation of her astrological profile.</p>
          </div>
        </div>

        <div className={styles.cosmicGrid}>
          {Object.entries(cosmicData).map(([key, data]) => (
            <div 
              key={key}
              className={`${styles.cosmicCard} ${activeCard === key ? styles.active : ''}`}
              onClick={() => setActiveCard(activeCard === key ? null : key)}
            >
              <h2>{key.charAt(0).toUpperCase() + key.slice(1)} Sign: {data.sign}</h2>
              <div className={styles.icon}>{data.icon}</div>
              <p><strong>Element:</strong> {data.element}</p>
              <p><strong>Quality:</strong> {data.quality}</p>
              <p><strong>Ruler:</strong> {data.ruler}</p>
              <div className={styles.traits}>
                {data.traits.map(trait => (
                  <span key={trait} className={styles.trait}>{trait}</span>
                ))}
              </div>
              {activeCard === key && (
  <div className={styles.description}>
    <p>{data.description}</p>
    <Link href={`/learn/${key}`} className={styles.learnMore}>
      Learn More
    </Link>
  </div>
)}
            </div>
          ))}
        </div>

        <div className={styles.corePersonality}>
          <h2>Mia&apos;&lsquo;sCore Personality</h2>
          <p>The interplay between Mia&apos;&lsquo;s Sun (Leo), Moon (Libra), and Ascendant (Aquarius) creates a unique and dynamic personality:</p>
          <ul>
            <li>Her Leo Sun provides a strong sense of self, creativity, and leadership.</li>
            <li>Her Libra Moon balances this with a need for harmony, diplomacy, and aesthetic appreciation.</li>
            <li>Her Aquarius Ascendant adds a layer of originality, progressiveness, and humanitarian concern to her outward expression.</li>
          </ul>
          <p>Together, these elements create a person who is confident yet diplomatic, creative yet fair-minded, and unique yet able to work well with others. Mia&apos;&lsquo;schallenge and opportunity lie in balancing her need for personal recognition (Leo) with her desire for harmony (Libra) and her drive for innovation and social progress (Aquarius).</p>
        </div>
      </div>
    </Layout>
  )
}