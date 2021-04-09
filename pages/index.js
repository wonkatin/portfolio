import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My CAT portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1> Welcome to home page</h1>
      
    </div>
  )
}
