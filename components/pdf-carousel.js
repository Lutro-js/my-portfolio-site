import { useState } from 'react'
import Image from 'next/image'
import styles from 'styles/pdf-carousel.module.css'

export default function PdfCarousel({ pages, title, pdfUrl }) {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  if (!pages || pages.length === 0) return null

  return (
    <section className={styles.pdfCarouselSection}>
      <div className={styles.carouselHeader}>
        <h2 className={styles.carouselTitle}>{title}</h2>
        {pdfUrl && (
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.pdfLink}
          >
            📄 PDFを開く
          </a>
        )}
      </div>

      <div className={styles.carouselContainer}>
        {/* メイン表示エリア */}
        <div className={styles.mainDisplay}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevPage}
            disabled={pages.length <= 1}
            aria-label="前のページ"
          >
            ‹
          </button>
          
          <div className={styles.imageContainer}>
            <Image
              src={pages[currentPage]}
              alt={`${title} - ページ ${currentPage + 1}`}
              width={800}
              height={600}
              className={styles.mainImage}
            />
          </div>
          
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextPage}
            disabled={pages.length <= 1}
            aria-label="次のページ"
          >
            ›
          </button>
        </div>

        {/* ページ情報 */}
        <div className={styles.pageInfo}>
          <span className={styles.pageCounter}>
            {currentPage + 1} / {pages.length}
          </span>
        </div>

        {/* サムネイル一覧 */}
        {pages.length > 1 && (
          <div className={styles.thumbnailContainer}>
            <h4 className={styles.thumbnailTitle}>ページ一覧</h4>
            <div className={styles.thumbnailGrid}>
              {pages.map((page, index) => (
                <div 
                  key={index}
                  className={`${styles.thumbnail} ${currentPage === index ? styles.active : ''}`}
                  onClick={() => goToPage(index)}
                >
                  <Image
                    src={page}
                    alt={`ページ ${index + 1}`}
                    width={120}
                    height={90}
                    className={styles.thumbnailImage}
                  />
                  <span className={styles.thumbnailLabel}>ページ {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
