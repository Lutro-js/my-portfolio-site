import styles from 'styles/works.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Works({ works }) {
  return (
    <div className={styles.gridContainer}>
      {works.map(({ title, slug, eyecatch, media }) => (
        <article className={styles.work} key={slug}>
          <Link href={`/works/${slug}`}>
            <figure className={styles.imageWrapper}>
              {media?.type === "video" ? (
                <video controls className={styles.media}>
                  <source src={media.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={eyecatch}
                  alt={title}
                  width={1280}
                  height={720}
                  className={styles.media}
                />
              )}
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
