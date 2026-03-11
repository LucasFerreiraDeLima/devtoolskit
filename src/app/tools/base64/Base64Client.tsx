

"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";


export default function Base64Client() {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function handleEncode() {
    try {
      setOutput(btoa(input));
      setError("");
    } catch {
      setOutput("");
      setError(t("base64_encodeError", "Unable to encode. Please enter valid text."));
    }
  }

  function handleDecode() {
    try {
      setOutput(atob(input));
      setError("");
    } catch {
      setOutput("");
      setError(t("base64_decodeError", "Invalid Base64 string. Please check your input."));
    }
  }

  function handleClear() {
    setInput("");
    setOutput("");
    setError("");
  }

  function handleCopy() {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  }

  return (
    <section
      aria-labelledby="base64-tool-heading"
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8"
    >
      <h1 id="base64-tool-heading" className="text-2xl font-bold mb-2">
        {t("base64_label")}
      </h1>
      <p className="mb-6 text-slate-700 dark:text-slate-300">
        {t("base64_desc")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input */}
        <div>
          <label
            htmlFor="base64-input"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            {t("base64_inputLabel", "Input")}
          </label>
          <textarea
            id="base64-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("base64_inputPlaceholder", "Enter text or Base64 string here...")}
            className="w-full min-h-[120px] rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label={t("base64_inputAria", "Text to encode or decode")}
          />
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            {input.length} {t("base64_characters", "characters")}
          </div>
        </div>
        {/* Output */}
        <div>
          <label
            htmlFor="base64-output"
            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
          >
            {t("base64_outputLabel", "Output")}
          </label>
          <textarea
            id="base64-output"
            value={output}
            readOnly
            placeholder={t("base64_outputPlaceholder", "Result will appear here...")}
            className="w-full min-h-[120px] rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-sm shadow-sm focus:outline-none"
            aria-label={t("base64_outputAria", "Encoded or decoded result")}
          />
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            {output.length} {t("base64_characters", "characters")}
          </div>
        </div>
      </div>
      {/* Error message */}
      {error && (
        <div className="mt-4 text-sm text-red-600 dark:text-red-400 font-medium">
          {error}
        </div>
      )}
      {/* Buttons */}
      <div className="flex flex-wrap gap-2 mt-8">
        <button
          type="button"
          className="rounded bg-sky-600 px-4 py-2 text-sm text-white font-semibold hover:bg-sky-700 transition"
          onClick={handleEncode}
        >
          {t("base64_encodeButton", "Encode to Base64")}
        </button>
        <button
          type="button"
          className="rounded bg-emerald-600 px-4 py-2 text-sm text-white font-semibold hover:bg-emerald-700 transition"
          onClick={handleDecode}
        >
          {t("base64_decodeButton", "Decode Base64")}
        </button>
        <button
          type="button"
          className="rounded bg-slate-200 px-4 py-2 text-sm text-slate-700 font-semibold hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 transition"
          onClick={handleClear}
        >
          {t("base64_clearButton", "Clear text")}
        </button>
        <button
          type="button"
          className="rounded bg-indigo-600 px-4 py-2 text-sm text-white font-semibold hover:bg-indigo-700 transition"
          onClick={handleCopy}
          disabled={!output}
        >
          {t("base64_copyButton", "Copy Result")}
        </button>
      </div>
    </section>
  );
}
