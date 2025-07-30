import { useState, useRef, useEffect } from 'react'
import styles from 'styles/miro-embed.module.css'

export default function MiroEmbed({ miroUrl, title, description }) {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)

  // MiroのURLを埋め込み用に変換
  const getEmbedUrl = (url) => {
    // 通常のMiro URLから埋め込みURLに変換
    if (url.includes('miro.com/app/board/')) {
      const boardId = url.split('/board/')[1]?.split('/')[0]
      if (boardId) {
        return `https://miro.com/app/embed/${boardId}/`
      }
    }
    // すでに埋め込みURLの場合はそのまま返す
    if (url.includes('miro.com/app/embed/')) {    }
    return url
  }

  useEffect(() => {
    // 埋め込みが読み込まれたらローディング状態を解除
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.miroSection}>
      {title && <h2 className={styles.miroTitle}>{title}</h2>}
      {description && <p className={styles.miroDescription}>{description}</p>}
      
      <div className={styles.miroContainer} ref={containerRef}>
        {isLoading && (
          <div className={styles.loadingOverlay}>
            <div className={styles.loadingSpinner}></div>
            <p>Miro資料を読み込み中...</p>
          </div>
        )}
        
        <div className={styles.miroWrapper}>
          <iframe
            src={getEmbedUrl(miroUrl)}
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            className={styles.miroIframe}
            onLoad={() => setIsLoading(false)}
          />
        </div>
        
        <div className={styles.scrollHint}>
        </div>
      </div>
    </section>
  )
} 