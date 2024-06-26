import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import BackButton from '../components/BackButton'
import styles from '../styles/DailyHoroscope.module.css'

const generateHoroscope = () => {
  const areas = ['personal growth', 'relationships', 'career', 'health', 'creativity'];
  const actions = ['focus on', 'be cautious about', 'embrace', 'reflect on', 'seek opportunities in'];
  const advice = ['trust your intuition', 'communicate openly', 'take bold action', 'practice patience', 'stay flexible'];

  const area = areas[Math.floor(Math.random() * areas.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const adviceItem = advice[Math.floor(Math.random() * advice.length)];

  return `Today, ${action} matters related to ${area}. Remember to ${adviceItem} as you navigate the day's energies.`;
};

export default function DailyHoroscope() {
  const [horoscope, setHoroscope] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setHoroscope(generateHoroscope());
    setDate(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
      <BackButton />
        <h1 className={styles.title}>Mia&apos;&lsquo;s Daily Horoscope</h1>
        <div className={styles.dateContainer}>
          <p className={styles.date}>{date}</p>
        </div>
        <div className={styles.horoscopeCard}>
          <p className={styles.horoscope}>{horoscope}</p>
        </div>
        <button className={styles.refreshButton} onClick={() => setHoroscope(generateHoroscope())}>
          Get New Horoscope
        </button>
      </div>
    </Layout>
  )
}