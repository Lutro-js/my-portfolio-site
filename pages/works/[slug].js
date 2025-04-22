import { worksData } from '@/lib/worksData'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Image from 'next/image'
import styles from 'styles/works.module.css'

export default function Work({ work }) { 
  return (
    <Container>
      <Meta pageTitle={work.title} pageDesc={work.description} /> 
      <article>
        <Hero title={work.title} subtitle={work.description} /> 
        <figure>
          <Image
            src={work.eyecatch} 
            alt={work.title}
            layout="responsive"
            width={800}
            height={600}
          />
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: work.content }} /> 
        </figure>
      </article>
    </Container>
  )
}

// すべてのパスを生成
export async function getStaticPaths() {
  const paths = worksData.map((work) => ({
    params: { slug: work.slug },
  }))

  return { paths, fallback: false }
}

// 各 Works のデータを取得
export async function getStaticProps({ params }) {
  const work = worksData.find((w) => w.slug === params.slug)

  return {
    props: {
      work, 
    },
  }
}
