"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomNumberClient() {
  const { t } = useTranslation();
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [sort, setSort] = useState(false);

  function handleGenerate() {
    setError("");
    setCopied(false);
    if (isNaN(min) || isNaN(max) || isNaN(quantity)) {
      setError(t("randomNumber_error_invalid_numbers") as string);
      setResults([]);
      return;
    }
    if (min > max) {
      setError(t("randomNumber_error_min_gt_max") as string);
      setResults([]);
      return;
    }
    if (quantity < 1 || quantity > 100) {
      setError(t("randomNumber_error_quantity_range") as string);
      setResults([]);
      return;
    }
    let nums: number[] = [];
    for (let i = 0; i < quantity; i++) {
      nums.push(getRandomInt(min, max));
    }
    if (sort) {
      nums = nums.sort((a, b) => a - b);
    }
    setResults(nums);
  }

  function handleClear() {
    setResults([]);
    setError("");
    setCopied(false);
  }

  function handleCopy() {
    if (results.length) {
      navigator.clipboard.writeText(results.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="rng-min" className="font-semibold text-slate-800 dark:text-slate-100">{t("randomNumber_minLabel")}</label>
          <input
            id="rng-min"
            type="number"
            value={min}
            onChange={e => setMin(Number(e.target.value))}
            className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none"
            min={-1000000}
            max={1000000}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rng-max" className="font-semibold text-slate-800 dark:text-slate-100">{t("randomNumber_maxLabel")}</label>
          <input
            id="rng-max"
            type="number"
            value={max}
            onChange={e => setMax(Number(e.target.value))}
            className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none"
            min={-1000000}
            max={1000000}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rng-quantity" className="font-semibold text-slate-800 dark:text-slate-100">{t("randomNumber_quantityLabel")}</label>
          <input
            id="rng-quantity"
            type="number"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none"
            min={1}
            max={100}
          />
          <span className="text-xs text-slate-500">{t("randomNumber_quantityRange")}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-2 items-center">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleGenerate}>{t("randomNumber_generateButton")}</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>{t("randomNumber_clearButton")}</button>
        <label className="flex items-center gap-2 ml-2 select-none">
          <input type="checkbox" checked={sort} onChange={e => setSort(e.target.checked)} />
          <span className="text-sm">{t("randomNumber_sortResults")}</span>
        </label>
      </div>
      <div>
        <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">{t("randomNumber_resultLabel")}</label>
        {error && <div className="mb-2 text-red-600 dark:text-red-400 font-medium">{error}</div>}
        <div className="flex items-center gap-3">
          <input
            type="text"
            readOnly
            value={results.length ? results.join(", ") : ""}
            className="w-full font-mono text-base p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none"
            placeholder={t("randomNumber_placeholder_results") as string}
          />
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${!results.length ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleCopy}
            disabled={!results.length}
          >
            {copied ? t("copied") : t("randomNumber_copy")}
          </button>
        </div>
      </div>
    </div>
  );
}
