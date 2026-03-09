"use client";
import { useState } from "react";

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomNumberClient() {
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
      setError("Please enter valid numbers.");
      setResults([]);
      return;
    }
    if (min > max) {
      setError("Minimum value cannot be greater than maximum value.");
      setResults([]);
      return;
    }
    if (quantity < 1 || quantity > 100) {
      setError("Quantity must be between 1 and 100.");
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
          <label htmlFor="rng-min" className="font-semibold text-slate-800 dark:text-slate-100">Minimum Value</label>
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
          <label htmlFor="rng-max" className="font-semibold text-slate-800 dark:text-slate-100">Maximum Value</label>
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
          <label htmlFor="rng-quantity" className="font-semibold text-slate-800 dark:text-slate-100">Quantity</label>
          <input
            id="rng-quantity"
            type="number"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            className="w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none"
            min={1}
            max={100}
          />
          <span className="text-xs text-slate-500">(1–100)</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-2 items-center">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleGenerate}>Generate Number</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>Clear</button>
        <label className="flex items-center gap-2 ml-2 select-none">
          <input type="checkbox" checked={sort} onChange={e => setSort(e.target.checked)} />
          <span className="text-sm">Sort results</span>
        </label>
      </div>
      <div>
        <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Result</label>
        {error && <div className="mb-2 text-red-600 dark:text-red-400 font-medium">{error}</div>}
        <div className="flex items-center gap-3">
          <input
            type="text"
            readOnly
            value={results.length ? results.join(", ") : ""}
            className="w-full font-mono text-base p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none"
            placeholder="Your random number(s) will appear here"
          />
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${!results.length ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleCopy}
            disabled={!results.length}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
