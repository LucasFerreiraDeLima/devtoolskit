"use client";
import { useState } from "react";

function removeDuplicates(lines: string[], caseSensitive: boolean): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const line of lines) {
    const key = caseSensitive ? line : line.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      result.push(line);
    }
  }
  return result;
}

export default function RemoveDuplicateLinesClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [copied, setCopied] = useState(false);

  function handleRemove() {
    const lines = input.split(/\r?\n/).filter(l => l.trim() !== "");
    const unique = removeDuplicates(lines, caseSensitive);
    setOutput(unique.join("\n"));
    setCopied(false);
  }

  function handleClear() {
    setInput("");
    setOutput("");
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
        <label htmlFor="dup-input" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Input</label>
        <textarea
          id="dup-input"
          className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste your lines of text here..."
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-2 items-center">
        <label className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-100">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={e => setCaseSensitive(e.target.checked)}
            className="accent-sky-600 w-4 h-4"
          />
          Case sensitive
        </label>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleRemove}>Remove Duplicates</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>Clear</button>
      </div>
      <div>
        <label htmlFor="dup-output" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Result</label>
        <textarea
          id="dup-output"
          className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={output}
          readOnly
          placeholder="Result will appear here..."
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
