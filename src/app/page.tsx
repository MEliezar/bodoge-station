import Link from 'next/link';

export default function Home() {
  const features = [
    {
      emoji: "🎲",
      title: "ボードゲーム",
      subtitle: "コミュニケーションの輪",
      desc: "世界のボードゲームを通じて、自然な対話、論理的思考、そして他者への思いやりを育むコミュニティを形作ります。",
      borderColor: "hover:border-red-400"
    },
    {
      emoji: "💻",
      title: "プログラミング",
      subtitle: "未来を創り出すスキル",
      desc: "ただ消費する側から創造する側へ。自分のアイデアをコードで形にする楽しさを基礎から体験します。",
      borderColor: "hover:border-purple-400"
    },
    {
      emoji: "🖨️",
      title: "3Dプリンター・工作",
      subtitle: "創造をリアリティに",
      desc: "頭の中で描いたデザインを最新技術で立体化。モノづくりのプロセスを通じて試行錯誤の価値を学びます。",
      borderColor: "hover:border-lime-400"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Dynamic Pop Hero Wrapper */}
      <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 text-center border-b-8 border-lime-100 overflow-hidden min-h-[500px] flex items-center justify-center">
        
        {/* ── THE LIVE INFINITE SCROLLING BACKGROUND PANEL ── */}
        <div className="absolute inset-0 opacity-40 pointer-events-none custom-scrolling-bg" />
        
        {/* Colorful Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />

        {/* Core Hero Branding Board (Tactile Game Box style) */}
        <div className="max-w-3xl mx-auto relative z-10 bg-white/95 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border-4 border-lime-400 shadow-[0_8px_0_#a3e635]">
          <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider mb-6 animate-pulse">
            ✨ アソビと学びが交差する居場所
          </span>
          
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            ボードゲームを通して、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-emerald-500">
              安心して過ごせる自分の居場所
            </span>を見つけよう！
          </h1>
          
          <p className="mt-6 text-sm sm:text-base font-bold text-slate-600 max-w-xl mx-auto leading-relaxed">
            ボドゲステーションは、子どもたちの個人のペースを100%尊重するフリースクールです。
            ゲームの楽しさと先進技術を掛け合わせ、未来への自信を育みます。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            {/* Pop-Out Action Button */}
            <Link 
              href="/contact" 
              className="w-full bg-pink-500 text-white font-black px-8 py-4 rounded-2xl shadow-[0_5px_0_#db2777] hover:translate-y-[2px] hover:shadow-[0_3px_0_#db2777] active:translate-y-[5px] active:shadow-none transition-all text-sm tracking-wide block text-center"
            >
              まずはここから♪ 無料体験の申し込み
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Blocks Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight relative inline-block">
            当スクールの3つの柱
            <span className="absolute bottom-0 left-0 w-full h-3 bg-lime-300/40 -z-10 transform scale-x-105" />
          </h2>
          <p className="text-slate-500 text-xs font-bold mt-3 leading-relaxed">
            カリキュラムを強制することはありません。本人が「やってみたい！」と思った瞬間を全力で応援します。
          </p>
        </div>

        {/* Tactile Card Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-100 ${item.borderColor} hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="text-4xl p-3 bg-lime-50 rounded-2xl inline-block group-hover:scale-110 transition duration-200 mb-6 border border-lime-100">
                {item.emoji}
              </div>
              <span className="block text-[11px] font-black text-lime-600 uppercase tracking-widest mb-1">
                {item.subtitle}
              </span>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}