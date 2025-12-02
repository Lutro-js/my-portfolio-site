import Container from '@/components/container'
import { getPostBySlug,getAllSlugs } from 'lib/api'
import { extractText } from '@/lib/extract-text'
import { prevNextPost } from '@/lib/prev-next-post'
import Meta from 'components/meta'
import PostHeader from 'components/post-header'
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'
import Pagination from 'components/pagination'
import Image from 'next/image'
// import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'lib/constants'

//②取得したデータの中から記事のタイトルを表示する
export default function Post({ title, publish, content, eyecatch, categories, description, prevPost, nextPost }) {
    return (
        <Container>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />

            <article>
                <PostHeader title={title} subtitle="Blog Article" publish={publish} />
                <figure>
                    <Image
                        src={eyecatch.url}
                        alt=""
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                        placeholder={eyecatch.blurDataURL ? 'blur' : 'empty'}
                        style={{ width: '100%', height: 'auto' }}
                        blurDataURL={eyecatch.blurDataURL || ""}
                    />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>
                <Pagination
                    prevText={prevPost.title}
                    prevUrl={`/blog/${prevPost.slug}`}
                    nextText={nextPost.title}
                    nextUrl={`/blog/${nextPost.slug}`}
                />
            </article>
        </Container>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()

    return {
        paths: allSlugs.map(({slug}) => `/blog/${slug}`),
        fallback: false,
    }
}
    
//①スラッグが「schedule」の記事のデータを取得するように指定
export async function getStaticProps(context) {
    const slug = context.params.slug
    const post = await getPostBySlug(slug)
    const description = extractText(post.content)
    let eyecatch = post.eyecatch ?? eyecatchLocal

    // ローカル画像のみ getPlaiceholder を適用　外部URLに指定するとエラーになる✖︎✖︎
    // if (!eyecatch.url.startsWith('http')) {
    //     try {
    //         const { base64 } = await getPlaiceholder(eyecatch.url)
    //         eyecatch.blurDataURL = base64
    //     } catch (error) {
    //         console.error("Error generating blurDataURL:", error)
    //     }
    // }

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs,slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost,
        },
    }
}