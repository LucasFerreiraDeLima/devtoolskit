"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

function formatDate(date: Date) {
  // Format: YYYY-MM-DD HH:mm:ss (UTC)
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    date.getUTCFullYear() +
    "-" +
    pad(date.getUTCMonth() + 1) +
    "-" +
    pad(date.getUTCDate()) +
    " " +
    pad(date.getUTCHours()) +
    ":" +
    pad(date.getUTCMinutes()) +
    ":" +
    pad(date.getUTCSeconds()) +
    " (UTC)"
  );
}

export default function TimestampConverterClient() {
  const { t } = useTranslation();
  const [timestamp, setTimestamp] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function handleTimestampToDate() {
    setError("");
    setResult("");
    const ts = Number(timestamp);
    if (!timestamp || isNaN(ts) || !isFinite(ts)) {
      setError("timestamp_error_invalid_input");
      return;
    }
    try {
      const date = new Date(ts * 1000);
      if (isNaN(date.getTime())) throw new Error();
      setResult(formatDate(date));
    } catch {
      setError("timestamp_error_invalid_timestamp");
    }
  }

  function handleDateToTimestamp() {
    setError("");
    setResult("");
    if (!dateInput) {
      setError("timestamp_error_invalid_date_input");
      return;
    }
    try {
      const date = new Date(dateInput);
      if (isNaN(date.getTime())) throw new Error();
      setResult(Math.floor(date.getTime() / 1000).toString());
    } catch {
      setError("timestamp_error_invalid_date");
    }
  }

  function handleClear() {
    setTimestamp("");
    setDateInput("");
    setResult("");
    setError("");
  }

  function handleCopy() {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="timestamp-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("timestamp_inputLabel")}</label>
          <input
            id="timestamp-input"
            type="number"
            inputMode="numeric"
            value={timestamp}
            onChange={e => setTimestamp(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder={t("timestamp_inputPlaceholder") as string}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={t("timestamp_inputAria") as string}
          />
        </div>
        <div>
          <label htmlFor="date-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("timestamp_dateLabel")}</label>
          <input
            id="date-input"
            type="datetime-local"
            value={dateInput}
            onChange={e => setDateInput(e.target.value)}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={t("timestamp_dateAria") as string}
          />
        </div>
      </div>
      {error && (
        <div className="mt-4 text-sm text-red-600 dark:text-red-400 font-medium">{t(error)}</div>
      )}
      <div className="flex flex-wrap gap-2 mt-2">
        <button
          type="button"
          className="rounded bg-sky-600 px-4 py-2 text-sm text-white font-semibold hover:bg-sky-700 transition"
          onClick={handleTimestampToDate}
        >
          {t("timestamp_toDateButton")}
        </button>
        <button
          type="button"
          className="rounded bg-emerald-600 px-4 py-2 text-sm text-white font-semibold hover:bg-emerald-700 transition"
          onClick={handleDateToTimestamp}
        >
          {t("timestamp_toTimestampButton")}
        </button>
        <button
          type="button"
          className="rounded bg-slate-200 px-4 py-2 text-sm text-slate-700 font-semibold hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 transition"
          onClick={handleClear}
        >
          {t("timestamp_clearButton")}
        </button>
        <button
          type="button"
          className="rounded bg-indigo-600 px-4 py-2 text-sm text-white font-semibold hover:bg-indigo-700 transition"
          onClick={handleCopy}
          disabled={!result}
        >
          {t("copyButton")}
        </button>
      </div>
      {result && (
        <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-lg font-mono text-slate-900 dark:text-slate-100 break-all">
          {result}
        </div>
      )}
    </div>
  );
}
