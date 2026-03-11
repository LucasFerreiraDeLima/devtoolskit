"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

const sortOptions = [
  { value: "az", key: "textSorter_option_az" },
  { value: "za", key: "textSorter_option_za" },
  { value: "shortlong", key: "textSorter_option_shortlong" },
  { value: "longshort", key: "textSorter_option_longshort" },
];

function sortLines(lines: string[], method: string): string[] {
  const filtered = lines.filter(line => line.trim() !== "");
  switch (method) {
    case "az":
      return filtered.sort((a, b) => a.localeCompare(b));
    case "za":
      return filtered.sort((a, b) => b.localeCompare(a));
    case "shortlong":
      return filtered.sort((a, b) => a.length - b.length);
    case "longshort":
      return filtered.sort((a, b) => b.length - a.length);
    default:
      return filtered;
  }
}

export default function TextSorterClient() {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [sortMethod, setSortMethod] = useState(sortOptions[0].value);
  const [copied, setCopied] = useState(false);

  function handleSort() {
      let lines: string[];
      if (input.includes("\n")) {
        lines = input.split(/\r?\n/);
      } else if (input.includes(",")) {
        lines = input.split(",").map(l => l.trim());
      } else {
        lines = [input];
      }
      const sorted = sortLines(lines, sortMethod);
      setOutput(sorted.join("\n"));
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
        <label htmlFor="sort-input" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("textSorter_inputLabel")}</label>
        <textarea
          id="sort-input"
          className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t("textSorter_inputPlaceholder") as string}
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-2 items-center">
        <select
          className="px-4 py-2 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          value={sortMethod}
          onChange={e => setSortMethod(e.target.value)}
        >
          {sortOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{t(opt.key)}</option>
          ))}
        </select>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleSort}>{t("textSorter_sortButton")}</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>{t("textSorter_clearButton")}</button>
      </div>
      <div>
        <label htmlFor="sort-output" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("textSorter_resultLabel")}</label>
        <textarea
          id="sort-output"
          className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={output}
          readOnly
          placeholder={t("textSorter_resultPlaceholder") as string}
        />
        <button
          type="button"
          className={`px-5 py-2 mt-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${!output ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleCopy}
          disabled={!output}
        >
          {copied ? t("copied") : t("textSorter_copyButton")}
        </button>
      </div>
    </div>
  );
}
