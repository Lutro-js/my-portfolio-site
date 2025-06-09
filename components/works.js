import styles from 'styles/works.module.css'
import animation from 'styles/animations.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Works({ works }) {
  return (
    <div className={styles.gridContainer}>
      {works.map(({ title, slug, eyecatch, media }) => (
        <article className={`${styles.work} ${animation.hoverGroup}`} key={slug}>
          <Link href={`/works/${slug}`}>
            <div className={styles.card}>
              <figure className={`${styles.imageWrapper} ${animation.hoverZoom}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={eyecatch}
                    alt={title}
                    width={400} // 必要に応じて調整
                    height={300}
                    className={styles.media}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </figure>
              <h2 className={`${styles.workTitle} ${animation.underlineAnimate}`}>
                {title}
              </h2>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
