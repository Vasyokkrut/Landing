import Head from 'next/head'

import MainLayout from '../components/mainLayout.js'
import styles from '../styles/mainPage.module.css'

function MainPage() {
  return (
    <MainLayout>
      <Head>
        <title>Vasyokkrut</title>
      </Head>
      <div className={styles.start} >
        <div>
          <div className={styles.welcome} >
            <span>Vasyokkrut</span>
          </div>
          <div className={styles.welcome} >
            <span>Web developer</span>
          </div>
        </div>
        <div>
          <div className={styles.welcome} >
            <span>Landings</span>
          </div>
          <div className={styles.welcome} >
            <span>MERN Fullstack</span>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center', paddingTop:'1rem', backgroundColor:'white'}} >
        <span style={{fontSize:'3rem'}}>My Skills</span>
      </div>
      <div className={styles.skillsList} >
        <div className={styles.skillItem} >
          <h2>HTML</h2>
          <div className={styles.HTMLLogo} ></div>
        </div>
        <div className={styles.skillItem} >
          <h2>CSS</h2>
          <div className={styles.CSSLogo} ></div>
        </div>
        <div className={styles.skillItem} >
          <h2>JavaScript</h2>
          <div className={styles.javascriptLogo} ></div>
        </div>
        <div className={styles.skillItem} >
          <h2>Node.js</h2>
          <div className={styles.nodejsLogo} ></div>
        </div>
        <div className={styles.skillItem} >
          <h2>MongoDB</h2>
          <div className={styles.mongodbLogo} ></div>
        </div>
        <div className={styles.skillItem} >
          <h2>Express</h2>
          <div className={styles.expressLogo} ></div>
        </div>
        <div className={styles.skillItem} >
          <h2>React</h2>
          <div className={styles.reactLogo} ></div>
        </div>
      </div>
      <div className={styles.aboutMe} >
        <span>Project Types</span>
        <div>
          <div className={styles.landings} >
            <span className={styles.landingsHeader} >Landing</span>
            <div className={styles.landingsContent} ></div>
          </div>
          <div className={styles.fullstacks} >
            <span className={styles.fullstacksHeader} >Fullstack</span>
            <div className={styles.fullstacksContent} ></div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default MainPage
