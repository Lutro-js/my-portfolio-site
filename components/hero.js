import styles from 'styles/hero.module.css'
import Image from 'next/image'

export default function Hero({ title, subtitle, imageOn = false, imageSrc }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && imageSrc && (
        <figure className={styles.image}>
          <Image
            src={imageSrc}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
