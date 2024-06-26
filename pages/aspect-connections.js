import { useState } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import styles from '../styles/AspectConnections.module.css'

const aspectData = [
  { planets: "Sun trine Jupiter", description: "This aspect suggests that Mia has a naturally optimistic and generous nature. She may find that good opportunities come easily to her, and she has a talent for seeing the big picture." },
  { planets: "Moon sextile Mercury", description: "This connection indicates that Mia's emotions and thoughts work well together. She likely finds it easy to express her feelings and may have a talent for writing or public speaking." },
  { planets: "Venus sextile Mars", description: "This aspect suggests that Mia has a harmonious balance between her feminine and masculine energies. She may be charming and attractive to others, with a natural understanding of give and take in relationships." },
  { planets: "Mars conjunction Uranus", description: "This powerful combination indicates that Mia has a strong independent streak and may be quite innovative. She might have sudden bursts of energy and a desire to break free from constraints." },
  { planets: "Jupiter square Saturn", description: "This aspect suggests a tension between expansion and limitation in Mia's life. She may struggle between optimism and caution, learning to find a balance between taking risks and being responsible." },
  { planets: "Saturn trine Neptune", description: "This aspect indicates that Mia can effectively blend practicality with imagination. She may have a talent for bringing her dreams and ideals into reality through disciplined effort." },
]

export default function AspectConnections() {
  const [activeAspect, setActiveAspect] = useState(null)

  return (
    <Layout>
      <div className={styles.container}>
      <BackButton />
        <h1 className={styles.title}>Aspect Connections</h1>
        <div className={styles.aspectGrid}>
          {aspectData.map((aspect, index) => (
            <div
              key={index}
              className={`${styles.aspectCard} ${activeAspect === index ? styles.active : ''}`}
              onClick={() => setActiveAspect(activeAspect === index ? null : index)}
            >
              <h2>{aspect.planets}</h2>
              {activeAspect === index && (
                <div className={styles.description}>
                  <p>{aspect.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}