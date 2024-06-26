import Layout from '../components/Layout'
import GalaxyBackground from '../components/GalaxyBackground'
import MainMenu from '../components/MainMenu'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <GalaxyBackground />
      <div className={styles.container}>
        <h1 className={styles.title}>Mia&lsquo;s Astro Explorer</h1>
        <p className={styles.description}>
          Born: August 3, 2022 at 7:47pm in Las Vegas, NV, USA
        </p>
        <MainMenu />
      </div>
    </Layout>
  )
}