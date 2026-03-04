"use client";
import { useState } from "react";

function generateUUIDs(count: number) {
  return Array.from({ length: count }, () => crypto.randomUUID());
}

export default function UUIDGeneratorClient() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  function handleGenerate(n: number) {
    setUuids(generateUUIDs(n));
    setCopiedIndex(null);
    setCopiedAll(false);
  }

  function handleClear() {
    setUuids([]);
    setCopiedIndex(null);
    setCopiedAll(false);
  }

  function handleCopy(uuid: string, idx: number) {
    navigator.clipboard.writeText(uuid);
    setCopiedIndex(idx);
    setCopiedAll(false);
    setTimeout(() => setCopiedIndex(null), 1200);
  }

  function handleCopyAll() {
    if (uuids.length) {
      navigator.clipboard.writeText(uuids.join("\n"));
      setCopiedAll(true);
      setCopiedIndex(null);
      setTimeout(() => setCopiedAll(false), 1200);
    }
  }

  return (
    <section
      aria-labelledby="uuid-generator-heading"
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8"
    >
      <h1 id="uuid-generator-heading" className="text-2xl font-bold mb-2">
        UUID Generator
      </h1>
      <p className="mb-6 text-slate-700 dark:text-slate-300">
        Instantly generate UUID v4 identifiers for use in databases, APIs, and testing. All generation is done securely in your browser.
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          type="button"
          className="rounded bg-sky-600 px-4 py-2 text-sm text-white font-semibold hover:bg-sky-700 transition"
          onClick={() => handleGenerate(1)}
        >
          Generate UUID
        </button>
        <button
          type="button"
          className="rounded bg-emerald-600 px-4 py-2 text-sm text-white font-semibold hover:bg-emerald-700 transition"
          onClick={() => handleGenerate(5)}
        >
          Generate 5 UUIDs
        </button>
        <button
          type="button"
          className="rounded bg-indigo-600 px-4 py-2 text-sm text-white font-semibold hover:bg-indigo-700 transition"
          onClick={() => handleGenerate(10)}
        >
          Generate 10 UUIDs
        </button>
        <button
          type="button"
          className="rounded bg-slate-200 px-4 py-2 text-sm text-slate-700 font-semibold hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 transition"
          onClick={handleClear}
        >
          Clear results
        </button>
        <button
          type="button"
          className="rounded bg-pink-600 px-4 py-2 text-sm text-white font-semibold hover:bg-pink-700 transition"
          onClick={handleCopyAll}
          disabled={uuids.length === 0}
        >
          {copiedAll ? "Copied!" : "Copy All"}
        </button>
      </div>
      <div className="space-y-2">
        {uuids.length === 0 && (
          <div className="text-slate-500 dark:text-slate-400 text-sm italic">
            Generated UUIDs will appear here.
          </div>
        )}
        {uuids.map((uuid, idx) => (
          <div
            key={uuid}
            className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 font-mono text-base text-slate-900 dark:text-slate-100"
          >
            <span className="flex-1 break-all">{uuid}</span>
            <button
              type="button"
              className="rounded bg-sky-500 px-3 py-1 text-xs text-white font-semibold hover:bg-sky-600 transition"
              onClick={() => handleCopy(uuid, idx)}
            >
              {copiedIndex === idx ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
