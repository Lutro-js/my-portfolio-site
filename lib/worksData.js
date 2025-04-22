import kamaboko from '@/images/kamaboko.png'
import Category from '@/pages/blog/category/[slug]'

export const worksData = [
    {
      title: "アイコン",
      slug: "icon",
      eyecatch: kamaboko,
      category: "GRAPHIC",
      description: "Figma",
      content: `
        <p>素朴なかまぼこのアイコンです</p>
        <p>Figmaの図形オブジェクトを変形させて作りました。</p>
      `,
    },
    {
        title: "ポートフォリオサイト",
        slug: "portfolio-site",
        eyecatch: kamaboko,
        category: "WEB",
        description: "自分のポートフォリオサイトを作成しました。",
        content: `
          <p>このサイトは Next.js を使って作成しました。デザインはシンプルで、レスポンシブ対応しています。</p>
          <p>GitHub でソースコードも公開しています。</p>
        `,
      },
  ]
