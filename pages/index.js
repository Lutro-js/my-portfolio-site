import { getAllPosts } from '@/lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from '@/components/hero'
import Posts from 'components/posts'
import Pagination from '@/components/pagination'
import BannerScroll from '@/components/banner-scroll'
import { eyecatchLocal } from '@/lib/constants'
import { worksData, homeBanners } from '@/lib/worksData'
import styles from 'styles/homeWorks.module.css'
import stylesContainer from 'styles/container.module.css'
import stylesAbout from 'styles/aboutHome.module.css'
import stylesHero from 'styles/animations.module.css'
import Link from 'next/link'
import Image from 'next/image'
import profileImage from 'images/plofile_home.png'
import cube from 'images/cube.jpg'
import animation from 'styles/animations.module.css'

export default function Home({ posts, works, bannerWorks }) {
  return (
    <>
      <Container>
        <Meta />
        <Hero title="HANANO KOBAYASHI" subtitle="Welcome to my portfolio" fullScreen>
        <div className={stylesHero.scrollIndicator} />
        </Hero>

        {/* デザインしたもの */}
        <div className={stylesContainer.homeLayout_wrapper}>
          <div className={styles.homeWorksTitle}>
            <div className={styles.border}></div><h2>デザインしたもの</h2>
          </div>

          <section className={styles.worksContainer}>
            {works.map((work, index) => (
              <div key={work.slug} className={`${styles.workItem} ${index % 2 === 0 ? styles.even : styles.odd}`}>
                <div className={`${styles.workImageText} ${index % 2 !== 0 ? styles.reverse : ''}`}>
                <div className={styles.workImage}>
                  <Link href={`/works/${work.slug}`}>
                    <div className={animation.hoverZoom}>
                      <Image
                        src={work.eyecatch}
                        alt={work.title}
                        width={500}
                        height={300}
                        className={styles.image}
                        loading="eager"
                      />
                    </div>
                  </Link>
                </div>

                  <div className={styles.workText}>
                    <h2 className={styles.workTitle}>{work.title}</h2>
                    <p className={styles.description}>{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
            <Pagination className={styles.button} nextUrl="/works" nextText="すべてみる" />
        </div>
      </Container>

      {/* バナー横スクロール */}
      <BannerScroll banners={bannerWorks} />

      <Container>
        {/* 自己紹介 */}
        <div className={stylesContainer.homeLayout_wrapper}>
          <div className={styles.homeWorksTitle}>
            <div className={styles.border}></div><h2>わたしについて</h2>
          </div>
          <div className={stylesAbout.wrapper}>
            <div className={stylesAbout.image}>
              <Image
                src={profileImage}
                alt=""
                width={500}
                height={500}
                priority
                placeholder="blur"
                className={stylesAbout.image}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className={stylesAbout.text}>
              <h3>こばやし はなの</h3>
                <p className={styles.description}>
                  IT業界でシステムの運用保守やテストを担当していました。
                  人に伝わる表現をつくりたい思いからデザインの道に進むことを決め、
                  現在バナーやLPデザインのお仕事をさせていただきながら、UI/UXに携わるため転職を目指しています。
                </p>
            </div>
          </div>
          <Pagination nextUrl="/about" nextText="詳しくみる" />

        </div>

        {/* ブログ */}
        <div className={styles.homeWorksTitle}>
          <div className={styles.border}></div><h2>ブログ</h2>
        </div>
        <Posts posts={posts} />
        <Pagination nextUrl="/blog" nextText="すべてみる" />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)
  const works = worksData.slice(0, 2)

  for (const post of posts) {
    if (!post.eyecatch || !post.eyecatch.url) {
      post.eyecatch = eyecatchLocal
    }
  }

  return {
    props: {
      posts,
      works,
      bannerWorks: homeBanners,
    },
  }
}
