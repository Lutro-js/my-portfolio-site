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
              1996年生まれ。東京都出身。IT業界で主に既存システムの運用保守を担当していました。
              <br />
              SQLを操作してデータを作成したりテスト実施を行っていました。
            </p>

              <p className={styles.p}>
              つくったものを目に見える形で表現がしたく、Webサイトやアプリのデザインに興味を持ちました。
              <br />
                今まで社内でデザイン業務を担当したこともありましたが、独学だったこともあり、しっかりと基礎から学びたい気持ちで今年の4月からスクールでの学習を開始しました。
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
                オンラインゲームをすること
                </p>
              </Accordion>
              <Accordion heading="３年後はどうなっていたい？">
                <p>
                ユーザーの課題をヒアリングでき、スキルや経験を活用し、よりよいデザインを世に提供できるデザイナーでいること
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