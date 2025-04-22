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
      <Hero 
        title="ABOUT"
        subtitle="わたしについて" imageOn imageSrc={abouthero}
      />
              {/* <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        /> */}
      <figure>

      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
              <p className={styles.p}>1996年生まれ。東京都出身。IT業界で主に既存システムの運用保守を担当しています。
                SQLを操作してデータを作成したりテスト実施を行っていました。
              </p>
              <p className={styles.p}>
              つくったものを目に見える形で表現がしたいと思いWeb制作やアプリデザインに興味を持ちました。
              Webアプリケーション開発で重要視されるようになった、UIUXの知識と手法を活かしてユーザーはもちろんのこと社会にとってよい影響を与えるデザインを提供したいと思っています。
              その為に日々学習を継続しています。
              </p>
              <p className={styles.p}>
              ゲームと猫が好きです。
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