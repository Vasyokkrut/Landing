import Head from 'next/head'

import MainLayout from '../components/mainLayout.js'
import styles from '../styles/aboutProject.module.css'

function About() {
  return (
    <MainLayout>
      <Head>
        <title>Vasyokkrut Project</title>
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
          <div className={styles.featureContent} >
            <a href='/upload' className={`${styles.featureLogo} ${styles.accountSignIn}`} ></a>
            <div style={{fontSize: '1.5rem', width: '20rem'}} >
              <span>Your posts will be saved on server and you will be able to access your posts from anywhere</span>
            </div>
            <a href='/upload' className={`${styles.featureLogo} ${styles.accountSignUp}`} ></a>
          </div>
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article id='aboutPictures' className={`${styles.feature} ${styles.pictures}`} >
          Upload Your Pictures
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article id='aboutSafety' className={`${styles.feature} ${styles.security}`} >
          Your Account is Kept Safe
          <div className={styles.featureContent} >
            <img
              className={styles.featureLogo}
              style={{width: '25rem'}}
              src='/project/encryption.jpeg'
            />
            <div style={{fontSize: '1.5rem', width: '20rem'}} >
              <span>
                Your data is encrypted using large cryptography keys and you don't have to be worried
              </span>
            </div>
            <img
              className={styles.featureLogo}
              style={{width: '25rem'}}
              src='/project/cryptography.jpeg'
            />
          </div>
        </article>
        <hr style={{margin:'1rem 2rem'}} />
        <article id='aboutMessages' className={`${styles.feature} ${styles.messages}`} >
          Pointful Messages
        </article>
      </section>
    </MainLayout>
  )
}

export default About
