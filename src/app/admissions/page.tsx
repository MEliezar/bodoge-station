import Link from 'next/link';

export default function AdmissionsPage() {
  const steps = [
    {
      num: "STEP 01",
      title: "お問い合わせ・無料体験のご予約",
      desc: "まずは、当サイトのお問い合わせフォームまたはお電話より、無料アソビ体験・見学の希望日時をご連絡ください。スタッフより折り返し受付確認のご案内をいたします。",
      emoji: "✉️",
      color: "border-pink-400 bg-pink-50/50"
    },
    {
      num: "STEP 02",
      title: "無料体験・教室内見学（個別対応）",
      desc: "実際に教室へお越しいただき、雰囲気を感じてみてください。お子様が好きなボードゲームやPC工作を実際にプレイしながら、リラックスした環境でスタッフとお話しいただけます。",
      emoji: "🎲",
      color: "border-amber-400 bg-amber-50/50"
    },
    {
      num: "STEP 03",
      title: "個別カウンセリング＆ご案内",
      desc: "保護者様のお悩みや、お子様の現在の状況・通学ペースについて丁寧にお伺いします。スクールの利用システムや学費等についても詳しくご説明いたします。",
      emoji: "🤝",
      color: "border-purple-400 bg-purple-50/50"
    },
    {
      num: "STEP 04",
      title: "ご入会のお手続き・通学スタート！",
      desc: "内容にご納得いただけましたら、入会書類をご提出いただき、手続き完了となります。お子様の「行きたい」と思った日・時間から、自由に通学をスタートしていただけます。",
      emoji: "🚀",
      color: "border-lime-400 bg-lime-50/50"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Playful Header */}
        <div className="text-center mb-16">
          <span className="text-lime-600 text-xs font-black uppercase tracking-widest bg-lime-100 px-4 py-1.5 rounded-full">
            Admission Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4">
            入学のご案内・手続きの流れ
          </h1>
          <p className="text-slate-500 text-xs font-bold mt-3 leading-relaxed max-w-xl mx-auto">
            ボドゲステーションでは、お子様が安心して最初の一歩を踏み出せるよう、丁寧な個別見学・無料体験プロセスを設けています。
          </p>
        </div>

        {/* Tactile Roadmap Steps Wrapper */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:w-1 before:bg-dashed before:border-l-2 before:border-slate-200 before:-z-10 pb-4">
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col sm:flex-row items-start gap-6 bg-white p-6 sm:p-8 rounded-3xl border-4 ${step.color} shadow-sm relative group hover:shadow-md transition duration-200`}
            >
              {/* Badge Icon Counter */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition duration-200">
                {step.emoji}
              </div>

              {/* Main Text Details */}
              <div className="space-y-2 flex-grow">
                <span className="block text-xs font-black text-lime-600 tracking-wider">
                  {step.num}
                </span>
                <h3 className="text-lg font-black text-slate-800">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Box Block */}
        <div className="bg-gradient-to-r from-lime-500 to-emerald-500 rounded-3xl text-white p-8 sm:p-12 text-center shadow-md mt-16 border-b-8 border-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1] pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-black mb-3">
            体験・見学はいつでも完全無料です！
          </h3>
          <p className="text-white/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8 font-medium">
            保護者様のみのご相談や見学も大歓迎です。まずはお気軽にお子様の好きなことについてお聞かせください。
          </p>
          <Link 
            href="/contact" 
            className="bg-pink-500 text-white font-black px-10 py-4 rounded-2xl text-xs sm:text-sm shadow-[0_5px_0_#db2777] hover:translate-y-[2px] hover:shadow-[0_3px_0_#db2777] active:translate-y-[5px] active:shadow-none transition-all inline-block"
          >
            無料体験・見学に申し込む ✨
          </Link>
        </div>

      </div>
    </main>
  );
}