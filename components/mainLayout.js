import Link from 'next/link'
import styles from '../styles/mainLayout.module.css'

function MainLayout({children}) {
  return(
    <div>
      <header>
        <nav className={styles.navigation} >
          <Link href='/' ><a><div>Main</div></a></Link>
          <Link href='/project' ><a><div>Project</div></a></Link>
          <Link href='/skills' ><a><div>Skills</div></a></Link>
        </nav>
      </header>
      <main className={styles.mainContent} >
        <div>
          {children}
        </div>
      </main>
      <footer>
        <div className={styles.footerInfo} >
          <div className={styles.firstFooterInfo} >
            <span>Vasyokkrut<br/>Landing Page</span>
          </div>
          <div className={styles.secondFooterInfo} >
            <nav className={styles.footerNav} >
              <div><Link href='/' ><a>Main Page</a></Link></div>
              <div><Link href='/project' ><a>Project Page</a></Link></div>
              <div><Link href='/skills' ><a>Skills Page</a></Link></div>
            </nav>
          </div>
          <div className={styles.thirdFooterInfo} >
            <div className={styles.socials} >
              <a aria-label='github' href='https://github.com/vasyokkrut' >
                <div className={styles.githubLogo} />
              </a>
              <a aria-label='vk.com' href='https://vk.com/vasyokkrut' >
                <div className={styles.vkLogo} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
