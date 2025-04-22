import { getAllCategories, getAllPostsByCategory } from "@/lib/api"
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from "@/components/post-header"
import { eyecatchLocal } from '@/lib/constants'
import Posts from "@/components/posts"

export default function Category({name,posts}) {
    return (
        <Container>
            <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
            <PostHeader title={name} subtitle="Blog Category" />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCats = await getAllCategories()
    return {
        paths: allCats.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const catslug = context.params.slug

    const allCats = await getAllCategories()
    const cat =allCats.find(({slug}) => slug === catslug)

    const posts = await getAllPostsByCategory(cat.id);

    for (const post of posts) {
        if (!post.eyecatch || !post.eyecatch.url) {
          post.eyecatch = eyecatchLocal // 代替画像を設定
        }
      }
    
    return {
        props: {
            name: cat.name,
            posts: posts,
        },
    }
}