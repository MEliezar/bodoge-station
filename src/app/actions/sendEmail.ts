"use server";

import { Resend } from 'resend';

export async function sendContactEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return { success: false, error: "サーバーの設定エラーが発生しました。" };
  }

  const resend = new Resend(apiKey);
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const inquiryType = formData.get('inquiryType') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'distor.mark.eliezar.magno@gmail.com',
      subject: `【ボドゲステーション】お問い合わせ: ${name}様`,
      html: `
        <h2>新しいお問い合わせが入りました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>種別:</strong> ${inquiryType === 'trial' ? '無料体験・見学' : '一般質問'}</p>
        <p><strong>本文:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    });

    return { success: true };
  } catch (error: any) {
    console.error("Resend delivery error:", error);
    return { success: false, error: "メールの送信に失敗しました。" };
  }
}