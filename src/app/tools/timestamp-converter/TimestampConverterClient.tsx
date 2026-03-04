"use client";
import { useState } from "react";
import Link from "next/link";

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
  const [timestamp, setTimestamp] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function handleTimestampToDate() {
    setError("");
    setResult("");
    const ts = Number(timestamp);
    if (!timestamp || isNaN(ts) || !isFinite(ts)) {
      setError("Please enter a valid Unix timestamp.");
      return;
    }
    try {
      const date = new Date(ts * 1000);
      if (isNaN(date.getTime())) throw new Error();
      setResult(formatDate(date));
    } catch {
      setError("Invalid timestamp.");
    }
  }

  function handleDateToTimestamp() {
    setError("");
    setResult("");
    if (!dateInput) {
      setError("Please enter a valid date and time.");
      return;
    }
    try {
      const date = new Date(dateInput);
      if (isNaN(date.getTime())) throw new Error();
      setResult(Math.floor(date.getTime() / 1000).toString());
    } catch {
      setError("Invalid date.");
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
    <section
      aria-labelledby="timestamp-converter-heading"
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8"
    >
      <h1 id="timestamp-converter-heading" className="text-2xl font-bold mb-2">
        Unix Timestamp Converter
      </h1>
      <p className="mb-6 text-slate-700 dark:text-slate-300">
        Convert Unix timestamps to human-readable dates and vice versa. All calculations run securely in your browser.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="timestamp-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Unix Timestamp
          </label>
          <input
            id="timestamp-input"
            type="number"
            inputMode="numeric"
            value={timestamp}
            onChange={e => setTimestamp(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="e.g. 1709596800"
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Unix timestamp"
          />
        </div>
        <div>
          <label htmlFor="date-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Date and Time
          </label>
          <input
            id="date-input"
            type="datetime-local"
            value={dateInput}
            onChange={e => setDateInput(e.target.value)}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Date and time"
          />
        </div>
      </div>
      {error && (
        <div className="mt-4 text-sm text-red-600 dark:text-red-400 font-medium">{error}</div>
      )}
      <div className="flex flex-wrap gap-2 mt-8">
        <button
          type="button"
          className="rounded bg-sky-600 px-4 py-2 text-sm text-white font-semibold hover:bg-sky-700 transition"
          onClick={handleTimestampToDate}
        >
          Convert Timestamp to Date
        </button>
        <button
          type="button"
          className="rounded bg-emerald-600 px-4 py-2 text-sm text-white font-semibold hover:bg-emerald-700 transition"
          onClick={handleDateToTimestamp}
        >
          Convert Date to Timestamp
        </button>
        <button
          type="button"
          className="rounded bg-slate-200 px-4 py-2 text-sm text-slate-700 font-semibold hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 transition"
          onClick={handleClear}
        >
          Clear inputs
        </button>
        <button
          type="button"
          className="rounded bg-indigo-600 px-4 py-2 text-sm text-white font-semibold hover:bg-indigo-700 transition"
          onClick={handleCopy}
          disabled={!result}
        >
          Copy Result
        </button>
      </div>
      {result && (
        <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-lg font-mono text-slate-900 dark:text-slate-100 break-all">
          {result}
        </div>
      )}
    </section>
  );
}
