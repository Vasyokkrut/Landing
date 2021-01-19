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
      <main>
        <div>
          {children}
        </div>
      </main>
      <footer>
        <div className={styles.footerInfo} >
          <div className={styles.firstFooterInfo} >
            <span>Vasyokkrut<br/>Landing page</span>
          </div>
          <div className={styles.secondFooterInfo} >
            <nav className={styles.footerNav} >
              <div><Link href='/' ><a>Welcome</a></Link></div>
              <div><Link href='/about' ><a>About</a></Link></div>
              <div><Link href='/contacts' ><a>Contacts</a></Link></div>
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
