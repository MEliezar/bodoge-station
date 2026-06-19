"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-sm">
      {/* 1. Top Green Announcement Ticker */}
      <div className="bg-lime-500 text-white text-[11px] sm:text-xs font-bold py-2 px-4 text-center tracking-wider border-b border-lime-600">
        船橋のフリースクール「ボドゲステーション」へようこそ！新京成線・習志野駅から徒歩1分の通いやすい居場所です。
      </div>

      {/* Main Header Arena */}
      <div className="bg-white/95 backdrop-blur-md border-b-4 border-lime-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            
            {/* Playful Branding Logo */}
            <Link href="/" onClick={closeAllMenus} className="flex items-center space-x-2 group">
              <span className="text-3xl group-hover:animate-bounce">🎲</span>
              <div className="flex flex-col">
                <span className="text-xs font-black text-lime-600 tracking-wider">船橋フリースクール</span>
                <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight -mt-1">
                  ボドゲ<span className="text-amber-500">ステーション</span>
                </span>
              </div>
            </Link>

            {/* Right Action Widgets (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Phone Block */}
              <div className="bg-lime-50 border-2 border-lime-400 rounded-2xl px-4 py-1.5 flex flex-col items-end text-slate-700">
                <span className="text-[10px] font-bold text-lime-700">お問い合わせはお気軽に！</span>
                <span className="text-sm font-black text-lime-600">📞 047-769-7545</span>
              </div>
              {/* Instant Booking Action */}
              <Link href="/contact" className="bg-pink-500 text-white font-extrabold text-xs px-5 py-3 rounded-2xl shadow-[0_4px_0_#db2777] hover:translate-y-[2px] hover:shadow-[0_2px_0_#db2777] active:translate-y-[4px] active:shadow-none transition-all tracking-wider text-center">
                まずはここから♪<br />無料体験の申し込み
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-lime-500 focus:outline-none p-2 rounded-xl bg-slate-50 border border-slate-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* 2. Desktop Card-Based Navigation Row */}
        <div className="hidden md:block bg-lime-50/50 border-t border-lime-100 py-2">
          <div className="max-w-4xl mx-auto px-4 flex justify-center space-x-3">
            <Link href="/" className="bg-white border-2 border-slate-200 hover:border-red-400 text-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm">
              <span>🏠</span> ホーム
            </Link>
            <Link href="/about" className="bg-white border-2 border-slate-200 hover:border-lime-400 text-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm">
              <span>🎲</span> フリースクールとは
            </Link>

            {/* HOVER DROPDOWN TRIGGER CARD */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="bg-white border-2 border-slate-200 hover:border-green-400 text-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer">
                <span>🧩</span> 入学のご案内 <span className="text-[10px] text-slate-400">▼</span>
              </button>

              {/* Floating Nested Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white border-2 border-green-200 rounded-xl shadow-lg py-2 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                <Link href="/admissions" onClick={closeAllMenus} className="block px-4 py-2 text-xs font-bold text-slate-700 hover:bg-green-50 hover:text-green-600 transition">
                  • Admission process
                </Link>
                <Link href="/admissions#fees" onClick={closeAllMenus} className="block px-4 py-2 text-xs font-bold text-slate-700 hover:bg-green-50 hover:text-green-600 transition">
                  • Regarding tuition fees
                </Link>
                <Link href="/admissions#faq" onClick={closeAllMenus} className="block px-4 py-2 text-xs font-bold text-slate-700 hover:bg-green-50 hover:text-green-600 transition">
                  • Frequently Asked Questions
                </Link>
              </div>
            </div>

            <Link href="/blog" className="bg-white border-2 border-slate-200 hover:border-purple-400 text-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm">
              <span>♟️</span> スタッフブログ
            </Link>
            <Link href="/contact" className="bg-white border-2 border-slate-200 hover:border-pink-400 text-slate-700 font-bold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm">
              <span>✉️</span> アクセス・問い合わせ
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        <div className={`md:hidden bg-white border-t border-slate-100 transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="p-4 space-y-2 text-sm font-bold text-slate-700">
            <Link href="/" onClick={closeAllMenus} className="block p-3 rounded-xl bg-slate-50 hover:bg-lime-50 transition">🏠 ホーム</Link>
            <Link href="/about" onClick={closeAllMenus} className="block p-3 rounded-xl bg-slate-50 hover:bg-lime-50 transition">🎲 フリースクールとは</Link>
            
            {/* Mobile Collapsible Admissions Header */}
            <div className="bg-slate-50 rounded-xl p-3 space-y-2">
              <div className="text-slate-800 flex justify-between items-center border-b border-slate-200/60 pb-1">
                <span>🧩 入学のご案内</span>
              </div>
              <div className="pl-4 space-y-1 text-xs text-slate-500">
                <Link href="/admissions" onClick={closeAllMenus} className="block py-1.5 hover:text-green-600">• Admission process</Link>
                <Link href="/admissions#fees" onClick={closeAllMenus} className="block py-1.5 hover:text-green-600">• Regarding tuition fees</Link>
                <Link href="/admissions#faq" onClick={closeAllMenus} className="block py-1.5 hover:text-green-600">• Frequently Asked Questions</Link>
              </div>
            </div>

            <Link href="/blog" onClick={closeAllMenus} className="block p-3 rounded-xl bg-slate-50 hover:bg-lime-50 transition">♟️ スタッフブログ</Link>
            <Link href="/contact" onClick={closeAllMenus} className="block p-3 rounded-xl bg-pink-500 text-white text-center shadow-md font-black">✉️ 無料体験の申し込み</Link>
          </div>
        </div>
      </div>
    </header>
  );
}