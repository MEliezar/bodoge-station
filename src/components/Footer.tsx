import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-black text-xl tracking-tight">
              <span>🎲</span>
              <span>ボドゲステーション</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              ボードゲーム・プログラミング・3Dプリンター工作を自由に体験できる、子どもたちのためのサードプレイス・フリースクールです。
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">リンク</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/" className="hover:text-amber-400 transition">ホーム</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition">当校について</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition">スタッフブログ</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* Column 3: Operational Context */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">スクール案内</h4>
            <p className="text-xs leading-relaxed">
              見学やアソビ体験はいつでも無料で受け付けております。お気軽にお問い合わせフォームよりご連絡ください。
            </p>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="border-t border-slate-900 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>&copy; {currentYear} ボドゲステーション. All rights reserved.</p>
          <p className="tracking-wide">Mark Eliezar Magno Distor</p>
        </div>
      </div>
    </footer>
  );
}