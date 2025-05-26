import { getAllPosts } from '@/lib/api'
import Meta from 'components/meta'
import Container from 'components/container'
import Hero from '@/components/hero'
import Posts from 'components/posts'


//ローカルの代替アイキャッチ画像
import { eyecatchLocal } from '@/lib/constants'

export default function Blog({posts}) {
  return (
    <Container>
        <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
        <Hero 
            title="BLOG"
            subtitle=""
        />
        <Posts posts={posts} />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.eyecatch || !post.eyecatch.url) {
      post.eyecatch = eyecatchLocal // 代替画像を設定
    }
  }


  return {
    props: {
      posts: posts,
    },
  }
}