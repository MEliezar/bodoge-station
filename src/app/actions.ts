"use server";

import { Resend } from 'resend';

// Initialize Resend securely using your secret environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const inquiryType = formData.get('inquiryType') as string;
  const message = formData.get('message') as string;

  // Simple server-side validation
  if (!name || !email || !message) {
    return { success: false, error: "必須項目が入力されていません。" };
  }

  try {
    // Resend's free tier allows sending emails to your own registered login email address
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'distor.mark.eliezar.magno@gmail.com', // <-- Put your Resend account email address here!
      subject: `【ボドゲステーション問い合わせ】 ${name}様より`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>種別:</strong> ${inquiryType === 'trial' ? '無料体験・見学' : '一般質問'}</p>
        <p><strong>本文:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email submission error:", error);
    return { success: false, error: "メールの送信に失敗しました。" };
  }
}