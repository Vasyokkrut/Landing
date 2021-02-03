import Head from 'next/head'
import { useEffect } from 'react'
import animateItems from '../components/animateFunction.js'

import MainLayout from '../components/mainLayout.js'
import styles from '../styles/skills.module.css'

function About() {
  // this useEffect works once to add listeners
  // for animate descriptions and logos
  useEffect(animateItems, [])

  return (
    <MainLayout>
      <Head>
        <title>Vasyokkrut Skills</title>
      </Head>
      <section className={styles.aboutMySkills} >
        <div>
          <span>
            About my skills
          </span>
        </div>
        <hr style={{margin:'0 1rem 1rem 1rem'}} />
        <article className={`${styles.skillInfo} ${styles.JavaScript}`} >
          <div className={styles.description} >
            <div className={styles.skillName} >JavaScript</div>
            <span>Promises<br /></span>
            <span>ES6+ Features<br /></span>
            <span>Events & Listeners<br /></span>
            <span>DOM Manipulation<br /></span>
            <span>Async/Await Syntax<br /></span>
            <span>Objective Programming<br /></span>
          </div>
          <div className={`${styles.JavaScriptLogo} ${styles.skillLogo}`} ></div>
        </article>
        <hr style={{margin:'1rem'}} />
        <article className={`${styles.skillInfo} ${styles.nodejs}`} >
          <div className={styles.description} >
            <div className={styles.skillName} >Node.js</div>
            <span>NPM Scripts<br /></span>
            <span>Files Hashing<br /></span>
            <span>NPM Packages<br /></span>
            <span>CommonJS Modules<br /></span>
          </div>
          <div className={`${styles.nodejsLogo} ${styles.skillLogo}`} ></div>
        </article>
        <hr style={{margin:'1rem'}} />
        <article className={`${styles.skillInfo} ${styles.HTMLCSS}`} >
          <div className={styles.description} >
            <div className={styles.skillName} >HTML & CSS</div>
            <span>CSS 3<br /></span>
            <span>HTML 5<br /></span>
            <span>SEO Optimized<br /></span>
            <span>Responsive Design<br /></span>
            <span>Transitions & Animations<br /></span>
          </div>
          <div className={`${styles.HTMLLogo} ${styles.skillLogo}`} ></div>
        </article>
        <hr style={{margin:'1rem'}} />
        <article className={`${styles.skillInfo} ${styles.react}`} >
          <div className={styles.description} >
            <div className={styles.skillName} >React</div>
            <span>Routing<br /></span>
            <span>React Hooks<br /></span>
            <span>SPA Applications<br /></span>
            <span>Lifecycle Methods<br /></span>
            <span>Next.js SSR & SSG<br /></span>
            <span>Redux State Management<br /></span>
          </div>
          <div className={`${styles.reactLogo} ${styles.skillLogo}`} ></div>
        </article>
        <hr style={{margin:'1rem'}} />
        <article className={`${styles.skillInfo} ${styles.express}`} >
          <div className={styles.description} >
            <div className={styles.skillName} >Express.js</div>
            <span>Routing<br /></span>
            <span>Security<br /></span>
            <span>REST API<br /></span>
            <span>Middlewares<br /></span>
            <span>JWT Authentication<br /></span>
          </div>
          <div className={`${styles.expressLogo} ${styles.skillLogo}`} ></div>
        </article>
        <hr style={{margin:'1rem'}} />
        <article className={`${styles.skillInfo} ${styles.mongo}`} >
          <div className={styles.description} >
            <div className={styles.skillName} >MongoDB</div>
            <span>Mongoose ORM<br /></span>
            <span>CRUD Operations<br /></span>
            <span>MongoDB Models<br /></span>
            <span>MongoDB Schemas<br /></span>
          </div>
          <div className={`${styles.mongoLogo} ${styles.skillLogo}`} ></div>
        </article>
      </section>
    </MainLayout>
  )
}

export default About
