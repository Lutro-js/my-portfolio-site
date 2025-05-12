import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from 'styles/nav.module.css'

export default function Nav() {
    const [navIsOpen, setNavIsOpen] = useState(false)
    const router = useRouter()

    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav = () => {
        setNavIsOpen(false)
    }

    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                    @media (max-width: 767px) {
                        body {
                            overflow: hidden;
                            position: fixed;
                            width: 100%;
                        }      
                    }
                `}</style>
            )}

            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" onClick={closeNav} className={router.pathname === '/' ? styles.active : ''}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" onClick={closeNav} className={router.pathname === '/about' ? styles.active : ''}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/works" onClick={closeNav} className={router.pathname === '/works' ? styles.active : ''}>
                        Works
                    </Link>
                </li>
                <li>
                    <Link href="/blog" onClick={closeNav} className={router.pathname === '/blog' ? styles.active : ''}>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
