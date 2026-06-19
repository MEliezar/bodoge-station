"use client";

import React, { useState, useTransition } from 'react';
import { sendEmail } from '../actions/sendEmail';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.error || '予期せぬエラーが発生しました。');
      }
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full">Contact Us</span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-3">お問い合わせ・無料体験申し込み</h1>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-12 px-4">
              <div className="text-5xl mb-4">✉️</div>
              <h2 className="text-2xl font-bold text-slate-800">送信が完了しました！</h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">確認の上、折り返しご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && <div className="p-4 bg-rose-50 text-rose-600 text-xs font-bold rounded-xl">{errorMsg}</div>}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">お名前 <span className="text-rose-500">*</span></label>
                <input type="text" name="name" required disabled={isPending} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">メールアドレス <span className="text-rose-500">*</span></label>
                <input type="email" name="email" required disabled={isPending} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition disabled:opacity-50" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">お問い合わせ内容 <span className="text-rose-500">*</span></label>
                <select name="inquiryType" disabled={isPending} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition disabled:opacity-50">
                  <option value="trial">無料アソビ体験・見学の申し込み</option>
                  <option value="general">スクールに関する一般的なご質問</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">メッセージ本文 <span className="text-rose-500">*</span></label>
                <textarea name="message" required rows={5} disabled={isPending} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition resize-none disabled:opacity-50" />
              </div>
              <button type="submit" disabled={isPending} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl transition text-sm disabled:opacity-50">
                {isPending ? '送信中...' : 'メッセージを送信する'}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}