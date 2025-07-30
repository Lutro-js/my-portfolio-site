import { useState } from 'react'
import Image from 'next/image'
import styles from 'styles/figma-ui-preview.module.css'

export default function FigmaUIPreview({ uiImages, title, description }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleImageClick = (index) => {
    setSelectedImage(index)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  if (!uiImages || uiImages.length === 0) return null

  return (
    <section className={styles.uiPreviewSection}>
      {title && <h2 className={styles.uiPreviewTitle}>{title}</h2>}
      {description && <p className={styles.uiPreviewDescription}>{description}</p>}
      
      <div className={styles.uiPreviewContainer}>
        {/* メイン表示エリア */}
        <div className={styles.mainDisplay}>
          <div className={styles.imageContainer}>
            <Image
              src={uiImages[selectedImage].src}
              alt={uiImages[selectedImage].alt}
              width={800}
              height={600}
              className={styles.mainImage}
              onClick={toggleFullscreen}
            />
            <button 
              className={styles.fullscreenButton}
              onClick={toggleFullscreen}
              aria-label="フルスクリーン表示"
            >
              🔍
            </button>
          </div>
          
          {/* 画像情報 */}
          <div className={styles.imageInfo}>
            <h3 className={styles.imageTitle}>{uiImages[selectedImage].title}</h3>
            <p className={styles.imageDescription}>{uiImages[selectedImage].description}</p>
          </div>
        </div>

        {/* サムネイル一覧 */}
        <div className={styles.thumbnailContainer}>
          <h4 className={styles.thumbnailTitle}>UI画面一覧</h4>
          <div className={styles.thumbnailGrid}>
            {uiImages.map((image, index) => (
              <div 
                key={index}
                className={`${styles.thumbnail} ${selectedImage === index ? styles.active : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={100}
                  className={styles.thumbnailImage}
                />
                <span className={styles.thumbnailLabel}>{image.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* フルスクリーンモーダル */}
      {isFullscreen && (
        <div className={styles.fullscreenModal} onClick={closeFullscreen}>
          <div className={styles.fullscreenContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeFullscreen}>
              ✕
            </button>
            <Image
              src={uiImages[selectedImage].src}
              alt={uiImages[selectedImage].alt}
              width={1200}
              height={800}
              className={styles.fullscreenImage}
            />
            <div className={styles.fullscreenInfo}>
              <h3>{uiImages[selectedImage].title}</h3>
              <p>{uiImages[selectedImage].description}</p>
            </div>
            
            {/* フルスクリーン内のナビゲーション */}
            <div className={styles.fullscreenNav}>
              <button 
                className={styles.navButton}
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : uiImages.length - 1)}
                disabled={uiImages.length <= 1}
              >
                ←
              </button>
              <span className={styles.imageCounter}>
                {selectedImage + 1} / {uiImages.length}
              </span>
              <button 
                className={styles.navButton}
                onClick={() => setSelectedImage(selectedImage < uiImages.length - 1 ? selectedImage + 1 : 0)}
                disabled={uiImages.length <= 1}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 