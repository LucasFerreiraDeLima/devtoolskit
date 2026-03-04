"use client";
import { useState } from "react";

function encodeHTML(str: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"]|'/g, (m) => map[m]);
}

function decodeHTML(str: string): string {
  // Use a DOM element for decoding
  const textarea = document.createElement("textarea");
  textarea.innerHTML = str;
  return textarea.value;
}

export default function HTMLEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleEncode() {
    setError(null);
    try {
      setOutput(encodeHTML(input));
    } catch (e) {
      setError("Encoding failed.");
      setOutput("");
    }
  }

  function handleDecode() {
    setError(null);
    try {
      setOutput(decodeHTML(input));
    } catch (e) {
      setError("Decoding failed. Please check your input.");
      setOutput("");
    }
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
        <label htmlFor="html-input" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Input</label>
        <textarea
          id="html-input"
          className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste your text or HTML here..."
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleEncode}>Encode HTML</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" onClick={handleDecode}>Decode HTML</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>Clear</button>
      </div>
      {error && (
        <div className="text-red-700 dark:text-red-400 font-medium border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900 rounded-xl p-4 mt-2 animate-shake">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}
      <div>
        <label htmlFor="html-output" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Result</label>
        <textarea
          id="html-output"
          className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={output}
          readOnly
          placeholder="Encoded or decoded result will appear here..."
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
