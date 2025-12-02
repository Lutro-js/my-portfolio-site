import { useState } from 'react'
import styles from 'styles/banner-scroll.module.css'
import Image from 'next/image'

export default function BannerScroll({ banners }) {
  const [isPaused, setIsPaused] = useState(false)
  // バナーを2回複製して無限スクロールを実現
  const duplicatedBanners = [...banners, ...banners]

  return (
    <div 
      className={styles.scrollContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.scrollWrapper}>
        <div className={`${styles.scrollContent} ${isPaused ? styles.paused : ''}`}>
          {duplicatedBanners.map((banner, index) => (
            <div 
              key={`${banner.id}-${index}`} 
              className={styles.bannerItem}
            >
              {index === 0 && (
                <div className={styles.popupLabel}>
                  バナー＆イラスト
                </div>
              )}
              <Image
                src={banner.image}
                alt={banner.title}
                width={300}
                height={300}
                className={styles.bannerImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

