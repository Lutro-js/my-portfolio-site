import eyecatchlp from '@/images/eyecatchlp.png'
import eyecatchlp2 from '@/images/eyecatchlp2.png'
import eyecatchui from '@/images/eyecatchui.png'
import dashbord from '@/images/dashbord.png'
import concept from '@/images/concept.jpg'
import concept2 from '@/images/concept2.jpg'
import scenario from '@/images/scenario.jpg'
import persona from '@/images/persona.jpg'
import backgorund from '@/images/background.jpg'
import psychologicalIssues from '@/images/psychologicalIssues.jpg'
import qualityIssues from '@/images/qualityIssues.jpg'
import needs from '@/images/needs.jpg'
import adonisense1 from '@/images/adonisense1.png'
import adonisense2 from '@/images/adonisense2.png'
import adonisense3 from '@/images/adonisense3.png'
import adonisensecard from '@/images/adonisensecard.png'
import eyecatchadonisense from '@/images/eyecatchadonisense.png'
import bannermars from '@/images/banner_mars.jpg'
import banneretvos from '@/images/banner_etvos.jpg'
import bannertrustbank from '@/images/banner_trustbank.jpg'
import eyecatchCoffeeLp from '@/images/eyecatchCoffeeLp.png'
import eyecatchbeautysalon from '@/images/eyecatchbeautysalon.png'
import beautysalon from '@/images/beautysalon.png'
import coffeeshoplp from '@/images/coffeeshoplp.png'

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
    target: ["初めてペットを飼う人。ネット通販に慣れていないユーザー"],
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
    images: {
      concept: { src: concept2, alt: "コンセプトシート" },
      persona: { src: persona, alt: "ペルソナ" },
      backgorund: { src: backgorund, alt: "背景" },
      psychologicalIssues: { src: psychologicalIssues, alt: "心理性の課題" },
      qualityIssues: { src: qualityIssues, alt: "品質の課題" },
      needs: { src: needs, alt: "ニーズ" },
    },
    category: "UI",
    description: `実体験で感じた業務や進捗管理の課題を\nUIで改善するためのデザインを制作しました`,
    target: ["中小企業の業務進捗管理者"],
    problem: "現状のツールでは進捗状況が見えづらく、タスク漏れも発生しやすい",
    purpose: "進捗の可視化と業務のステータス管理を、視覚的にわかりやすく提供",
    structure: "ログイン > 新規作成画面 > ダッシュボード画面",
    process: "",
    duration: `サービス概要定義：1日  
              ペルソナ・シナリオ作成：1日  
              UIデザイン：5時間
              プロトタイプ作成：1日
              合計：4日間`,
    tools: ["Figma"],
    highlights: [
      "業務で使い慣れたエクセルのような見た目を活かし、親しみやすいインターフェースを実現しました",
      "タスクの状態をステータス別にアイコンとカラーで分け、シンプルで見やすいデザインにしました",
    ],
    colors: [
      { code: "#4848C3" },
      { code: "#FFFFFF" },
      { code: "#A5A5B1" }
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
    category: "LP",
    description: "通訳・翻訳サービスを提供する企業向けに、ランディングページをデザインしました。",
    target: ["法人向けの翻訳・通訳サービスを検討している新規顧客"],
    problem: "サービスの強みが伝わりづらく、問い合わせまでの導線が弱かった。",
    purpose: "企業の信頼感と実績を訴求し、問い合わせフォームへ自然に誘導する。",
    structure: "ヒーローセクション > サービス紹介 > 実績 > 料金プラン > よくある質問 > フォーム",
    process: "",
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
    eyecatch: eyecatchadonisense,
    category: "WEB",
    description: "ITコンサル企業向けに、コーポレートサイトとロゴと名刺を制作しました",
    target: ["ITコンサルタント企業"],
    problem: "新規事業立ち上げにあたり、サイトやロゴと名刺を新規作成する",
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
    title: "和包丁LP",
    slug: "japanese-knife",
    figmaUrl: "https://www.figma.com/proto/PB3cHjNGuX2t9ztkjhAVPG/Untitled?page-id=0%3A1&node-id=201-2&viewport=391%2C808%2C0.63&t=PypleWZtB6Bps4Iy-1&scaling=scale-down&content-scaling=fixed",
    eyecatch: eyecatchlp2,
    category: "LP",
    description: "先丸蛸引という刺身包丁の架空LPをデザインしました",
    target: ["刺身包丁を探している人"],
    problem: "個人でデザイン性のあるLP制作に挑戦してみたかった",
    purpose: "先丸蛸引という種類の包丁を知ってもらう",
    structure: "ヒーローセクション > 和包丁の説明 > 素材や製品の特徴 > 使い方 > お手入れ方法 > お問い合わせ",
    process: "和包丁の美しさと歴史背景を伝え、使い手に愛着を持ってもらうことを意識",
    duration: "1週間",
    tools: ["Figma", "Illustrator","Photoshop"],
    highlights: [
      "上部から中間まで縦書きで和風な雰囲気を出し、使い方やお手入れなどは読みやすいように横書きにしました",
      "ヒーローセクションとお刺身を切っている画像は実際に家にあるものを撮影して使用しました",
    ],
    colors: [
      { code: "#000000" },
      { code: "#4D4D4D" },
      { code: "#FFFFFF" },
      { code: "#900000" }
    ],
    isVerticalMockup: false,
    nextWork: {
      title: "ペット商品バナー",
      slug: "pet-banner",
      image: bannermars,
    }
  },

  {
    title: "ペット商品バナー",
    slug: "pet-banner",
    eyecatch: bannermars,
    category: "GRAPHIC",
    description: "コンペ課題として制作した架空バナーです",
    target: [
      "ペット(犬/猫)を飼っているペットオーナー",
      "自然派ペットフードを探している方",
      "ペットの健康を気にしている",
      "通販で購入したい",
    ],
    problem: "",
    purpose: "愛犬/愛猫と生活するペットオーナーが、ニュートロ™︎を買いたくなるような広告アイデア",
    structure: "",
    process: "ニュートロ公式ホームページで掲げているのペットフードへのこだわりをバナーを見た人に伝わりやすくデザインすることを意識しました。",
    duration: "1日",
    tools: ["Figma"],
    highlights: [
      "愛猫、愛犬が健康でいてほしい飼い主の思いを表現",
      "誰でも読みやすいようにユニバーサルデザインフォントと、親しみやすい手書き風フォントを使用",
      "実際のフード商品画像を載せてターゲットがイメージしやすいように工夫"
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
    eyecatch: banneretvos,
    category: "GRAPHIC",
    description: "コンペ課題として制作した架空バナーです",
    target: ["敏感肌、ゆらぎ肌に悩みがある20~40代の女性"],
    problem: "",
    purpose: "敏感肌、ゆらぎ肌に悩みがある女性に「エトヴォス パーフェクトキット」を選んでもらうアイデア",
    structure: "",
    process: `商品画像の美しさを活かしながら、「うるおい」「やさしさ」「清潔感」を感じられる柔らかいトーンで全体をデザインしています`,
    duration: "1日",
    tools: ["Figma"],
    highlights: [
      "メイクとスキンケアがセットであることを分かりやすく伝えるために、カラーパレットのビジュアルを効果的に配置",
      "「初回限定」やクーポン情報を目立たせることで、ターゲットの目に留まりやすく、興味を引きやすい構成にしました",
    ],
    isVerticalMockup: true,
    mockupImages: [
      { src: banneretvos, alt: 'スキンケア商品バナー' },
    ],
    nextWork: {
      title: "ふるさと納税バナー",
      slug: "furusato-banner",
      image: bannertrustbank,
    }
  },

  {
    title: "ふるさと納税バナー",
    slug: "furusato-banner",
    eyecatch: bannertrustbank,
    category: "GRAPHIC",
    description: "コンペ課題として制作した架空バナーです",
    target: ["ふるさと納税を始めようと思っている人"],
    problem: "",
    purpose: "初めてふるさと納税をする時に、「ふるさとチョイス」を選ぶ”きっかけ”になる広告",
    structure: "",
    process: "「ふるさとチョイス」でふるさと納税の申し込みをしてもらう、ブランドイメージアップの効果が出せるよう制作しました",
    duration: "1日",
    tools: ["Figma"],
    highlights: [
      "魅力的なビジュアル要素を取り入れつつ、遊びすぎないバランスを意識し、地域を応援するまじめな雰囲気を大切にしました",
      "実績紹介や診断チャートを用意することで、ふるさと納税が初めてのユーザーでも安心して利用を始められるよう配慮しています"
    ],
    isVerticalMockup: true,
    mockupImages: [
      { src: bannertrustbank, alt: 'ふるさと納税バナー' },
    ],
  },

  {
    title: "架空の珈琲店LP",
    slug: "coffee-lp",
    eyecatch: eyecatchCoffeeLp,
    category: "LP",
    description: "オンラインショップと実店舗を所有している架空の珈琲店LPをデザインしました",
    target: ["老若男女コーヒーが好きな人"],
    problem: "",
    purpose: "オンラインや実店舗で商品を購入してもらう",
    structure: "",
    process: "",
    duration: "1日",
    tools: ["Figma", "Photoshop"],
    highlights: [
      "コーヒーが大好きな人でも、マニアほどではないが普通に好きな人でも楽しめるようにコンテンツを工夫",
      "所々丸みを帯びたレイアウトでコーヒー豆を連想させる"
    ],
    colors: [
      { code: "#EFE4CE" },
      { code: "#562B20" },
      { code: "#FFFFFF" },
      { code: "#A79C85" }
    ],
        isVerticalMockup: true,
    mockupImages: [
      { src: coffeeshoplp, alt: 'PC画面' },
    ],
    isVerticalMockup: false,
    nextWork: {
      title: "ペット商品バナー",
      slug: "pet-banner",
      image: bannermars,
    },
  },

    {
    title: "架空の美容院予約サイト",
    slug: "beauty-salon-reservation-site",
    eyecatch: eyecatchbeautysalon,
    category: "WEB",
    description: "",
    target: ["美容院を予約したい20-40代の男女"],
    problem: "全国から美容院を探して予約できるサイトを作る",
    purpose: "様々な条件で検索でき、目的の美容院に辿り着ける",
    structure: "ヘアサロン > ヘアカタログ > スタイリスト > メンズ > ネイル > まつげ",
    duration: `デザイン：１日`,
    tools: ["Figma"],
    highlights: [
      "キーワード検索の人気のキーワードを表示して、入力しやすいようにしました",
    ],
    colors: [
      { code: "#F9ECF8" },
      { code: "#FFFFFF" },
      { code: "#C737C5" }
    ],
    isVerticalMockup: true,
    mockupImages: [
      { src: beautysalon, alt: 'PC画面' },
    ],
    nextWork: {
      title: "和包丁LP",
      slug: "japanese-knife",
      image: eyecatchlp2,
    }
  },
]