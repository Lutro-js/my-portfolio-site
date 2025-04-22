import { getAllPosts } from '@/lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from '@/components/hero'
import Posts from 'components/posts'
import Pagination from '@/components/pagination'
import { eyecatchLocal } from '@/lib/constants'
import { worksData } from '@/lib/worksData'
import styles from 'styles/homeWorks.module.css'
import stylesContainer from 'styles/container.module.css'
import stylesAbout from 'styles/aboutHome.module.css'
import Link from 'next/link'
import Image from 'next/image'
import aboutme from 'images/aboutme.jpg'
import cube from 'images/cube.jpg'


export default function Home({posts, works}) {
  return (
    <Container>
      <Meta />
      <Hero title="HANANO KOBAYASHI" subTitle="Welcome to my portfolio"   imageOn imageSrc={cube} />
      
      <div className={stylesContainer.homeLayout_wrapper}>
        <div className={styles.homeWorksTitle}>
            <div className={styles.border}></div><h2>デザインしたもの</h2>
        </div>

        <section className={styles.worksContainer}>
        {works.map((work, index) => (
          <div key={work.slug} className={`${styles.workItem} ${index % 2 === 0 ? styles.even : styles.odd}`}>
            <div className={styles.workText}>
              <h2>{work.title}</h2>
              <p>{work.description}</p>
            </div>
            <article className={styles.work} key={work.slug}>
              <Link href={`/works/${work.slug}`}>
                <div className={styles.workImage}>
                  <Image 
                    src={work.eyecatch} 
                    alt=''
                  />
                </div>
              </Link>
            </article>
          </div>
        ))}
      </section>
      <Pagination nextUrl="/works" nextText="すべてみる" />
    </div>
  

    <div className={stylesContainer.homeLayout_wrapper}>
      <div className={styles.homeWorksTitle}>
        <div className={styles.border}></div><h2>わたしについて</h2>
      </div>
      <div className={stylesAbout.wrapper}>
        <div className={stylesAbout.image}>
          <Image
            src={aboutme}
            alt=""
            layout="responsive"
            priority
            placeholder="blur"
          />
        </div>
          <div className={stylesAbout.text}>
            <h3>こばやし はなの</h3>
            <p>2022年5月〜現在までIT業界でシステムの運用を担当しています。社内でWebサイト制作を任された経験があり、そこからさらに深く知識やスキルを身につけたいと思い、個人で学習と
            6ヶ月間スクールでUIやUXについて学びました。現在は転職活動をしています。</p>
          </div>
      </div>

      <Pagination nextUrl="/about" nextText="詳しくみる" />
    </div>
          
          
     

      <div className={styles.homeWorksTitle}>
          <div className={styles.border}></div><h2>ブログ</h2>
      </div>
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="すべてみる" />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4)

  const works = await worksData.slice(0,2)

  for (const post of posts) {
    if (!post.eyecatch || !post.eyecatch.url) {
      post.eyecatch = eyecatchLocal // 代替画像を設定
    }
  }

  return {
    props: {
      posts: posts,
      works: works,
    },
  }
}