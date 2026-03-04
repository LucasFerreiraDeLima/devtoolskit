"use client";
import { useState } from "react";

export default function JSONFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleFormat() {
    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formatted);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
    setCopied(false);
  }

  function handleMinify() {
    try {
      const minified = JSON.stringify(JSON.parse(input));
      setOutput(minified);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
    setCopied(false);
  }

  function handleValidate() {
    try {
      JSON.parse(input);
      setError(null);
      setOutput("Valid JSON");
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
    setCopied(false);
  }

  function handleClear() {
    setInput("");
    setOutput("");
    setError(null);
    setCopied(false);
  }

  function handleCopy() {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="json-input" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Input JSON</label>
        <textarea
          id="json-input"
          className="w-full min-h-[140px] sm:min-h-[180px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste or type your JSON here..."
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleFormat}>Format JSON</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" onClick={handleMinify}>Minify JSON</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition" onClick={handleValidate}>Validate JSON</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>Clear</button>
      </div>
      {error && (
        <div className="text-red-700 dark:text-red-400 font-medium border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900 rounded-xl p-4 mt-2 animate-shake">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}
      <div>
        <label htmlFor="json-output" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Output</label>
        <textarea
          id="json-output"
          className="w-full min-h-[140px] sm:min-h-[180px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={output}
          readOnly
          placeholder="Formatted or minified JSON will appear here..."
        />
        <button
          type="button"
          className={`px-5 py-2 mt-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${!output ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleCopy}
          disabled={!output}
        >
          {copied ? "Copied!" : "Copy Result"}
        </button>
      </div>
    </div>
  );
}
