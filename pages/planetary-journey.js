import { useState } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import styles from '../styles/PlanetaryJourney.module.css'

const planetaryData = {
  mercury: {
    sign: "Leo",
    house: "6th House",
    description: "Mercury in Leo gives Mia a confident and expressive communication style. She may have a flair for dramatic speech and enjoy being in the spotlight.",
    symbol: "☿",
    keywords: ["Communication", "Intellect", "Learning"],
    strengths: ["Charismatic speaking", "Creative thinking", "Leadership in communication"],
    challenges: ["May come across as boastful", "Could overlook details for dramatic effect"],
  },
  venus: {
    sign: "Cancer",
    house: "5th House",
    description: "Venus in Cancer indicates that Mia values emotional security in relationships. She may be nurturing and protective of loved ones.",
    symbol: "♀",
    keywords: ["Love", "Beauty", "Values"],
    strengths: ["Deep emotional connections", "Nurturing nature", "Appreciation for home and family"],
    challenges: ["Mood swings in relationships", "Tendency to be overprotective"],
  },
  mars: {
    sign: "Taurus",
    house: "3rd House",
    description: "Mars in Taurus suggests that Mia is a determined and methodical achiever. She may work steadily towards her goals with unwavering persistence.",
    symbol: "♂",
    keywords: ["Action", "Desire", "Energy"],
    strengths: ["Persistent effort", "Practical approach to goals", "Steady determination"],
    challenges: ["Can be stubborn", "Slow to anger but explosive when pushed too far"],
  },
  jupiter: {
    sign: "Aries",
    house: "2nd House",
    description: "Jupiter in Aries indicates that Mia may attract good fortune through initiative and pioneering efforts. She could be bold in pursuing opportunities.",
    symbol: "♃",
    keywords: ["Expansion", "Luck", "Philosophy"],
    strengths: ["Enthusiastic about new ventures", "Natural leadership in wealth creation", "Optimistic outlook"],
    challenges: ["Can be impulsive with resources", "Might take unnecessary risks"],
  },
  saturn: {
    sign: "Aquarius",
    house: "12th House",
    description: "Saturn in Aquarius suggests that Mia may be methodical and serious in intellectual pursuits. She might feel a strong sense of responsibility towards humanitarian causes.",
    symbol: "♄",
    keywords: ["Structure", "Discipline", "Responsibility"],
    strengths: ["Innovative approach to long-term planning", "Commitment to social causes", "Disciplined thinking"],
    challenges: ["May struggle with self-doubt in private", "Could feel isolated in pursuits"],
  },
  uranus: {
    sign: "Taurus",
    house: "3rd House",
    description: "Uranus in Taurus indicates that Mia may be innovative in practical matters. She might have unconventional ideas about resources and values.",
    symbol: "♅",
    keywords: ["Change", "Innovation", "Rebellion"],
    strengths: ["Original thinking in everyday matters", "Ability to revolutionize communication", "Practical creativity"],
    challenges: ["Can be stubborn about new ideas", "Might resist necessary changes"],
  },
  neptune: {
    sign: "Pisces",
    house: "1st House",
    description: "Neptune in Pisces enhances Mia's intuition and sensitivity. She may have a strong spiritual or artistic inclination.",
    symbol: "♆",
    keywords: ["Imagination", "Spirituality", "Illusion"],
    strengths: ["Strong intuition", "Artistic and spiritual gifts", "Compassionate nature"],
    challenges: ["May struggle with reality vs. fantasy", "Could be easily influenced by others"],
  },
  pluto: {
    sign: "Capricorn",
    house: "11th House",
    description: "Pluto in Capricorn suggests that Mia may experience transformative experiences related to social structures and long-term goals.",
    symbol: "♇",
    keywords: ["Transformation", "Power", "Rebirth"],
    strengths: ["Ability to create deep change in social circles", "Powerful drive for achievement", "Transformative leadership"],
    challenges: ["May struggle with power dynamics in friendships", "Could be overly intense about future plans"],
  },
}

export default function PlanetaryJourney() {
  const [activePlanet, setActivePlanet] = useState(null)

  return (
    <Layout>
      <div className={styles.container}>
        <BackButton />
        <h1 className={styles.title}>Planetary Journey</h1>
        <p className={styles.intro}>Explore how each planet influences different aspects of Mia&lsquo;s life and personality.</p>
        <div className={styles.planetGrid}>
          {Object.entries(planetaryData).map(([planet, data]) => (
            <div
              key={planet}
              className={`${styles.planetCard} ${activePlanet === planet ? styles.active : ''}`}
              onClick={() => setActivePlanet(activePlanet === planet ? null : planet)}
            >
              <h2>{data.symbol} {planet.charAt(0).toUpperCase() + planet.slice(1)}</h2>
              <p><strong>Sign:</strong> {data.sign}</p>
              <p><strong>House:</strong> {data.house}</p>
              {activePlanet === planet && (
                <div className={styles.expandedInfo}>
                  <p className={styles.description}>{data.description}</p>
                  <div className={styles.keywords}>
                    <h3>Keywords:</h3>
                    <ul>
                      {data.keywords.map((keyword, index) => (
                        <li key={index}>{keyword}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.strengths}>
                    <h3>Strengths:</h3>
                    <ul>
                      {data.strengths.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.challenges}>
                    <h3>Challenges:</h3>
                    <ul>
                      {data.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}