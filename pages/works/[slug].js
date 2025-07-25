import { worksData } from '@/lib/worksData'
import Meta from 'components/meta'
import Container from 'components/container'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/works.module.css'
import hoverstyles from 'styles/animations.module.css'
import linkicon from '/images/linkicon.png'

export default function Work({ work, otherWorks }) {
  return (
    <Container>
      <Meta pageTitle={work.title} pageDesc={work.description} />

      <article>
        {/* Hero セクション */}
        <section className={styles.hero}>
          <h1>{work.title}</h1>
          <p>{work.description}</p>

          {/* GRAPHIC カテゴリのときだけ mockupImages[0] を表示 */}
          {work.category === 'GRAPHIC' && work.mockupImages?.[0] && (() => {
            const img = work.mockupImages[0];
            return (
              <div className={styles.imagetop}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  className={styles.screenshotImage}
                />
              </div>
            );
          })()}


          {/* コンセプトシートの画像（あれば） */}
          {work.images?.concept && (
            <div className={styles.screenshotImageimageWrapper}>
              <Image
                src={work.images.concept.src}
                alt={work.images.concept.alt}

                className={styles.screenshotImage}
              />
              <p className={styles.caption}>{work.images.concept.alt}</p>
            </div>
          )}
        </section>


          {/* ターゲット */}
          {work.target && work.highlights.length > 0 && (
          <section className={styles.section}>
            <h2>ターゲット</h2>
            <ul>
              {work.target.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
          )}

        {work.problem && (
          <section className={styles.section}>
            <h3>課題</h3>
            <p>{work.problem}</p>
          </section>
        )}

        <section className={styles.section}>
          <h2>目的</h2>
          <p className={styles.margin}>{work.purpose}</p>
          {work.images?.scenario && (
            <div className={styles.screenshotImageimageWrapper}>
              <Image
                src={work.images.scenario.src}
                alt={work.images.scenario.alt}
                fill
                style={{ objectFit: 'contain' }}
              />
              <p className={styles.caption}>{work.images.scenario.alt}</p>
            </div>
          )}

          {work.images?.persona && (
            <div className={styles.screenshotImageimageWrapper}>
              <Image
                src={work.images.persona.src}
                alt={work.images.persona.alt}
                fill
                style={{ objectFit: 'contain' }} // 画像全体を表示
                className={styles.screenshotImage}
              />
            </div>
          )}

          {work.images?.backgorund && (
            <div className={styles.screenshotImageimageWrapper}>
              <Image
                src={work.images.backgorund.src}
                alt={work.images.backgorund.alt}
                fill
                style={{ objectFit: 'contain' }} 
                className={styles.screenshotImage}
              />
            </div>
          )}

          {work.images?.psychologicalIssues && (
            <div className={styles.screenshotImageimageWrapper}>
              <Image
                src={work.images.psychologicalIssues.src}
                alt={work.images.psychologicalIssues.alt}
                fill
                style={{ objectFit: 'contain' }}
                className={styles.screenshotImage}
              />
            </div>
          )}

          {work.images?.qualityIssues && (
            <div className={styles.screenshotImageimageWrapper}>
              <Image
                src={work.images.qualityIssues.src}
                alt={work.images.qualityIssues.alt}
                fill
                style={{ objectFit: 'contain' }}
                className={styles.screenshotImage}
              />
            </div>
          )}

          {work.images?.needs && (
            <div className={styles.screenshotImageimageWrapper}>
              <Image
                src={work.images.needs.src}
                alt={work.images.needs.alt}
                fill
                style={{ objectFit: 'contain' }}
                className={styles.screenshotImage}
              />
            </div>
          )}
        </section>

        {work.structure && (
          <section className={styles.section}>
            <h3>構成</h3>
            <p>{work.structure}</p>
          </section>
        )}

        {work.process && (
          <section className={styles.section}>
            <h3>制作意図</h3>
            <ul>
                {work.process.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
            </ul>
          </section>
        )}

        {/* 制作情報 */}
        {(work.duration || work.tools) && (
          <section className={styles.section}>
            <h2>制作期間</h2>
            <ul className={styles.infoList}>
              {work.duration && (
                <li>
                  <div className={styles.durationBlock}>{work.duration}</div>
                </li>
              )}
            </ul>
          </section>
        )}

        <section className={styles.section}>
          <h2>使用ツール</h2>
          <p>{Array.isArray(work.tools) ? work.tools.join(' / ') : work.tools}</p>
        </section>

        {/* デザインのポイント */}
        {work.highlights && work.highlights.length > 0 && (
          <section className={styles.section}>
            <h2>デザインのポイント</h2>
            <ul>
              {work.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        )}

        {/* カラー表示 */}
        {work.colors && work.colors.length > 0 && (
          <div className={styles.colorBarWrapper}>
            {work.colors.map((color, index) => {
              const isLight = color.code.toUpperCase() === "#FFFFFF"
              return (
                <div
                  key={index}
                  className={styles.colorBlock}
                  style={{ backgroundColor: color.code }}
                >
                  <span
                    className={styles.colorCode}
                    style={{ color: isLight ? '#000' : '#fff' }}
                  >
                    {color.code}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* Figma埋め込み */}
        {work.figmaUrl && (
          <section className={styles.section}>
            <div className={styles.figmaEmbedWrapper}>
              <iframe
                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(work.figmaUrl)}`}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                style={{ border: '1px solid #ccc' }}
              ></iframe>
            </div>
          </section>
        )}

        {/* モックアップ（GRAPHIC以外のときのみ表示） */}
        {work.category !== 'GRAPHIC' && Array.isArray(work.mockupImages) && (
          <section className={styles.mockupTwoColumn}>
            {work.siteUrl && (
              <a href={work.siteUrl} target="_blank" rel="noopener noreferrer" className={styles.linkWithIcon}>
                <Image src={linkicon} alt="リンクアイコン" className={styles.icon} />
                サイトを見る
              </a>
            )}

            {work.mockupImages.map((img, i) => (
              <div key={i} className={styles.mockupImageWrapper}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: 'auto', maxWidth: '360px' }}
                />
              </div>
            ))}
          </section>
        )}

        {/* 次の作品リンク */}
        {work.nextWork && (
          <section className={hoverstyles.nextWork}>
            <span className={styles.nextLabel}>NEXT</span>
              <Link href={`/works/${work.nextWork.slug}`} className={hoverstyles.nextLink}>
                <div className={hoverstyles.imageHoverWrapper}>
                  <div className={hoverstyles.nextImageWrapper}>
                    <Image
                      src={work.nextWork.image}
                      alt={work.nextWork.title}
                      className={hoverstyles.media}
                    />
                  </div>
                  <div className={hoverstyles.overlay}>
                    <span className={hoverstyles.overlayTitle}>{work.nextWork.title}</span>
                  </div>
                </div>
            </Link>
          </section>
        )}

        {/* 戻るボタン */}
        <div className={styles.backToList}>
          <Link href="/works">← 一覧へもどる</Link>
        </div>

        {/* スクロールトップボタン */}
        <button
          className={styles.scrollToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      </article>
    </Container>
  )
}

// パス生成
export async function getStaticPaths() {
  const paths = worksData.map((work) => ({
    params: { slug: work.slug },
  }))
  return { paths, fallback: false }
}

// 各データ取得＋他の作品も渡す
export async function getStaticProps({ params }) {
  const work = worksData.find((w) => w.slug === params.slug)
  const otherWorks = worksData.filter((w) => w.slug !== params.slug).slice(0, 3)

  return {
    props: {
      work,
      otherWorks,
    },
  }
}
