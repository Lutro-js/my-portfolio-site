import { useState } from 'react'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Works from 'components/works'
import { worksData } from '@/lib/worksData'
import styles from 'styles/container.module.css'

const categories = ["すべて","UI","LP","WEB","GRAPHIC"]

export default function WorksPage({ allWorks }) {
  const [selectedCategory, setSelectedCategory] = useState("すべて")

  const filteredWorks = selectedCategory === "すべて"
    ? allWorks
    : allWorks.filter(work => work.category === selectedCategory)

  return (
    <Container>
      <Meta pageTitle="ワークス" pageDesc="ポートフォリオ作品一覧" />
      <Hero 
        title="WORKS"
        subtitle=""
      />

      {/* ✅ カテゴリ + ワーク全体を横並びに */}
      <div className={styles.worksLayout}>
        {/* 左：カテゴリ */}
        <div className={styles.categoryList}>
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <span 
                  className={`click-page ${selectedCategory === cat ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 右：ワーク一覧（ここにグリッド） */}
        <section className={`${styles.default} hoverGroup`}>
          <Works works={filteredWorks} />
        </section>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      allWorks: worksData
    }
  }
}
