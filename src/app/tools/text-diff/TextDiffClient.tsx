"use client";
import { useState } from "react";

function diffLines(original: string[], modified: string[]) {
  const maxLen = Math.max(original.length, modified.length);
  const result: Array<{ type: string; text: string }> = [];
  let diffCount = 0;
  for (let i = 0; i < maxLen; i++) {
    const orig = original[i] ?? "";
    const mod = modified[i] ?? "";
    if (orig === mod) {
      result.push({ type: "equal", text: orig });
    } else if (!orig && mod) {
      result.push({ type: "added", text: mod });
      diffCount++;
    } else if (orig && !mod) {
      result.push({ type: "removed", text: orig });
      diffCount++;
    } else {
      result.push({ type: "changed", text: mod });
      diffCount++;
    }
  }
  return { result, diffCount };
}

export default function TextDiffClient() {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [diff, setDiff] = useState<Array<{ type: string; text: string }>>([]);
  const [diffCount, setDiffCount] = useState(0);

  function handleCompare() {
    const origLines = original.split(/\r?\n/);
    const modLines = modified.split(/\r?\n/);
    const { result, diffCount } = diffLines(origLines, modLines);
    setDiff(result);
    setDiffCount(diffCount);
  }

  function handleClear() {
    setOriginal("");
    setModified("");
    setDiff([]);
    setDiffCount(0);
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="diff-original" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Original Text</label>
          <textarea
            id="diff-original"
            className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            value={original}
            onChange={e => setOriginal(e.target.value)}
            placeholder="Paste original text here..."
          />
        </div>
        <div>
          <label htmlFor="diff-modified" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Modified Text</label>
          <textarea
            id="diff-modified"
            className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            value={modified}
            onChange={e => setModified(e.target.value)}
            placeholder="Paste modified text here..."
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleCompare}>Compare Text</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>Clear</button>
      </div>
      <div>
        <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Results</label>
        <div className="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-base whitespace-pre-wrap break-words">
          {diff.length === 0 ? (
            <span className="text-slate-500">No comparison yet.</span>
          ) : (
            diff.map((line, idx) => (
              <div key={idx} className={
                line.type === "added" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded" :
                line.type === "removed" ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-2 py-1 rounded" :
                line.type === "changed" ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded" :
                ""
              }>
                {line.text}
              </div>
            ))
          )}
        </div>
        {diff.length > 0 && (
          <div className="mt-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
            Differences found: {diffCount}
          </div>
        )}
      </div>
    </div>
  );
}
