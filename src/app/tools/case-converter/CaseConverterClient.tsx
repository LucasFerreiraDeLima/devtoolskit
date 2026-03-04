"use client";
import { useState } from "react";
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
          Case Converter
        </h1>
        <p className="mb-6 text-lg text-slate-700 dark:text-slate-300">
          Instantly convert your text to <span className="font-semibold">uppercase</span>, <span className="font-semibold">lowercase</span>, <span className="font-semibold">camelCase</span>, <span className="font-semibold">snake_case</span>, <span className="font-semibold">kebab-case</span> and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Input */}
          <div>
            <label htmlFor="case-input" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Input text
            </label>
            <textarea
              id="case-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste or type your text here..."
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
              Output
            </label>
            <textarea
              id="case-output"
              value={output}
              readOnly
              placeholder="Converted text will appear here..."
              className="w-full min-h-[120px] rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-base shadow focus:outline-none"
              aria-label="Converted text"
            />
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {output.length} characters
              {lastAction && (
                <span className="ml-2 italic text-slate-400">
                  ({lastAction} applied)
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Conversion buttons */}
        <div className="flex flex-wrap gap-2 mt-8">
          {[
            { label: "UPPERCASE", color: "from-sky-500 to-blue-500" },
            { label: "lowercase", color: "from-emerald-500 to-teal-400" },
            { label: "Capitalized Case", color: "from-pink-500 to-rose-400" },
            { label: "Sentence case", color: "from-yellow-400 to-amber-400" },
            { label: "camelCase", color: "from-indigo-500 to-sky-400" },
            { label: "snake_case", color: "from-cyan-500 to-sky-400" },
            { label: "kebab-case", color: "from-orange-400 to-amber-500" },
          ].map(({ label, color }) => (
            <button
              key={label}
              type="button"
              className={`rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r ${color} shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400 transition`}
              onClick={() => handleConvert(label)}
            >
              {label}
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
            Copy Result
          </button>
          <button
            type="button"
            className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 shadow"
            onClick={handleClear}
          >
            Clear text
          </button>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdPlaceholder />
        <AdPlaceholder />
      </div>
      {/* SEO/Informational Content */}
      <section className="mt-10 space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-12 border border-slate-100 dark:border-slate-800 w-full">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a Case Converter?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A case converter is a tool that instantly changes the capitalization and formatting of your text. It helps you switch between uppercase, lowercase, camelCase, snake_case, kebab-case, and more, making it easy to adapt your content for different programming, writing, or publishing needs.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to use the Case Converter</h2>
          <ol className="list-decimal pl-5 text-slate-700 dark:text-slate-300">
            <li>Paste or type your text into the input box.</li>
            <li>Click one of the conversion buttons to transform your text.</li>
            <li>The result will appear in the output box. You can copy it with a single click.</li>
          </ol>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of text conversion</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>
              <span className="font-mono">hello world</span> → <span className="font-mono">HELLO WORLD</span> (UPPERCASE)
            </li>
            <li>
              <span className="font-mono">hello world</span> → <span className="font-mono">helloWorld</span> (camelCase)
            </li>
            <li>
              <span className="font-mono">hello world</span> → <span className="font-mono">hello_world</span> (snake_case)
            </li>
            <li>
              <span className="font-mono">hello world</span> → <span className="font-mono">Hello World</span> (Capitalized Case)
            </li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why developers use case converters</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Developers and writers often need to quickly change the case of text for code, documentation, or publishing. A case converter saves time, reduces errors, and ensures consistency across different formats and platforms.
          </p>
        </article>
      </section>
    </div>
  );
}
