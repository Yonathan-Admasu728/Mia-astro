import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ExitButton from '../../components/ExitButton'
import styles from '../../styles/LearnMore.module.css'

const aspectData = {
    sun: {
      title: "The Sun in Astrology",
      content: "The Sun represents your core identity, ego, and life purpose. It's the center of your chart, just as it's the center of our solar system. Your Sun sign is what most people think of as their 'star sign'.",
      learnMore: "In Mia's chart, the Sun is in Leo in the 6th house. This placement suggests a natural leader who shines brightest when serving others or perfecting her skills."
    },
    moon: {
      title: "The Moon in Astrology",
      content: "The Moon represents your emotional nature, instincts, and subconscious mind. It governs your moods, feelings, and inner needs.",
      learnMore: "Mia's Moon is in Libra in the 8th house, indicating a deep need for emotional balance and harmony, especially in intimate relationships and shared resources."
    },
    ascendant: {
      title: "The Ascendant in Astrology",
      content: "The Ascendant, or Rising Sign, represents your outward behavior and the mask you wear when meeting others. It's the lens through which you view the world.",
      learnMore: "With Aquarius as her Ascendant, Mia comes across as unique, progressive, and intellectually oriented. She may have an unconventional approach to life that others find intriguing."
    }
  }

export default function LearnMore() {
  const router = useRouter()
  const { aspect } = router.query
  const data = aspectData[aspect]

  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <div className={styles.container}>
        <ExitButton />
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.content}>
          <p>{data.content}</p>
          <h2>In Mia&apos;&lsquo;s Chart</h2>
          <p>{data.learnMore}</p>
        </div>
      </div>
    </Layout>
  )
}