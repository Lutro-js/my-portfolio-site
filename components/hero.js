import styles from 'styles/hero.module.css'
import Image from 'next/image'
import { Children } from 'react'

export default function Hero({
  title,
  subtitle,
  imageOn = false,
  imageSrc,
  children,
  fullScreen = false
}) {
  return (
    <div
      className={`${styles.flexContainer} ${fullScreen ? styles.fullScreen : ''}`}
    >
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {children}
      </div>
      {imageOn && imageSrc && (
        <figure className={styles.image}>
          <Image
            className={styles.image}
            src={imageSrc}
            alt=""
            layout="responsive"
            
            // sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}

