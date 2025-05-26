import { getServerSideSitemap } from "next-sitemap";
import { getAllSlugs, getAllCategories } from "@/lib/api";
import { siteMeta } from 'lib/constants'

export default function Sitemap() {}

export async function getServerSideProps(context) {
    const posts = await getAllCategories()
    const postFields = posts.map((post) => {
        return {
            loc: `${siteMeta.siteUrl}/${post.slulg}`,
        }
    })

    const cats = await getAllCategories()
    const catFields = cats.map((cat) => {
        return {
            loc: `${siteMeta.siteUrl}/blog/category/${cat.slulg}`,
        }
    })
    
    const allFields = [...postFields, ...catFields]

    return await getServerSideSitemap(context, allFields)
}