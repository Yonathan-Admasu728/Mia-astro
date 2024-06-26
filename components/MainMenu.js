import Icon from './Icon';
import Link from 'next/link'
import styles from '../styles/MainMenu.module.css'

const menuItems = [
  { title: 'My Cosmic Self', path: '/cosmic-self' },
  { title: 'Planetary Journey', path: '/planetary-journey' },
  { title: 'House Explorer', path: '/house-explorer' },
  { title: 'Aspect Connections', path: '/aspect-connections' },
  { title: 'Daily Horoscope', path: '/daily-horoscope' },
  { title: 'Cosmic Lessons', path: '/cosmic-lessons' },
  { title: 'Starry Meditation', path: '/starry-meditation' },
  { title: 'Growth Tracker', path: '/growth-tracker' },
]

export default function MainMenu() {
  return (
    <nav className={styles.mainMenu}>
      {menuItems.map((item) => (
       <Link key={item.path} href={item.path} className={styles.menuItem}>
       <Icon name={item.icon} className={styles.menuIcon} />
       {item.title}
     </Link>
      ))}
    </nav>
  )
}