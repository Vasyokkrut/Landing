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
            <a href="#aboutAccount" >Account</a>
            <a href="#aboutPictures" ><div>Pictures</div></a>
          </div>
          <div>
            <a href="#aboutSafety" >Privacy</a>
            <a href="#aboutMessages" >Messages</a>
          </div>
        </div>
      </section>
      <section className={styles.projectFeatures} >
        <article id='aboutAccount' className={styles.feature} >
          Your Own Account
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article id='aboutPictures' className={styles.feature} >
          Upload Your Pictures
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article id='aboutSafety' className={styles.feature} >
          Your Account Keeps Safety
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article id='aboutMessages' className={styles.feature} >
          Pointful Messages
        </article>
      </section>
    </MainLayout>
  )
}

export default About
