"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";
import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";

function capitalizeWords(text: string) {
  return text.replace(/\b\w+/g, (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

function sentenceCase(text: string) {
  return text.replace(/([^.!?]*[.!?]*)/g, (sentence) => {
    const trimmed = sentence.trim();
    if (!trimmed) return "";
    return (
      trimmed.charAt(0).toUpperCase() +
      trimmed.slice(1).toLowerCase()
    );
  });
}

function camelCase(text: string) {
  return text
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word, i) =>
      i === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}

function snakeCase(text: string) {
  return text
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .trim()
    .split(/\s+/)
    .join("_")
    .toLowerCase();
}

function kebabCase(text: string) {
  return text
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .trim()
    .split(/\s+/)
    .join("-")
    .toLowerCase();
}

export default function CaseConverterClient() {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lastAction, setLastAction] = useState<string | null>(null);

  const handleConvert = (type: string) => {
    let result = "";
    switch (type) {
      case "UPPERCASE":
        result = input.toUpperCase();
        break;
      case "lowercase":
        result = input.toLowerCase();
        break;
      case "Capitalized Case":
        result = capitalizeWords(input);
        break;
      case "Sentence case":
        result = sentenceCase(input);
        break;
      case "camelCase":
        result = camelCase(input);
        break;
      case "snake_case":
        result = snakeCase(input);
        break;
      case "kebab-case":
        result = kebabCase(input);
        break;
      default:
        result = input;
    }
    setOutput(result);
    setLastAction(type);
  };

  const handleCopy = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setLastAction(null);
  };

  return (
    <div className="space-y-10 w-full max-w-screen-lg mx-auto px-2 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdPlaceholder />
        <AdPlaceholder />
      </div>
      <section aria-labelledby="case-converter-heading" className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-12 border border-slate-100 dark:border-slate-800 w-full">
        <h1 id="case-converter-heading" className="text-3xl font-extrabold mb-2 text-slate-900 dark:text-white">
          {t("caseConverter_label")}
        </h1>
        <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
          {t("caseConverter_desc")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Input */}
          <div>
            <label htmlFor="case-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              {t("caseConverter_inputLabel")}
            </label>
            <textarea
              id="case-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("caseConverter_inputPlaceholder") as string}
              className="w-full min-h-[120px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-base shadow focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Text to convert"
            />
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {input.length} characters
            </div>
          </div>
          {/* Output */}
          <div>
            <label htmlFor="case-output" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              {t("caseConverter_outputLabel")}
            </label>
            <textarea
              id="case-output"
              value={output}
              readOnly
              placeholder={t("caseConverter_outputPlaceholder") as string}
              className="w-full min-h-[120px] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-base shadow focus:outline-none"
              aria-label="Converted text"
            />
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {output.length} {t("characters")}
              {lastAction && (
                <span className="ml-2 italic text-slate-400">({t("caseConverter_actionApplied", { action: lastAction })})</span>
              )}
            </div>
          </div>
        </div>
        {/* Conversion buttons */}
        <div className="flex flex-wrap gap-2 mt-8">
          {[
            { key: "UPPERCASE", color: "from-sky-500 to-blue-500" },
            { key: "lowercase", color: "from-emerald-500 to-teal-400" },
            { key: "Capitalized Case", color: "from-pink-500 to-rose-400" },
            { key: "Sentence case", color: "from-yellow-400 to-amber-400" },
            { key: "camelCase", color: "from-indigo-500 to-sky-400" },
            { key: "snake_case", color: "from-cyan-500 to-sky-400" },
            { key: "kebab-case", color: "from-orange-400 to-amber-500" },
          ].map(({ key, color }) => (
            <button
              key={key}
              type="button"
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r ${color} shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400 transition`}
              onClick={() => handleConvert(key)}
            >
              {t(`caseConverter_button_${key}`)}
            </button>
          ))}
        </div>
        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 mt-6">
            <button
            type="button"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={handleCopy}
            disabled={!output}
          >
            {t("caseConverter_copyButton")}
          </button>
            <button
            type="button"
            className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 shadow"
            onClick={handleClear}
          >
            {t("caseConverter_clearButton")}
          </button>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdPlaceholder />
        <AdPlaceholder />
      </div>
    </div>
  );
}
