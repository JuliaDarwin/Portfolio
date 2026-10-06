"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/sendEmail";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [topic, setTopic] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!topic.trim() || !senderEmail.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage(t.contact.errorRequired);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await sendContactEmail({
        topic: topic.trim(),
        email: senderEmail.trim(),
        message: message.trim(),
      });

      if (response.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          response.error || "Failed to send message. Please try again."
        );
      }
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    }
  };

  const handleReset = () => {
    setTopic("");
    setSenderEmail("");
    setMessage("");
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-violet-950/20 transition-all duration-300 hover:border-white/15">
        {/* Glow ambient highlights */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-600/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-2xl" />

        {status === "success" ? (
          /* Success Screen */
          <div className="relative z-10 py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-500/20">
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {t.contact.successTitle}
              </h3>
              <p className="mt-2 text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                {t.contact.successMessagePart1}{" "}
                <span className="text-violet-300 font-mono">{senderEmail}</span>{" "}
                {t.contact.successMessagePart2}
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                {t.contact.sendAnother}
              </button>
            </div>
          </div>
        ) : (
          /* Form Inputs */
          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            {/* Topic Field */}
            <div>
              <label
                htmlFor="topic"
                className="mb-1.5 block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300"
              >
                {t.contact.topicLabel} <span className="text-violet-400">*</span>
              </label>
              <input
                id="topic"
                name="topic"
                type="text"
                required
                disabled={status === "loading"}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder={t.contact.topicPlaceholder}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-violet-500 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/25 disabled:opacity-50"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="senderEmail"
                className="mb-1.5 block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300"
              >
                {t.contact.emailLabel} <span className="text-violet-400">*</span>
              </label>
              <input
                id="senderEmail"
                name="senderEmail"
                type="email"
                required
                disabled={status === "loading"}
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder={t.contact.emailPlaceholder}
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-violet-500 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/25 disabled:opacity-50"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300"
              >
                {t.contact.messageLabel} <span className="text-violet-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={status === "loading"}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                className="w-full resize-y min-h-[120px] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none transition duration-200 focus:border-violet-500 focus:bg-white/[0.07] focus:ring-2 focus:ring-violet-500/25 disabled:opacity-50"
              />
            </div>

            {/* Error Banner */}
            {status === "error" && errorMessage && (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-xs text-rose-300 transition-all duration-300">
                <div className="flex items-start gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 text-rose-400 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="font-semibold">{errorMessage}</p>
                    <p className="mt-1 text-zinc-400">
                      {t.contact.errorDirect}{" "}
                      <a
                        href="mailto:juliaelguetaserra@gmail.com"
                        className="text-violet-300 underline underline-offset-2 hover:text-white"
                      >
                        juliaelguetaserra@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/40 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>{t.contact.sendingButton}</span>
                </>
              ) : (
                <>
                  <span>{t.contact.sendButton}</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
