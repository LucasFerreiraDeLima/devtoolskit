"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-={}[]|:;<>,.?/";

function generateString(length: number, opts: { upper: boolean; lower: boolean; number: boolean; symbol: boolean; }) {
  let pool = "";
  if (opts.upper) pool += UPPERCASE;
  if (opts.lower) pool += LOWERCASE;
  if (opts.number) pool += NUMBERS;
  if (opts.symbol) pool += SYMBOLS;
  if (!pool) return "";
  const arr = new Uint32Array(length);
  window.crypto.getRandomValues(arr);
  let str = "";
  for (let i = 0; i < length; i++) {
    str += pool[arr[i] % pool.length];
  }
  return str;
}

export default function RandomStringClient() {
  const { t } = useTranslation();
  const [length, setLength] = useState(12);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(false);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  function handleGenerate() {
    setResult(generateString(length, { upper, lower, number, symbol }));
    setCopied(false);
  }

  function handleClear() {
    setResult("");
    setCopied(false);
  }

  function handleCopy() {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <label htmlFor="str-length" className="font-semibold text-slate-800 dark:text-slate-100">{t("randomString_lengthLabel")}</label>
          <input
            id="str-length"
            type="range"
            min={4}
            max={128}
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            className="w-full accent-sky-600"
          />
          <div className="text-sm text-slate-700 dark:text-slate-300">{length} {t("characters")}</div>
        </div>
        <div className="flex flex-col gap-4">
          <label className="font-semibold text-slate-800 dark:text-slate-100">{t("randomString_characterTypes")}</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={upper} onChange={e => setUpper(e.target.checked)} />
              <span>{t("randomString_uppercase")}</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={lower} onChange={e => setLower(e.target.checked)} />
              <span>{t("randomString_lowercase")}</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={number} onChange={e => setNumber(e.target.checked)} />
              <span>{t("randomString_numbers")}</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={symbol} onChange={e => setSymbol(e.target.checked)} />
              <span>{t("randomString_symbols")}</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleGenerate}>{t("randomString_generateButton")}</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>{t("randomString_clearButton")}</button>
      </div>
      <div>
        <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("randomString_generatedLabel")}</label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            readOnly
            value={result}
            className="w-full font-mono text-base p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none"
            placeholder={t("randomString_placeholder") as string}
          />
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${!result ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleCopy}
            disabled={!result}
          >
            {copied ? t("copied") : t("randomString_copy")}
          </button>
        </div>
      </div>
    </div>
  );
}
