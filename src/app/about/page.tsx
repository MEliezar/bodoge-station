import Link from 'next/link';

export default function AboutPage() {
  const principles = [
    {
      num: "01",
      title: "個人のペースを最優先に",
      desc: "集団のスケジュールに合わせる必要はありません。何時に来ても、何をどれだけ進めても、本人の意思を100%尊重します。"
    },
    {
      num: "02",
      title: "「好き」から始まる学び",
      desc: "ボードゲームの戦略を練る、プログラムでゲームを自作する、3Dで立体物を作る。すべて本人の「楽しい」が学習の原動力です。"
    },
    {
      num: "03",
      title: "心の安全基地（サードプレイス）",
      desc: "学校でも家庭でもない、利害関係のない第3の居場所として、失敗が許され、ありのままの自分でいられる空間を守ります。"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full">
            Our Philosophy
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            当校について
          </h1>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed max-w-2xl mx-auto">
            ボドゲステーションは、不登校や学校に馴染めない子どもたち、放課後にクリエイティブな活動をしたい子どもたちのための、オルタナティブ・フリースクールです。
          </p>
        </div>

        {/* Vision Section */}
        <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 border-l-4 border-amber-500 pl-4">
            アソビと学びを往復する
          </h2>
          <div className="text-slate-600 text-sm leading-relaxed space-y-4">
            <p>
              私たちは、「教育」を一方的に教え込むものだとは考えていません。
              世界の優れたボードゲームには、計算、言語、交渉、論理的思考、そして他者の心の動きを推測する要素が詰まっています。
            </p>
            <p>
              ゲームを通じて他者と笑い合い、ルールを理解し、勝利への戦略を組み立てるプロセスそのものが、最高のコミュニケーション教育です。
              さらにそこから一歩進んで、PCでのデジタルクリエイション（プログラミングや3Dモデリング）に挑戦することで、自分のアイデアを実世界に形にする主体性を育みます。
            </p>
          </div>
        </section>

        {/* 3 Core Rules/Principles Layout Grid */}
        <section className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-10">大切にしている3つの約束</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                <span className="absolute -top-4 -right-2 text-6xl font-black text-slate-50 opacity-[0.04] select-none pointer-events-none">
                  {p.num}
                </span>
                <span className="text-xs font-bold text-amber-500 block mb-2">{p.num}.</span>
                <h4 className="font-bold text-slate-800 text-base mb-2">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call To Action Area */}
        <section className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white p-8 sm:p-10 text-center shadow-md">
          <h3 className="text-xl sm:text-2xl font-extrabold mb-3">まずは一度、遊びに来てみませんか？</h3>
          <p className="text-white/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
            見学や実際のゲーム体験はいつでも無料です。「どんな雰囲気か見てみたい」「3Dプリンターを触ってみたい」など、些細なきっかけで構いません。
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-amber-600 font-bold px-8 py-3 rounded-full text-xs sm:text-sm hover:bg-amber-50 shadow transition inline-block"
          >
            無料アソビ体験に申し込む
          </Link>
        </section>

      </div>
    </main>
  );
}