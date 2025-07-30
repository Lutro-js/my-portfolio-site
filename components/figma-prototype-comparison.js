import { useState } from 'react'
import styles from 'styles/figma-prototype-comparison.module.css'

export default function FigmaPrototypeComparison({ beforeUrl, afterUrl, title, description }) {
  const [activeTab, setActiveTab] = useState('before')

  const getEmbedUrl = (url) => {
    // FigmaのプロトタイプURLを埋め込み用に変換
    if (url.includes('figma.com/proto/')) {
      const prototypeId = url.split('/proto/')[1]?.split('/')[0]
      if (prototypeId) {
        return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`
      }
    }
    return url
  }

  return (
    <section className={styles.comparisonSection}>
      {title && <h2 className={styles.comparisonTitle}>{title}</h2>}
      {description && <p className={styles.comparisonDescription}>{description}</p>}
      
      <div className={styles.comparisonContainer}>
        {/* タブ切り替え */}
        <div className={styles.tabContainer}>
          <button 
            className={`${styles.tab} ${activeTab === 'before' ? styles.active : ''}`}
            onClick={() => setActiveTab('before')}
          >
            <span className={styles.tabLabel}>改善前</span>
            <span className={styles.tabIcon}>📱</span>
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'after' ? styles.active : ''}`}
            onClick={() => setActiveTab('after')}
          >
            <span className={styles.tabLabel}>改善後</span>
            <span className={styles.tabIcon}>✨</span>
          </button>
        </div>

        {/* プロトタイプ表示エリア */}
        <div className={styles.prototypeContainer}>
          {activeTab === 'before' ? (
            <div className={styles.prototypeWrapper}>
              <div className={styles.prototypeHeader}>
                <h3 className={styles.prototypeTitle}>改善前のプロトタイプ</h3>
                <p className={styles.prototypeDescription}>現在のUIの課題点を確認できます</p>
              </div>
              <div className={styles.iframeContainer}>
                <iframe
                  src={getEmbedUrl(beforeUrl)}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  className={styles.prototypeIframe}
                />
              </div>
            </div>
          ) : (
            <div className={styles.prototypeWrapper}>
              <div className={styles.prototypeHeader}>
                <h3 className={styles.prototypeTitle}>改善後のプロトタイプ</h3>
                <p className={styles.prototypeDescription}>改善されたUIの改善点を確認できます</p>
              </div>
              <div className={styles.iframeContainer}>
                <iframe
                  src={getEmbedUrl(afterUrl)}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                  className={styles.prototypeIframe}
                />
              </div>
            </div>
          )}
        </div>

        {/* 比較説明
        <div className={styles.comparisonInfo}>
          <div className={styles.infoCard}>
            <h4 className={styles.infoTitle}>改善前の課題</h4>
            <ul className={styles.infoList}>
              <li>ユーザビリティの課題</li>
              <li>視覚的な分かりにくさ</li>
              <li>操作の複雑さ</li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h4 className={styles.infoTitle}>改善後のポイント</h4>
            <ul className={styles.infoList}>
              <li>直感的な操作</li>
              <li>視覚的な改善</li>
              <li>ユーザビリティの向上</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  )
} 