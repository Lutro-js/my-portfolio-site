import Social from 'components/social'
import styles from 'styles/contact.module.css'

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.headeing}>Contact</h3>
            <Social iconSize="30px" />
        </div>
    )
}