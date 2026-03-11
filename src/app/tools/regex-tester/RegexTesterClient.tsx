"use client";
import { JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

function highlightMatches(text: string, matches: RegExpMatchArray[] | null): JSX.Element {
  if (!matches || matches.length === 0) return <span>{text}</span>;
  let lastIndex = 0;
  const elements: JSX.Element[] = [];
  matches.forEach((match, i) => {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      elements.push(<span key={"pre-" + i}>{text.slice(lastIndex, index)}</span>);
    }
    elements.push(
      <span key={"match-" + i} className="bg-yellow-300 dark:bg-yellow-600 text-black dark:text-slate-900 rounded px-1">
        {match[0]}
      </span>
    );
    lastIndex = index + match[0].length;
  });
  if (lastIndex < text.length) {
    elements.push(<span key="post">{text.slice(lastIndex)}</span>);
  }
  return <>{elements}</>;
}

export default function RegexTesterClient() {
  const { t } = useTranslation();
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("");
  const [testText, setTestText] = useState("");
  const [matches, setMatches] = useState<RegExpMatchArray[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleTest() {
    setError(null);
    setCopied(false);
    try {
      const regex = new RegExp(pattern, flags);
      const allMatches: RegExpMatchArray[] = [];
      if (flags.includes("g")) {
        let match;
        const re = new RegExp(pattern, flags);
        while ((match = re.exec(testText)) !== null) {
          allMatches.push(match);
          // Prevent infinite loop for zero-width matches
          if (match.index === re.lastIndex) re.lastIndex++;
        }
      } else {
        const match = regex.exec(testText);
        if (match) allMatches.push(match);
      }
      setMatches(allMatches);
    } catch (e: any) {
      setError(e.message);
      setMatches(null);
    }
  }

  function handleClear() {
    setPattern("");
    setFlags("");
    setTestText("");
    setMatches(null);
    setError(null);
    setCopied(false);
  }

  function handleCopy() {
    if (matches && matches.length > 0) {
      const result = matches.map(m => m[0]).join(", ");
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="regex-pattern" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("regexTester_patternLabel")}</label>
          <input
            id="regex-pattern"
            type="text"
            className="w-full p-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition mb-3"
            value={pattern}
            onChange={e => setPattern(e.target.value)}
            placeholder={t("regexTester_patternPlaceholder")}
          />
          <label htmlFor="regex-flags" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Flags</label>
          <input
            id="regex-flags"
            type="text"
            className="w-full p-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            value={flags}
            onChange={e => setFlags(e.target.value)}
            placeholder={t("regexTester_flagsPlaceholder")}
            maxLength={3}
          />
        </div>
        <div>
          <label htmlFor="test-text" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("regexTester_testTextLabel")}</label>
          <textarea
            id="test-text"
            className="w-full min-h-[140px] sm:min-h-[180px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            value={testText}
            onChange={e => setTestText(e.target.value)}
            placeholder={t("regexTester_testTextPlaceholder")}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleTest}>{t("regexTester_runButton")}</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>{t("regexTester_clearButton")}</button>
      </div>
      {error && (
        <div className="text-red-700 dark:text-red-400 font-medium border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900 rounded-xl p-4 mt-2 animate-shake">
          <span className="font-bold">{t("regexTester_errorPrefix")}</span> {error}
        </div>
      )}
      <div>
        <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("regexTester_resultsLabel")}</label>
        <div className="w-full min-h-[60px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100">
          {matches && matches.length > 0 ? (
            <div>
              <div className="mb-2">{t("regexTester_matchesFound")} <span className="font-bold">{matches.length}</span></div>
              <div className="mb-2">{t("regexTester_matchedValues")} <span className="font-mono">{matches.map(m => m[0]).join(", ")}</span></div>
              <div className="mb-2">{t("regexTester_highlightedText")}</div>
              <div className="whitespace-pre-wrap break-words">{highlightMatches(testText, matches)}</div>
              <button
                type="button"
                className={`px-5 py-2 mt-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${!matches.length ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleCopy}
                disabled={!matches.length}
              >
                {copied ? t("regexTester_copied") : t("regexTester_copyButton")}
              </button>
            </div>
          ) : (
            <span className="text-slate-500">{t("regexTester_noMatches")}</span>
          )}
        </div>
      </div>
    </div>
  );
}
