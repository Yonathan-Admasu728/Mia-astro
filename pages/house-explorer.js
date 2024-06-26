import { useState } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import styles from '../styles/HouseExplorer.module.css'

const houseData = {
  1: { sign: "Aquarius", description: "The 1st house represents Mia's self-image and approach to life. With Aquarius here, she may come across as unique, intellectual, and progressive." },
  2: { sign: "Pisces", description: "The 2nd house relates to values and resources. Pisces here suggests Mia might be easygoing about money matters and value spiritual or artistic pursuits." },
  3: { sign: "Taurus", description: "The 3rd house governs communication and learning. Taurus here indicates Mia may have a deliberate and practical approach to communication and education." },
  4: { sign: "Gemini", description: "The 4th house represents home and family. Gemini here suggests Mia might experience frequent changes in her living situation or have a lively home environment." },
  5: { sign: "Gemini", description: "The 5th house relates to creativity and pleasure. With Gemini here, Mia likely enjoys variety in her hobbies and may have a talent for communication or writing." },
  6: { sign: "Cancer", description: "The 6th house governs work and health. Cancer here suggests Mia might be nurturing in her work environment and may be intuitive about health matters." },
  7: { sign: "Leo", description: "The 7th house represents partnerships. Leo here indicates Mia may seek partners who are confident and charismatic, and she values loyalty in relationships." },
  8: { sign: "Virgo", description: "The 8th house relates to transformation and shared resources. Virgo here suggests Mia may be analytical about financial partnerships and methodical in personal growth." },
  9: { sign: "Scorpio", description: "The 9th house governs philosophy and travel. Scorpio here indicates Mia may have intense beliefs and be drawn to exploring life's mysteries through travel or education." },
  10: { sign: "Sagittarius", description: "The 10th house represents career and public image. Sagittarius here suggests Mia may seek a career that offers freedom, adventure, or the opportunity to expand her knowledge." },
  11: { sign: "Sagittarius", description: "The 11th house relates to friendships and goals. With Sagittarius here, Mia likely has a diverse social circle and ambitious, possibly idealistic, long-term goals." },
  12: { sign: "Capricorn", description: "The 12th house governs the subconscious and hidden aspects of life. Capricorn here suggests Mia may have a structured approach to spiritual matters or may need to learn to address her vulnerabilities." }
}

export default function HouseExplorer() {
  const [activeHouse, setActiveHouse] = useState(null)

  return (
    <Layout>
      <div className={styles.container}>
      <BackButton />
        <h1 className={styles.title}>House Explorer</h1>
        <div className={styles.houseGrid}>
          {Object.entries(houseData).map(([house, data]) => (
            <div
              key={house}
              className={`${styles.houseCard} ${activeHouse === house ? styles.active : ''}`}
              onClick={() => setActiveHouse(activeHouse === house ? null : house)}
            >
              <h2>House {house}</h2>
              <p><strong>Sign:</strong> {data.sign}</p>
              {activeHouse === house && (
                <div className={styles.description}>
                  <p>{data.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}