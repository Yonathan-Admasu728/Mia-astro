// components/Layout.js
import Head from 'next/head'
import GalaxyBackground from './GalaxyBackground'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>Mia&apos;&lsquo;s  Astro Explorer</title>
        <meta name="description" content="An interactive astrological journey for Mia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GalaxyBackground />
      <main className={styles.mainContent}>{children}</main>
    </div>
  )
}