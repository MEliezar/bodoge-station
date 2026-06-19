"use server";

import { Resend } from 'resend';

// Initialize inside the action execution loop so it never fails top-level builds
export async function sendEmail(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return { success: false, error: "サーバーの設定エラーが発生しました。" };
  }

  const resend = new Resend(apiKey);
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'your-email@example.com', // Change to your actual email destination
      subject: `【ボドゲステーション】無料体験・見学の申し込み: ${name}様`,
      text: `
名前: ${name}
メールアドレス: ${email}
本文内容:
${message}
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Resend delivery failed:", error);
    return { success: false, error: error.message || "送信に失敗しました。" };
  }
}