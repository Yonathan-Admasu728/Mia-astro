import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import styles from '../styles/GrowthTracker.module.css'

const growthAreas = [
  {
    title: "Self-Expression (Leo Sun)",
    description: "Track your confidence in expressing yourself creatively.",
    tasks: [
      "Speak up in a group setting",
      "Create something artistic",
      "Take on a leadership role",
      "Perform in front of others"
    ]
  },
  {
    title: "Emotional Balance (Libra Moon)",
    description: "Monitor your ability to maintain inner harmony and peace.",
    tasks: [
      "Meditate for 10 minutes",
      "Practice active listening",
      "Make a balanced decision",
      "Resolve a conflict peacefully"
    ]
  },
  {
    title: "Individuality (Aquarius Rising)",
    description: "Follow your progress in embracing your unique qualities.",
    tasks: [
      "Try a new hobby or interest",
      "Express an unconventional idea",
      "Volunteer for a cause you believe in",
      "Connect with people from diverse backgrounds"
    ]
  },
  {
    title: "Career Growth (Saturn in 10th House)",
    description: "Track your professional development and long-term goals.",
    tasks: [
      "Set a new career goal",
      "Learn a new professional skill",
      "Network with industry professionals",
      "Take on additional responsibilities at work"
    ]
  }
]

export default function GrowthTracker() {
  const [progress, setProgress] = useState({})

  useEffect(() => {
    const savedProgress = localStorage.getItem('growthProgress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const toggleTask = (areaIndex, taskIndex) => {
    const newProgress = {...progress}
    if (!newProgress[areaIndex]) {
      newProgress[areaIndex] = {}
    }
    newProgress[areaIndex][taskIndex] = !newProgress[areaIndex][taskIndex]
    setProgress(newProgress)
    localStorage.setItem('growthProgress', JSON.stringify(newProgress))
  }

  const calculateProgress = (areaIndex) => {
    if (!progress[areaIndex]) return 0
    const completedTasks = Object.values(progress[areaIndex]).filter(Boolean).length
    return (completedTasks / growthAreas[areaIndex].tasks.length) * 100
  }

  return (
    <Layout>
      <div className={styles.container}>
      <BackButton />
        <h1 className={styles.title}>Growth Tracker</h1>
        <div className={styles.growthGrid}>
          {growthAreas.map((area, areaIndex) => (
            <div key={areaIndex} className={styles.growthCard}>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressFill} 
                  style={{width: `${calculateProgress(areaIndex)}%`}}
                ></div>
              </div>
              <ul className={styles.taskList}>
                {area.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} 
                      className={progress[areaIndex]?.[taskIndex] ? styles.completed : ''}
                      onClick={() => toggleTask(areaIndex, taskIndex)}
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}