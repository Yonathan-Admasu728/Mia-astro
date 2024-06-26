import { useRouter } from 'next/router'
import styles from '../styles/ExitButton.module.css'

export default function ExitButton() {
  const router = useRouter()

  const handleExit = () => {
    router.push('/cosmic-self')
  }

  return (
    <button className={styles.exitButton} onClick={handleExit}>
      ← Back to My Cosmic Self
    </button>
  )
}