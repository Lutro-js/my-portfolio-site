import Container from 'components/container'
import Logo from '@/components/logo'
import Social from 'components/social'
import styles from 'styles/footer.module.css'
import Nav from 'components/nav'

export default function Footer() {
    return (
      <footer className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <Logo />
            <Nav />
            <Social />
          </div>
        </Container>
        <div className={styles.copyright}>
          <small>© 2025 HANANO KOBAYASHI. All rights reserved.</small>
        </div>
      </footer>
    )
  }