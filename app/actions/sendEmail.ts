"use server";

import { Resend } from "resend";

export interface SendEmailPayload {
  topic: string;
  email: string;
  message: string;
}

export interface SendEmailResponse {
  success: boolean;
  error?: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(
  payload: SendEmailPayload
): Promise<SendEmailResponse> {
  const { topic, email, message } = payload;

  if (!email?.trim() || !topic?.trim() || !message?.trim()) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "your_resend_api_key_here") {
    return {
      success: false,
      error:
        "Resend API key is not configured. Please add your RESEND_API_KEY to .env.local.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "juliaelguetaserra@gmail.com";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email.trim(),
      subject: `[Portfolio] ${topic.trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0c0d14; color: #f4f4f6; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 16px; margin-bottom: 20px;">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #a78bfa; font-family: monospace;">New Portfolio Message</span>
            <h2 style="margin: 8px 0 0 0; color: #ffffff; font-size: 20px;">${escapeHtml(topic.trim())}</h2>
          </div>
          
          <div style="margin-bottom: 20px; font-size: 14px; color: #a1a1aa;">
            <p style="margin: 4px 0;"><strong style="color: #ffffff;">From:</strong> <a href="mailto:${escapeHtml(email.trim())}" style="color: #818cf8; text-decoration: none;">${escapeHtml(email.trim())}</a></p>
          </div>

          <div style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #e4e4e7; white-space: pre-wrap;">${escapeHtml(message.trim())}</div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 12px; color: #71717a; text-align: center;">
            Sent from your portfolio contact form &bull; You can hit 'Reply' directly to respond to ${escapeHtml(email.trim())}.
          </div>
        </div>
      `,
      text: `New Portfolio Message\n\nTopic: ${topic.trim()}\nFrom: ${email.trim()}\n\nMessage:\n${message.trim()}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg =
      err instanceof Error
        ? err.message
        : "Failed to send email. Please try again later.";
    return { success: false, error: errorMsg };
  }
}
