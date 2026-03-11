"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function jsonToXml(obj: any, indent = "  "): string {
  function convert(key: string, value: any, level: number): string {
    const pad = indent.repeat(level);
    if (Array.isArray(value)) {
      return value.map(item => convert(key, item, level)).join("\n");
    } else if (typeof value === "object" && value !== null) {
      let inner = Object.entries(value)
        .map(([k, v]) => convert(k, v, level + 1))
        .join("\n");
      return `${pad}<${key}>\n${inner}\n${pad}</${key}>`;
    } else {
      return `${pad}<${key}>${escapeXml(String(value))}</${key}>`;
    }
  }
  if (typeof obj !== "object" || obj === null) return "";
  let xml = Object.entries(obj)
    .map(([k, v]) => convert(k, v, 1))
    .join("\n");
  return `<root>\n${xml}\n</root>`;
}

export default function JSONToXMLClient() {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleConvert() {
    try {
      const json = JSON.parse(input);
      const xml = jsonToXml(json);
      setOutput(xml);
      setError(null);
      setCopied(false);
    } catch (e: any) {
      setOutput("");
      setError("jsonToXml_error_invalid_json");
      setCopied(false);
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
        <label htmlFor="json-input" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("jsonToXml_inputLabel")}</label>
        <textarea
          id="json-input"
          className="w-full min-h-[140px] sm:min-h-[180px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t("jsonToXml_inputPlaceholder") as string}
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleConvert}>{t("jsonToXml_convertButton")}</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>{t("jsonToXml_clearButton")}</button>
      </div>
      {error && (
        <div className="text-red-700 dark:text-red-400 font-medium border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900 rounded-xl p-4 mt-2 animate-shake">
          <span className="font-bold">{t("jsonToXml_errorPrefix")}</span> {t(error)}
        </div>
      )}
      <div>
        <label htmlFor="xml-output" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("jsonToXml_outputLabel")}</label>
        <textarea
          id="xml-output"
          className="w-full min-h-[140px] sm:min-h-[180px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={output}
          readOnly
          placeholder={t("jsonToXml_outputPlaceholder") as string}
        />
        <button
          type="button"
          className={`px-5 py-2 mt-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${!output ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleCopy}
          disabled={!output}
        >
          {copied ? t("copied") : t("copyButton")}
        </button>
      </div>
    </div>
  );
}
