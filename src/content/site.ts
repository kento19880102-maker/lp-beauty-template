export interface Stat {
  label: string;
  value: string;
}

export interface Plan {
  name: string;
  note: string;
  regularPrice: string;
  currentPrice: string;
  recommended?: boolean;
  badge?: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  comment: string;
}

export interface SiteContent {
  company: string;
  meta: { title: string; description: string; ogImage: string; url: string };
  nav: { label: string; href: string }[];
  cta: { label: string; subLabel: string; href: string };
  psychology: {
    scarcityBanner: { enabled: boolean; text: string };
    socialProofStats: Stat[];
    lossAversion: { enabled: boolean; text: string };
    priceAnchoring: { enabled: boolean };
    limitedOffer: { enabled: boolean; text: string };
  };
  hero: { title: string; lead: string; videoSrc: string; secondaryCta: string };
  problems: { eyebrow: string; title: string; lead: string; items: string[] };
  loss: { title: string; risks: string[] };
  features: { eyebrow: string; title: string; lead: string; items: { icon: string; title: string; text: string }[] };
  beforeAfter: { eyebrow: string; title: string; before: string[]; after: string[] };
  testimonials: { eyebrow: string; title: string; items: Testimonial[] };
  logos: { title: string; items: string[] };
  pricing: { eyebrow: string; title: string; lead: string; plans: Plan[] };
  faq: { eyebrow: string; title: string; items: { question: string; answer: string }[] };
  form: { eyebrow: string; title: string; lead: string; action: string };
  footer: { sns: { label: string; href: string }[] };
}

export const site: SiteContent = {
  company: "Salon AOI",
  meta: {
    title: "Salon AOI | ネイル・エステ・フェイシャル | 完全個室の個人サロン",
    description: "完全個室で寛げる個人サロン。ジェルネイル・フェイシャル・ボディトリートメントで、あなただけの贅沢な時間を。",
    ogImage: "/og-image.png",
    url: "https://example.com",
  },
  nav: [
    { label: "お悩み", href: "#problems" },
    { label: "メニュー", href: "#features" },
    { label: "お客様の声", href: "#proof" },
    { label: "料金", href: "#pricing" },
    { label: "予約", href: "#contact" },
  ],
  cta: {
    label: "無料カウンセリングを予約する",
    subLabel: "完全個室 / 当日予約OK / キャンセル無料",
    href: "#contact",
  },
  psychology: {
    scarcityBanner: { enabled: false, text: "今月限定: 初回トライアルコースが50%OFF" },
    socialProofStats: [
      { value: "完全個室", label: "プライベート空間" },
      { value: "当日OK", label: "当日予約受付中" },
      { value: "カウンセリング", label: "丁寧なヒアリング" },
    ],
    lossAversion: { enabled: false, text: "肌・爪のケアを後回しにするほど、回復にかかる時間と費用が増えていきます。" },
    priceAnchoring: { enabled: false },
    limitedOffer: { enabled: false, text: "5月限定 / 初回体験コース先着10名様" },
  },
  hero: {
    title: "自分だけの時間を、ここで。",
    lead: "Salon AOIは、ネイル・エステ・フェイシャルを提供する架空の完全個室サロンです。プロの技術と落ち着いた空間で、日常を切り離すひとときを。",
    videoSrc: "/hero-video.mp4",
    secondaryCta: "メニューを見る",
  },
  problems: {
    eyebrow: "Problem",
    title: "こんなお悩みはありませんか？",
    lead: "忙しい毎日の中で、自分のケアが後回しになっていませんか。",
    items: [
      "なかなか自分の時間が取れない",
      "どのサロンを選べばいいか分からない",
      "技術や清潔感が心配で予約をためらっている",
      "爪や肌トラブルを誰かに相談したい",
    ],
  },
  loss: {
    title: "ケアを後回しにすると…",
    risks: [
      "爪の状態が悪化し、自己ケアでは改善が難しくなります",
      "肌の乾燥・くすみが蓄積し、見た目の印象に影響します",
      "自分を大切にする習慣がなくなり、日常のモチベーションが下がります",
    ],
  },
  features: {
    eyebrow: "Solution",
    title: "Salon AOIが選ばれる3つの理由",
    lead: "技術と空間、そして安心感にこだわった個人サロンです。",
    items: [
      {
        icon: "01",
        title: "完全個室で落ち着ける空間",
        text: "他のお客様と顔を合わせない完全個室。緊張せず、自分のペースでくつろげます。",
      },
      {
        icon: "02",
        title: "アレルギー対応素材を使用",
        text: "敏感肌・爪が薄い方にも対応した低刺激素材を使用。施術前のカウンセリングを徹底します。",
      },
      {
        icon: "03",
        title: "当日予約・キャンセル無料",
        text: "思い立ったときにすぐ予約OK。急なキャンセルも無料で承ります（前日18時まで）。",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Before / After",
    title: "はじめての方が通い続ける理由",
    before: [
      "どこのサロンも似たようで選べない",
      "技術や衛生管理が心配",
      "次回の予約タイミングが分からない",
    ],
    after: [
      "空間と技術でひと目で違いが分かる",
      "カウンセリングで安心して施術を受けられる",
      "定期ケアのペースを一緒に考えてくれる",
    ],
  },
  testimonials: {
    eyebrow: "Voice",
    title: "お客様の声",
    items: [
      {
        name: "M.K. さま",
        role: "30代 / 会社員",
        image: "/testimonial-1.svg",
        comment: "個室なのでリラックスできました。施術中も話しやすくて、また来ようと思います。",
      },
      {
        name: "S.T. さま",
        role: "40代 / 主婦",
        image: "/testimonial-2.svg",
        comment: "敏感肌で諦めていたエステが受けられました。素材へのこだわりが伝わって安心感があります。",
      },
      {
        name: "A.N. さま",
        role: "20代 / パート",
        image: "/testimonial-3.svg",
        comment: "当日予約できてすぐ行けたのが助かりました。ネイルがかわいくなって気分が上がりました。",
      },
    ],
  },
  logos: {
    title: "こんな方々にご利用いただいています",
    items: ["敏感肌の方", "初めてサロンに行く方", "忙しい方", "学生の方", "産後ケアをお探しの方", "プレゼントにお探しの方"],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "シンプルな3つのメニュー構成",
    lead: "はじめての方向けのお試しコースから、定期ケアまで目的に合わせて選べます。",
    plans: [
      {
        name: "フェイシャル & ボディ",
        note: "全身ケアを体験したい方向け",
        regularPrice: "24,000円",
        currentPrice: "12,000円",
        features: ["フェイシャルケア60分", "ボディトリートメント30分", "カウンセリング付き", "アレルギー対応相談OK"],
      },
      {
        name: "ネイル + フェイシャル",
        note: "一番人気の組み合わせコース",
        regularPrice: "18,000円",
        currentPrice: "9,800円",
        recommended: true,
        badge: "おすすめ",
        features: ["ジェルネイル（手）", "フェイシャルケア30分", "ケアカウンセリング", "アート1本無料"],
      },
      {
        name: "ジェルネイル 単体",
        note: "まずネイルだけ試したい方向け",
        regularPrice: "9,800円",
        currentPrice: "5,500円",
        features: ["ジェルネイル（手）", "甘皮処理込み", "オフ込み", "次回予約割引あり"],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "よくある質問",
    items: [
      {
        question: "初めてでも大丈夫ですか？",
        answer: "もちろんです。ご来店前に簡単なヒアリングシートをお送りしますので、アレルギーや爪・肌の状態をあらかじめお伝えいただけます。",
      },
      {
        question: "当日予約はできますか？",
        answer: "空きがあれば当日でもご予約いただけます。お電話またはLINEでご連絡ください。",
      },
      {
        question: "子ども連れでも来店できますか？",
        answer: "完全個室のため、お子様連れも対応可能です。事前にご相談ください。",
      },
      {
        question: "ジェルオフだけでも来店できますか？",
        answer: "はい。オフのみのご予約も承っております。他サロンのジェルも対応可能です。",
      },
      {
        question: "支払い方法は何がありますか？",
        answer: "現金・各種クレジットカード・PayPay・LINEPayに対応しています。",
      },
      {
        question: "キャンセルポリシーはありますか？",
        answer: "前日18時までのキャンセルは無料です。それ以降はキャンセル料（施術料金の50%）をいただいております。",
      },
      {
        question: "爪が薄くても施術できますか？",
        answer: "薄い爪・二枚爪の方にも対応した素材を使用しています。施術前のカウンセリングで最適な対応をご提案します。",
      },
    ],
  },
  form: {
    eyebrow: "Contact",
    title: "まずは気軽にご相談ください。",
    lead: "メニューの相談・日程の確認など、お気軽にどうぞ。お名前・メール・ご相談内容だけでOKです。",
    action: "https://formspree.io/f/your-form-id",
  },
  footer: {
    sns: [
      { label: "Instagram", href: "#" },
      { label: "LINE", href: "#" },
      { label: "X", href: "#" },
    ],
  },
};
