import Head from 'next/head'

import MainLayout from '../components/mainLayout.js'
import styles from '../styles/aboutProject.module.css'

function About() {
  return (
    <MainLayout>
      <Head>
        <title>Vasyokkrut contacts</title>
      </Head>
      <section className={styles.intro} >
        <div className={styles.projectHeader} >
          <span>
            About my project
          </span>
        </div>
        <div className={styles.projectIntroduction} >
          <div>
            <div>
              Account
            </div>
            <div>
              Pictures
            </div>
          </div>
          <div>
            <div>
              Privacy
            </div>
            <div>
              Messages
            </div>
          </div>
        </div>
      </section>
      <section className={styles.projectFeatures} >
        <article className={styles.feature} >
          Your Own Account
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article className={styles.feature} >
          Pointful Messages
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article className={styles.feature} >
          Upload Your Pictures
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article className={styles.feature} >
          Your Account Is Keep Safety
        </article>
      </section>
    </MainLayout>
  )
}

export default About
