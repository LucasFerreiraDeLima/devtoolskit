"use client";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

function computeStats(text: string) {
  const charsWithSpaces = text.length;
  const charsWithoutSpaces = text.replace(/\s+/g, "").length;

  const words = text.trim().length
    ? text.trim().split(/\s+/).filter(Boolean).length
    : 0;

  const lines = text.length ? text.split(/\r\n|\r|\n/).length : 0;

  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean).length;

  return { words, charsWithSpaces, charsWithoutSpaces, lines, paragraphs };
}

export default function WordCounterClient() {
  const { t } = useTranslation();
  const [text, setText] = useState("");

  const stats = useMemo(() => computeStats(text), [text]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // ignore silently
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="word-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          {t("wordCounter_inputLabel")}
        </label>
        <textarea
          id="word-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("wordCounter_inputPlaceholder") as string}
          className="w-full min-h-[160px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-md focus:outline-none focus:ring-4 focus:ring-sky-100 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-slate-800"
          aria-label="Text to analyze"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setText("")}
            className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            {t("wordCounter_clearButton")}
          </button>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {t("wordCounter_copyButton")}
          </button>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400">{t("wordCounter_liveUpdate")}</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Stat label={t("wordCounter_stat_words") as string} value={stats.words} color="from-sky-400 to-indigo-400" />
        <Stat label={t("wordCounter_stat_charsWithSpaces") as string} value={stats.charsWithSpaces} color="from-emerald-400 to-sky-400" />
        <Stat label={t("wordCounter_stat_charsNoSpaces") as string} value={stats.charsWithoutSpaces} color="from-rose-400 to-pink-400" />
        <Stat label={t("wordCounter_stat_lines") as string} value={stats.lines} color="from-yellow-300 to-amber-400" />
        <Stat label={t("wordCounter_stat_paragraphs") as string} value={stats.paragraphs} color="from-cyan-300 to-sky-400" />
      </div>
      
    </div>
  );
}

function Stat({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="group relative flex flex-col items-stretch rounded-2xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1">
      <div className={`relative h-12 w-full bg-gradient-to-r ${color} rounded-t-2xl flex items-center px-3`} aria-hidden>
        <div className="absolute -top-3 left-3 flex items-center justify-center">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="1" stopColor="rgba(255,255,255,0.25)" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="24" height="24" rx="6" fill="url(#g)" opacity="0.6" />
          </svg>
        </div>
        <div className="absolute inset-0" style={{ pointerEvents: 'none' }} />
      </div>

      <div className="flex flex-col items-center justify-center bg-white p-4 text-center dark:bg-slate-800">
        <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
        <div className="mt-2 text-2xl font-semibold">{value}</div>
      </div>
    </div>
  );
}
