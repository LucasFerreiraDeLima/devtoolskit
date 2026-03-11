"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

function convertJSONToCSV(json: string): { csv: string; error?: string } {
  try {
    const data = JSON.parse(json);
    if (!Array.isArray(data) || data.length === 0 || typeof data[0] !== "object" || Array.isArray(data[0])) {
      return {
        csv: "",
        error: "jsonToCsv_error_input_format",
      };
    }
    const headers = Object.keys(data[0]);
    const rows = data.map((obj: any) =>
      headers.map(header => {
        let value = obj[header] ?? "";
        // Escape quotes and commas
        if (typeof value === "string") {
          value = '"' + value.replace(/"/g, '""') + '"';
        }
        return value;
      }).join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    return { csv };
  } catch (e: any) {
    return { csv: "", error: "jsonToCsv_error_invalid_json" };
  }
}

export default function JSONToCSVClient() {
  const { t } = useTranslation();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleConvert() {
    const result = convertJSONToCSV(input);
    setOutput(result.csv);
    setError(result.error ?? null);
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
        <label htmlFor="json-input" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("jsonToCsv_inputLabel")}</label>
        <textarea
          id="json-input"
          className="w-full min-h-[140px] sm:min-h-[180px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={t("jsonToCsv_inputPlaceholder") as string}
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleConvert}>{t("jsonToCsv_convertButton")}</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>{t("jsonToCsv_clearButton")}</button>
      </div>
      {error && (
        <div className="text-red-700 dark:text-red-400 font-medium border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900 rounded-xl p-4 mt-2 animate-shake">
          <span className="font-bold">{t("jsonToCsv_errorPrefix")}</span> {t(error)}
        </div>
      )}
      <div>
        <label htmlFor="csv-output" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("jsonToCsv_outputLabel")}</label>
        <textarea
          id="csv-output"
          className="w-full min-h-[140px] sm:min-h-[180px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={output}
          readOnly
          placeholder={t("jsonToCsv_outputPlaceholder") as string}
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
