import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import LessonIcon from '../components/LessonIcon'
import Quiz from '../components/Quiz'
import styles from '../styles/CosmicLessons.module.css'

const lessons = [
  {
    title: "Understanding Your Sun Sign",
    content: "Your Sun sign, Leo, represents your core identity and ego. Leos are known for their confidence, creativity, and natural leadership abilities. Learn to embrace your inner lion and shine your light on the world around you.",
    icon: "sun",
    quiz: [
      {
        question: "What quality is most associated with Leo?",
        options: ["Shyness", "Confidence", "Pessimism", "Coldness"],
        answer: 1
      },
      {
        question: "Which element is Leo associated with?",
        options: ["Earth", "Air", "Fire", "Water"],
        answer: 2
      }
    ]
  },
  {
    title: "Exploring Your Moon Sign",
    content: "Your Moon sign, Libra, reflects your emotional nature and inner world. With the Moon in Libra, you seek harmony and balance in your emotional life. Learn to navigate your feelings through diplomacy and artistic expression.",
    icon: "moon",
    quiz: [
      {
        question: "What does the Moon sign represent in astrology?",
        options: ["Physical appearance", "Career path", "Emotional nature", "Communication style"],
        answer: 2
      },
      {
        question: "Which planet rules Libra?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: 1
      }
    ]
  },
  {
    title: "The Power of Your Ascendant",
    content: "Your Ascendant (Rising Sign) in Aquarius shapes how others perceive you and your approach to the world. Embrace your unique perspective and innovative ideas. Your quirky charm can inspire others to think outside the box.",
    icon: "ascendant",
    quiz: [
      {
        question: "What is another term for the Ascendant?",
        options: ["Setting Sign", "Midheaven", "Rising Sign", "Descendant"],
        answer: 2
      },
      {
        question: "Which area of life does the Ascendant primarily influence?",
        options: ["Inner emotions", "Career", "Relationships", "Outward personality"],
        answer: 3
      }
    ]
  },
  {
    title: "Balancing Elements in Your Chart",
    content: "Your chart has a mix of Fire (Leo Sun), Air (Libra Moon, Aquarius Rising), and other elements. Learn how to balance your fiery passion with air's intellectual approach to create harmony in your life.",
    icon: "elements",
    quiz: [
      {
        question: "How many elements are there in astrology?",
        options: ["3", "4", "5", "6"],
        answer: 1
      },
      {
        question: "Which element is associated with intellect and communication?",
        options: ["Fire", "Earth", "Air", "Water"],
        answer: 2
      }
    ]
  },
  {
    title: "Understanding Astrological Houses",
    content: "The 12 houses in your chart represent different areas of life. For example, your Leo Sun in the 6th house suggests you shine in day-to-day work and health routines. Explore how each house influences various aspects of your life.",
    icon: "houses",
    quiz: [
      {
        question: "How many houses are there in an astrological chart?",
        options: ["10", "12", "14", "16"],
        answer: 1
      },
      {
        question: "Which house is traditionally associated with career and public image?",
        options: ["1st House", "4th House", "7th House", "10th House"],
        answer: 3
      }
    ]
  },
  {
    title: "The Role of Planets in Your Chart",
    content: "Each planet in your chart represents different aspects of your personality and life experiences. For instance, Venus in Cancer in your chart suggests you value emotional security in relationships. Discover what each planet means for you.",
    icon: "planets",
    quiz: [
      {
        question: "Which planet is associated with communication and learning?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        answer: 2
      },
      {
        question: "What does Venus represent in astrology?",
        options: ["Aggression", "Love and values", "Expansion", "Limitations"],
        answer: 1
      }
    ]
  }
]

export default function CosmicLessons() {
  const [activeLesson, setActiveLesson] = useState(null)
  const [progress, setProgress] = useState({})
  const [bookmarks, setBookmarks] = useState([])
  const [quizMode, setQuizMode] = useState(false)

  useEffect(() => {
    const savedProgress = localStorage.getItem('lessonProgress')
    const savedBookmarks = localStorage.getItem('lessonBookmarks')
    if (savedProgress) setProgress(JSON.parse(savedProgress))
    if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks))
  }, [])

  const handleLessonComplete = (index) => {
    const newProgress = { ...progress, [index]: true }
    setProgress(newProgress)
    localStorage.setItem('lessonProgress', JSON.stringify(newProgress))
  }

  const toggleBookmark = (index) => {
    const newBookmarks = bookmarks.includes(index)
      ? bookmarks.filter(i => i !== index)
      : [...bookmarks, index]
    setBookmarks(newBookmarks)
    localStorage.setItem('lessonBookmarks', JSON.stringify(newBookmarks))
  }

  const navigateLesson = (direction) => {
    if (activeLesson === null) return
    const newIndex = activeLesson + direction
    if (newIndex >= 0 && newIndex < lessons.length) {
      setActiveLesson(newIndex)
      setQuizMode(false)
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
      <BackButton />
        <h1 className={styles.title}>Cosmic Lessons</h1>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{width: `${(Object.keys(progress).length / lessons.length) * 100}%`}}
          ></div>
        </div>
        {activeLesson !== null ? (
          <div className={styles.lessonDetail}>
            <h2>{lessons[activeLesson].title}</h2>
            {!quizMode ? (
              <>
                <p>{lessons[activeLesson].content}</p>
                <button className={styles.quizButton} onClick={() => setQuizMode(true)}>Take Quiz</button>
              </>
            ) : (
              <Quiz 
                questions={lessons[activeLesson].quiz} 
                onComplete={() => {
                  handleLessonComplete(activeLesson)
                  setQuizMode(false)
                }}
              />
            )}
            <div className={styles.navigationButtons}>
              <button onClick={() => navigateLesson(-1)} disabled={activeLesson === 0}>Previous Lesson</button>
              <button onClick={() => navigateLesson(1)} disabled={activeLesson === lessons.length - 1}>Next Lesson</button>
            </div>
            <button 
              className={styles.bookmarkButton}
              onClick={() => toggleBookmark(activeLesson)}
            >
              {bookmarks.includes(activeLesson) ? 'Unbookmark' : 'Bookmark'}
            </button>
            <button className={styles.backButton} onClick={() => setActiveLesson(null)}>Back to Lessons</button>
          </div>
        ) : (
          <div className={styles.lessonGrid}>
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className={`${styles.lessonCard} ${progress[index] ? styles.completed : ''}`}
                onClick={() => setActiveLesson(index)}
              >
                <LessonIcon name={lesson.icon} />
                <h2>{lesson.title}</h2>
                {progress[index] && <div className={styles.completedBadge}>✓</div>}
                {bookmarks.includes(index) && <div className={styles.bookmarkBadge}>★</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}