import Link from 'next/link';
import { notFound } from 'next/navigation';

// Our shared mock data stream
const MOCK_POSTS = [
  {
    id: 1,
    title: "【日常】大白熱の論理パズルゲーム『タギロン』に挑戦！",
    content: "本日のフリースクールでは、数字を当てる論理パズルゲーム『タギロン』をプレイしました。お互いの質問の駆け引きが凄まじく、大盛り上がりの時間となりました！タギロンは、限られた質問カードを駆使して相手の隠し持っている数字の色と値を完全に言い当てるゲームです。論理的思考力はもちろん、相手がどの質問を選んだかという『意図』を読む力も鍛えられます。生徒たちは最初は苦戦していましたが、中盤からは『あ、分かった！』『その質問が来るということは…』と、驚くほど鋭い考察を見せてくれました。遊びながら自然とロジックが組み立てられていく、素晴らしい時間でした。",
    date: "2026.06.15",
    category: "ボードゲーム",
    tag: "コミュニケーション"
  },
  {
    id: 2,
    title: "【プログラミング】ゲーム制作を通じて学ぶ条件分岐と変数",
    content: "Scratchを使ってオリジナルのアクションゲームを作っている生徒の様子をお届け。キャラクターの挙動を調整しながら、プログラミング思考を深めています。今回は『キャラクターが壁に触れたら跳ね返る』『コインに触れたらスコアが1増える』という処理を実装しました。これらはまさにプログラミングの根幹である『条件分岐』と『変数』の概念です。教科書で文字として学ぶと難しく感じる概念も、自分が作っているゲームの中で意図通りに動く体験を通すと、子どもたちは驚くほどの速さで吸収していきます。次はステージ2の制作に挑戦するそうです！",
    date: "2026.06.10",
    category: "プログラミング",
    tag: "ものづくり"
  },
  {
    id: 3,
    title: "【工作】3Dプリンターでオリジナルのダイス（サイコロ）を造形しました",
    content: "自分でCADソフトを使ってモデリングしたサイコロを、実際に3Dプリンターで印刷！目の配置や重心の調整など、リアルな試行錯誤を体験しました。画面の中で作った3Dデータが、数時間かけて少しずつプラスチックとして物理的な形になっていく様子を、生徒は目を輝かせながら見つめていました。出来上がったサイコロを実際に転がしてみると、少し重心が偏っていることに気づく場面も。これこそがモノづくりの醍醐味です。失敗を悪とせず、原因を突き詰めてデータを修正し、もう一度印刷する。この素晴らしい試行錯誤のサイクルが自然と生まれています。",
    date: "2026.06.05",
    category: "3Dプリンター",
    tag: "工作・デザイン"
  }
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  // Await the dynamic parameters route token
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id, 10);
  
  // Find the matching article
  const post = MOCK_POSTS.find((p) => p.id === postId);

  // If the article doesn't exist (e.g. /blog/999), show Next.js standard 404
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        
        {/* Splash Accent Header Banner */}
        <div className="h-48 bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-amber-50 flex items-center justify-center border-b border-slate-100 relative">
          <span className="text-6xl">
            {post.category === "ボードゲーム" ? "🎲" : post.category === "プログラミング" ? "💻" : "🖨️"}
          </span>
          <span className="absolute bottom-6 left-6 sm:left-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>

        {/* Main Body Article Wrap */}
        <div className="p-6 sm:p-10">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
            <time>{post.date}</time>
            <span className="bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-md font-medium">#{post.tag}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug mb-8">
            {post.title}
          </h1>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-6 whitespace-pre-wrap border-t border-slate-100 pt-8">
            {post.content}
          </div>

          {/* Back Navigation Footer */}
          <div className="border-t border-slate-100 mt-12 pt-8 flex justify-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-2.5 rounded-xl text-xs transition"
            >
              &larr; ブログ一覧に戻る
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}