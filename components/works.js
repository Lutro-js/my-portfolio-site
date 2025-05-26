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
                {media?.type === 'video' ? (
                  <video controls className={styles.media}>
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={eyecatch}
                      alt={title}
                      fill
                      className={styles.media}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>


                
                )}
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
