import styles from '../styles/LessonIcon.module.css'

const icons = {
  sun: "☀️",
  moon: "🌙",
  ascendant: "🌅",
  elements: "🌍🔥💨💧",
  houses: "🏠",
  planets: "🪐",
}

export default function LessonIcon({ name }) {
  return (
    <div className={styles.icon}>
      {icons[name] || "🌟"}
    </div>
  )
}