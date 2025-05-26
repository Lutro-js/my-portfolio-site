import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from '@/components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/two-column'
import Accordion from '@/components/accordion'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'
import BlueFrame from 'components/blue-frame'
import abouthero from 'images/abouthero.jpg'
import styles from 'styles/about.module.css'

export default function About() {
  return (
    <Container>
      <Meta 
        pageTitle="アバウト"
        pageDesc="About development activities" 
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero className={styles.herotitle}
        title=""
        subtitle="" imageOn imageSrc={abouthero}
        >
        <div className={styles.name}>
          <span className={styles.span}>Kobayashi Hanano</span>
          <h1 className={styles.h1}>こばやし はなの</h1>
        </div>
        </Hero>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
 
            <p className={styles.p}>
              1996年生まれ。東京都出身。3年間IT業界に従事していました。
              <br />
              現場では業務系システムのサーバー移行に伴い、データの作成やテストを担当しました。
              <br />
              社内ではデザイン業務を任された経験があり、Webサイトやアプリのデザインに強く興味を持ちました。
            </p>

              <p className={styles.p}>
              <br />
                当時は独学だったこともあり、しっかりと基礎から学びたいという気持ちで今年の4月からスクールでの学習を開始しました。
              <br />
                幅広くデザイン領域に関わっていきたいと思い、現在はUIとUXについて学んでいます。
              </p>

              <p className={styles.p}>
              </p>
              
              <h2>FAQ</h2>
              <Accordion heading="好きな食べ物は？">
                <p>
                ラーメン
                辛いもの
                アイスラテ
                </p>
              </Accordion>
              <Accordion heading="趣味はありますか？">
                <p>
                オンラインゲームをすること！
                </p>
              </Accordion>
              <Accordion heading="３年後はどうなっていたい？">
                <p>
                デザインの力で楽しい時代をつくれるデザイナーでいること！
                </p>
              </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}

About.getLayout = function getLayout(page) {
  return <BlueFrame>{page}</BlueFrame>
}