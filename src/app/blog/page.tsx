import Link from 'next/link';

// Mock data representing their WordPress post stream
const MOCK_POSTS = [
  {
    id: 1,
    title: "【日常】大白熱の論理パズルゲーム『タギロン』に挑戦！",
    excerpt: "本日のフリースクールでは、数字を当てる論理パズルゲーム『タギロン』をプレイしました。お互いの質問の駆け引きが凄まじく、大盛り上がりの時間となりました！",
    date: "2026.06.15",
    category: "ボードゲーム",
    tag: "コミュニケーション",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "【プログラミング】ゲーム制作を通じて学ぶ条件分岐と変数",
    excerpt: "Scratchを使ってオリジナルのアクションゲームを作っている生徒の様子をお届け。キャラクターの挙動を調整しながら、プログラミング思考を深めています。",
    date: "2026.06.10",
    category: "プログラミング",
    tag: "ものづくり",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "【工作】3Dプリンターでオリジナルのダイス（サイコロ）を造形しました",
    excerpt: "自分でCADソフトを使ってモデリングしたサイコロを、実際に3Dプリンターで印刷！目の配置や重心の調整など、リアルな試行錯誤を体験しました。",
    date: "2026.06.05",
    category: "3Dプリンター",
    tag: "工作・デザイン",
    readTime: "3 min read"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full">
            Staff Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            スタッフブログ
          </h1>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            ボドゲステーションの日常や、子どもたちがアソビと学びの中で見せてくれたキラキラした瞬間をお届けします。
          </p>
        </div>

        {/* Blog Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Optional Placeholder Image Area */}
              <div className="h-48 bg-gradient-to-br from-amber-100/50 to-orange-100/30 flex items-center justify-center border-b border-slate-50 relative group-hover:opacity-90 transition-opacity">
                <span className="text-4xl transform group-hover:scale-110 transition-transform duration-200">
                  {post.category === "ボードゲーム" ? "🎲" : post.category === "プログラミング" ? "💻" : "🖨️"}
                </span>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <time>{post.date}</time>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-lg font-bold text-slate-800 leading-snug hover:text-amber-600 transition duration-150 mb-3">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-500 text-xs leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                    #{post.tag}
                  </span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-xs font-bold text-amber-500 group-hover:text-amber-600 inline-flex items-center gap-0.5 transition"
                  >
                    続きを読む <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}