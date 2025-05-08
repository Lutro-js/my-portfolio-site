import eyecatchlp from '@/images/eyecatchlp.png'
import eyecatchlp2 from '@/images/eyecatchlp2.png'
import eyecatchui from '@/images/eyecatchui.png'
import dashbord from '@/images/dashbord.png'
import concept from '@/images/concept.jpg'
import scenario from '@/images/scenario.jpg'
import adonisense1 from '@/images/adonisense1.png'
import adonisense2 from '@/images/adonisense2.png'
import adonisense3 from '@/images/adonisense3.png'
import adonisensecard from '@/images/adonisensecard.png'
import eyecatchadonisense from '@/images/eyecatchadonisense.png'
import bannermars from '@/images/banner_mars.jpg'
import banneretvos from '@/images/banner_etvos.jpg'
import bannertrustbank from '@/images/banner_trustbank.jpg'
import kamaboko from '@/images/kamaboko.png'
import Category from '@/pages/blog/category/[slug]'

export const worksData = [
  {
    title: "ペット通販アプリ",
    slug: "pet-shopping-application-ui",
    figmaUrl: "https://www.figma.com/proto/iY3STrMMo5R20B2N17PsAe/UI?page-id=3065%3A448&node-id=3179-450&viewport=491%2C305%2C0.16&t=2yt8QRWemYODywGr-1&scaling=scale-down&content-scaling=fixed",
    eyecatch: eyecatchui,
    images: {
      concept: { src: concept, alt: "コンセプトシート" },
      scenario: { src: scenario, alt: "9コマシナリオ" }
    },
    
    category: "UI",
    description: `初めてペットを飼う人向けに\n商品購入までわかりやすいUIデザインを制作しました`,
    target: "初めてペットを飼う人。ネット通販に慣れていないユーザー",
    problem: `ペット商品の通販サイトは情報量が多くて選びにくい。\nまた、飼育初心者でも安心して購入できる導線の確保が必要`,
    purpose: "初心者が迷わず商品を選び、安心して購入までたどり着けるUIを構築",
    structure: "登録 > ホーム > カテゴリ一覧 > 商品一覧 > 商品詳細",
    process: "",
    duration: `リサーチ：1日  
              サービス概要定義：2日  
              ペルソナ・シナリオ作成：1日  
              ラフスケッチ：1日  
              UIデザイン：10時間（登録画面5h／商品詳細3.5h ほか）  
              プロトタイプ作成：1日
              合計：7日間`,

    tools: ["Figma"],
    highlights: [
      "登録画面を2ステップで最短で入力できる",
      "登録したペットの情報を元に、自分用にカスタマイズされた商品情報やコラムがあるホーム画面は眺めるだけでワクワクする",
      "初回購入率を上げるため「あなたにオススメ」商品を上部に配置し最適な商品を即時提案→タップしすぐにカートへ入れる",
      "商品詳細に「レビュー」を設けて安心感を",
    ],
    colors: [
      { code: "#DAEED2" },
      { code: "#72A85C" },
      { code: "#FFFFFF" },
      { code: "#4E783E" }
    ],
    isVerticalMockup: false,
    nextWork: {
      title: "業務管理アプリ",
      slug: "business-management-application-ui",
      image: dashbord,
    }
  },

  {
    title: "業務管理アプリ",
    slug: "business-management-application-ui",
    figmaUrl: "https://www.figma.com/proto/sDuz3iUFYj4uvrVMDa6VPU/%E6%A5%AD%E5%8B%99%E7%AE%A1%E7%90%86%E3%83%84%E3%83%BC%E3%83%AB?page-id=202%3A31&node-id=209-3&viewport=-577%2C229%2C0.25&t=a2qKoz34vPiJUjlA-1&scaling=scale-down&content-scaling=fixed",
    eyecatch: dashbord,
    category: "UI",
    description: `実体験で感じた業務や進捗管理の課題を\nUIで改善するためのデザインを制作しました`,
    target: "中小企業のバックオフィス担当者や業務進捗管理者。",
    problem: "現状のツールでは進捗状況が見えづらく、タスク漏れも発生しやすい",
    purpose: "進捗の可視化と業務のステータス管理を、視覚的にわかりやすく提供",
    structure: "ダッシュボード > プロジェクト一覧 > タスク詳細 > レポート出力",
    process: "タスクの状態をステータス別カラーで分け、モーダル表示で詳細確認。\nFigmaを使ってプロトタイプで操作感を確認",
    duration: `
              サービス概要定義：1日  
              ペルソナ・シナリオ作成：1日  
              UIデザイン：5時間
              プロトタイプ作成：1日
              合計：4日間`,
    tools: ["Figma"],
    highlights: [
      "業務で使い慣れたエクセルのような見た目を活かしつつ、ペルソナ課題を改善するために、管理のしやすさと心理的な安心感を意識したデザインにしました",
    ],
    colors: [
      { code: "#002354" },
      { code: "#FFFFFF" },
      { code: "#FEC300" }
    ],
    isVerticalMockup: false,
    nextWork: {
      title: "コーポレートサイト",
      slug: "interpreter-translator-company-lp",
      image: eyecatchlp,
    }
  },

  {
    title: "通訳・翻訳会社LP",
    slug: "interpreter-translator-company-lp",
    figmaUrl: "https://www.figma.com/proto/BmmuGTxCFCj8elbcEbzgBq/%E9%80%9A%E8%A8%B3%E3%83%BB%E7%BF%BB%E8%A8%B3%E3%82%B5%E3%82%A4%E3%83%88LP?page-id=247%3A47&node-id=247-175&viewport=-224%2C167%2C0.16&t=qofvDgViSJNkLfZE-1&scaling=scale-down-width&content-scaling=fixed",
    eyecatch: eyecatchlp,
    category: "WEB",
    description: "通訳・翻訳サービスを提供する企業向けに、ランディングページをデザインしました。",
    target: "法人向けの翻訳・通訳サービスを検討している新規顧客",
    problem: "サービスの強みが伝わりづらく、問い合わせまでの導線が弱かった。",
    purpose: "企業の信頼感と実績を訴求し、問い合わせフォームへ自然に誘導する。",
    structure: "ヒーローセクション > サービス紹介 > 実績 > 料金プラン > よくある質問 > フォーム",
    process: "Figmaでシンプルかつ堅実なイメージのデザインを構築し、CTAボタンを明確に配置した。",
    duration: "約2週間（構成・ワイヤーからFigmaデザインまで）",
    tools: ["Figma", "Illustrator","CLIP STUDIO PAINT"],
    highlights: [
      "ヒーローセクションの背景の世界地図を描きました",
      "CTAボタンをページ上部と下部に配置し、コンバージョンを意識",
    ],
    colors: [
      { code: "#002354" },
      { code: "#FFFFFF" },
      { code: "#FEC300" }
    ],
    isVerticalMockup: false,
    nextWork: {
      title: "ITコンサル企業コーポレートサイト",
      slug: "consulting-firm-corporate-site",
      image: eyecatchadonisense,
    }
  },

  {
    title: "ITコンサル会社コーポレートサイト",
    slug: "consulting-firm-corporate-site",
    siteUrl: "https://www.adonisense.co.jp/",
    // figmaUrl: "https://www.figma.com/proto/BmmuGTxCFCj8elbcEbzgBq/%E9%80%9A%E8%A8%B3%E3%83%BB%E7%BF%BB%E8%A8%B3%E3%82%B5%E3%82%A4%E3%83%88LP?page-id=247%3A47&node-id=247-175&viewport=-224%2C167%2C0.16&t=qofvDgViSJNkLfZE-1&scaling=scale-down-width&content-scaling=fixed",
    eyecatch: eyecatchadonisense,
    category: "WEB",
    description: "ITコンサル企業向けに、新規コーポレートサイトとロゴと名刺を制作しました。",
    target: "ITコンサルタント企業",
    problem: "新規事業立ち上げにあたり、企業ロゴとや名刺、サイトを新規作成する",
    purpose: "経営理念や事業内容をわかりやすく提示して、知ってもらう",
    structure: "ABOUT > COMPANY > SERVICE > RECRUIT > CONTACT > ACCESS",
    process: `ロゴは企業名の由来である「福寿草」をイメージして作成しました
              アクセントである黄色は「福寿草」の色と、未来に向けた希望を表しています`,
    duration: `サイト制作：2週間  
              ロゴ作成：1日  
              名刺作成：1日`,
    tools: ["WordPress", "Illustrator"],
    highlights: [
      "文字を多めにいれたいという要望に添って、文字を読みやすいよう画像とのバランスを意識しました",
    ],
    colors: [
      { code: "#333333" },
      { code: "#FFFFFF" },
      { code: "#DCAE2A" }
    ],
    isVerticalMockup: true,
    mockupImages: [
      { src: adonisense1, alt: 'PC画面' },
      { src: adonisense2, alt: 'PC画面' },
      { src: adonisense3, alt: 'PC画面' },
      { src: adonisensecard, alt: '名刺' },
    ],
    nextWork: {
      title: "和包丁LP",
      slug: "japanese-knife",
      image: eyecatchlp2,
    }
  },

  {
    title: "コーポレートサイト",
    slug: "corporate-site",
    figmaUrl: "https://www.figma.com/proto/BmmuGTxCFCj8elbcEbzgBq/%E9%80%9A%E8%A8%B3%E3%83%BB%E7%BF%BB%E8%A8%B3%E3%82%B5%E3%82%A4%E3%83%88LP?page-id=247%3A47&node-id=247-175&viewport=-224%2C167%2C0.16&t=qofvDgViSJNkLfZE-1&scaling=scale-down-width&content-scaling=fixed",
    eyecatch: kamaboko,
    category: "WEB",
    description: "本を参考にNext.jsを使用してコーポレートサイトを制作しました",
    target: "サービスを紹介したい中小企業や個人事業主。",
    problem: "既存のテンプレートでは自社の特徴が伝わらない、スマホ対応が不十分。",
    purpose: "シンプルで信頼感のあるレイアウトにしつつ、レスポンシブであらゆる端末に対応。",
    structure: "トップ > 事業紹介 > 実績 > お問い合わせ",
    process: "信頼感のある配色（青・グレー）をベースに、Figmaでデザイン設計。\nCTAを複数配置してCV導線も確保。",
    duration: "約2週間（構成・ワイヤーからFigmaデザインまで）",
    tools: ["Figma", "Illustrator","CLIP STUDIO PAINT"],
    highlights: [
      "ヒーローセクションの背景の世界地図を描きました",
      "CTAボタンをページ上部と下部に配置し、コンバージョンを意識",
    ],
    colors: [
      { code: "#002354" },
      { code: "#FFFFFF" },
      { code: "#FEC300" }
    ],
    isVerticalMockup: false,
    nextWork: {
      title: "和包丁LP",
      slug: "japanese-knife",
      image: eyecatchlp2,
    }
  },



  {
    title: "和包丁LP",
    slug: "japanese-knife",
    figmaUrl: "https://www.figma.com/proto/PB3cHjNGuX2t9ztkjhAVPG/Untitled?page-id=0%3A1&node-id=201-2&viewport=391%2C808%2C0.63&t=PypleWZtB6Bps4Iy-1&scaling=scale-down&content-scaling=fixed",
    eyecatch: eyecatchlp2,
    category: "WEB",
    description: "先丸蛸引という刺身包丁の架空LPをデザインしました",
    target: "刺身包丁を探している人",
    problem: "個人でデザイン性のあるLP制作に挑戦してみたかった",
    purpose: "先丸蛸引という種類の包丁を知ってもらう",
    structure: "ヒーローセクション > 和包丁の説明 > 素材や製品の特徴 > 使い方 > お手入れ方法 > お問い合わせ",
    process: "和包丁ならではのかっこよさを引き立てて、その歴史や製造されるまでの背景を記載して愛着を持っていただく",
    duration: "1週間",
    tools: ["Figma", "Illustrator","Photoshop"],
    highlights: [
      "上部から中間まで縦書きで和風な雰囲気を出し、使い方やお手入れなどは読みやすいように横書きにしました。",
      "ヒーローセクションとお刺身を切っている画像は実際に家にあるものを撮影して使用しました。",
    ],
    colors: [
      { code: "#000000" },
      { code: "#4D4D4D" },
      { code: "#FFFFFF" },
      { code: "#900000" }
    ],
    isVerticalMockup: false,
    nextWork: {
      title: "",
      slug: "",
      image: kamaboko,
    }
  },

  {
    title: "ペット商品バナー",
    slug: "pet-banner",
    // figmaUrl: "https://www.figma.com/proto/BmmuGTxCFCj8elbcEbzgBq/%E9%80%9A%E8%A8%B3%E3%83%BB%E7%BF%BB%E8%A8%B3%E3%82%B5%E3%82%A4%E3%83%88LP?page-id=247%3A47&node-id=247-175&viewport=-224%2C167%2C0.16&t=qofvDgViSJNkLfZE-1&scaling=scale-down-width&content-scaling=fixed",
    eyecatch: bannermars,
    category: "GRAPHIC",
    description: "コンペ課題として制作した架空バナーです",
    target: "健康に配慮したペット商品を探している人",
    problem: "",
    purpose: "バナーをクリックさせて、指定のWebサイトへ誘導する",
    structure: "",
    process: `ロゴは企業名の由来である「福寿草」をイメージして作成しました
              アクセントである黄色は「福寿草」の色と、未来に向けた希望を表しています`,
    duration: "1日",
    tools: ["Figma"],
    highlights:"",
    colors: [
      { code: "#333333" },
      { code: "#FFFFFF" },
      { code: "#DCAE2A" }
    ],
    isVerticalMockup: true,
    mockupImages: [
      { src: bannermars, alt: 'ペットフードバナー' },
    ],
    nextWork: {
      title: "化粧品バナー",
      slug: "skincare-banner",
      image: banneretvos,
    }
  },

  {
    title: "化粧品バナー",
    slug: "skincare-banner",
    // figmaUrl: "https://www.figma.com/proto/BmmuGTxCFCj8elbcEbzgBq/%E9%80%9A%E8%A8%B3%E3%83%BB%E7%BF%BB%E8%A8%B3%E3%82%B5%E3%82%A4%E3%83%88LP?page-id=247%3A47&node-id=247-175&viewport=-224%2C167%2C0.16&t=qofvDgViSJNkLfZE-1&scaling=scale-down-width&content-scaling=fixed",
    eyecatch: banneretvos,
    category: "GRAPHIC",
    description: "コンペ課題として制作した架空バナーです",
    target: "敏感肌の20~30代女性",
    problem: "",
    purpose: "バナーをクリックさせて、指定のWebサイトへ誘導する",
    structure: "",
    process: `ロゴは企業名の由来である「福寿草」をイメージして作成しました
              アクセントである黄色は「福寿草」の色と、未来に向けた希望を表しています`,
    duration: "1日",
    tools: ["Figma"],
    highlights:"",
    colors: [
      { code: "#333333" },
      { code: "#FFFFFF" },
      { code: "#DCAE2A" }
    ],
    isVerticalMockup: true,
    mockupImages: [
      { src: banneretvos, alt: 'スキンケア商品バナー' },
    ],
    nextWork: {
      title: "和包丁LP",
      slug: "japanese-knife",
      image: eyecatchlp2,
    }
  },

  {
    title: "ふるさと納税バナー",
    slug: "furusato-banner",
    // figmaUrl: "https://www.figma.com/proto/BmmuGTxCFCj8elbcEbzgBq/%E9%80%9A%E8%A8%B3%E3%83%BB%E7%BF%BB%E8%A8%B3%E3%82%B5%E3%82%A4%E3%83%88LP?page-id=247%3A47&node-id=247-175&viewport=-224%2C167%2C0.16&t=qofvDgViSJNkLfZE-1&scaling=scale-down-width&content-scaling=fixed",
    eyecatch: bannertrustbank,
    category: "GRAPHIC",
    description: "コンペ課題として制作した架空バナーです",
    target: "ふるさと納税を始めようと思っている人",
    problem: "",
    purpose: "バナーをクリックさせて、指定のWebサイトへ誘導する",
    structure: "",
    process: `ロゴは企業名の由来である「福寿草」をイメージして作成しました
              アクセントである黄色は「福寿草」の色と、未来に向けた希望を表しています`,
    duration: "1日",
    tools: ["Figma"],
    highlights:"",
    colors: [
      { code: "#333333" },
      { code: "#FFFFFF" },
      { code: "#DCAE2A" }
    ],
    isVerticalMockup: true,
    mockupImages: [
      { src: bannertrustbank, alt: 'ふるさと納税バナー' },
    ],
  },


]
