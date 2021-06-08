import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <div className={styles.container}>
            <Head>
              <title>Sarah Marie Coogan</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container} id="home">
              <h1>Sarah Marie Coogan</h1>
              <p></p>
            </div>

            <div className={styles.container} id="about">
                <h2>About Me</h2>
            </div>
            <div className={styles.container} id="skillz">
                <h2>Skills</h2>
            </div>
            <div className={styles.container} id="projects">
                <h2>Projects</h2>
            </div>
            <div className={styles.container} id="contact">
                <h2>Contact Info</h2>
            </div>


      </div>
    )
}
