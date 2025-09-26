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
import aboutHero from 'images/profile_about.png'
import styles from 'styles/about.module.css'
import stylesLine from 'styles/homeWorks.module.css'

export default function About() {
  return (
    <Container>
      <Meta 
        pageTitle="わたしについて"
        pageDesc="About development activities" 
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero className={styles.herotitle}
        title=""
        subtitle="" imageOn imageSrc={aboutHero}
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
            1996年生まれ。東京都出身。
              <br />
              ３年間IT企業で働いたのち、スクールでデザインについて学ぶ。
              <br />
              現在は業務委託でイラストやバナー、LPデザインを担当しています。
            </p>

              <p className={styles.p}>
              <br />
              デザインがユーザーに与える影響を常に考え、チームの想像力を補完しながら
              <br />
              説得力ある提案ができるUI/UXデザイナーを目指しています。
              </p>

              <p className={styles.p}>
              </p>

              <section className={styles.sectionBlock}>
              <div className={styles.sectionBlockInner}>
              <div className={stylesLine.homeWorksTitle}>
                  <div className={stylesLine.border}></div><h2>今できること</h2>
                </div>
                    <h3 className={styles.subsectionTitle}>スキル</h3>
                    <div className={styles.skillsContainer}>
                      <div className={styles.skillBar}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>UI/UXデザイン</span>
                          <span className={styles.skillPercent}>80%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div className={styles.skillBar}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>Webサイトデザイン</span>
                          <span className={styles.skillPercent}>80%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div className={styles.skillBar}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>HTML/CSS</span>
                          <span className={styles.skillPercent}>75%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div className={styles.skillBar}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>JavaScript</span>
                          <span className={styles.skillPercent}>70%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      
                      <div className={styles.skillBar}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>React</span>
                          <span className={styles.skillPercent}>60%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div className={styles.skillBar}>
                        <div className={styles.skillInfo}>
                          <span className={styles.skillName}>Next.js</span>
                          <span className={styles.skillPercent}>60%</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                  <h3 className={styles.subsectionTitle}>ツール</h3>
                  <div className={styles.skillsContainer}>
                    <div className={styles.skillBar}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>Figma</span>
                        <span className={styles.skillPercent}>90%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '90%' }}></div>
                      </div>
                    </div>

                    <div className={styles.skillBar}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>Miro</span>
                        <span className={styles.skillPercent}>90%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '90%' }}></div>
                      </div>
                    </div>

                    <div className={styles.skillBar}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>Adobe Illustrator</span>
                        <span className={styles.skillPercent}>80%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '80%' }}></div>
                      </div>
                    </div>

                    <div className={styles.skillBar}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>Adobe Photoshop</span>
                        <span className={styles.skillPercent}>80%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '80%' }}></div>
                      </div>
                    </div>

                    <div className={styles.skillBar}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>Adobe Fresco</span>
                        <span className={styles.skillPercent}>70%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '70%' }}></div>
                      </div>
                    </div>

                    <div className={styles.skillBar}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>Adobe Premiere Pro</span>
                        <span className={styles.skillPercent}>70%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '70%' }}></div>
                      </div>
                    </div>

                    <div className={styles.skillBar}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>ChatGPT</span>
                        <span className={styles.skillPercent}>95%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.sectionBlock}>
                <div className={stylesLine.homeWorksTitle}>
                  <div className={stylesLine.border}></div><h2>強み</h2>
                </div>
                <div className={styles.strengthsContainer}>
                  <div className={styles.strengthItem}>
                    <h3>継続的な学習</h3>
                    <p>成長意欲が高く、求められるスキルや新しい知識を常に学び続けています。</p>
                  </div>
                  <div className={styles.strengthItem}>
                    <h3>熱意・粘り強さ</h3>
                    <p>自分で決めた目標は必ず達成するという強い意志があり、何事も小さなことからコツコツ積み重ねることを得意としています。</p>
                  </div>
                  <div className={styles.strengthItem}>
                    <h3>素直さ・柔軟性</h3>
                    <p>周囲からもよく「素直」と言われます。人の話には先入観なく興味を持って耳を傾け、アドバイスや指示も柔軟に受け入れることができます。</p>
                  </div>
                </div>
              </section>
              
              <div className={stylesLine.homeWorksTitle}>
                  <div className={stylesLine.border}></div><h2>FAQ</h2>
                </div>
              <Accordion heading="好きな食べ物は？">
                <p>
                ラーメン
                辛いもの
                アイスラテ
                </p>
              </Accordion>
              <Accordion heading="趣味はありますか？">
                <p>
                ゲーム
                猫の観察
                </p>
              </Accordion>
              <Accordion heading="３年後はどうなっていたい？">
                <p>
                3年後には、ユーザーにとっての使いやすさとビジネスの成果を両立させながら、アプリのデザインをリードできるデザイナーになりたいです
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