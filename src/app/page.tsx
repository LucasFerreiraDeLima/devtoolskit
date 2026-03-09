"use client";
import Link from "next/link";
import { useState } from "react";
import AdPlaceholder from "./components/AdPlaceholder";

const tools = [
  {
    href: "/tools/base64",
    color: "from-emerald-400 to-indigo-400",
    ring: "ring-sky-400",
    label: "Base64 Encoder / Decoder",
    desc: "Encode text to Base64 or decode Base64 instantly in your browser.",
  },
  {
    href: "/tools/case-converter",
    color: "from-pink-400 to-amber-400",
    ring: "ring-pink-400",
    label: "Case Converter",
    desc: "Convert text to UPPERCASE, lowercase, camelCase, snake_case, kebab-case and more.",
  },
  {
    href: "/tools/color-converter",
    color: "from-pink-400 to-red-400",
    ring: "ring-pink-400",
    label: "Color Converter",
    desc: "Convert colors between HEX, RGB and HSL instantly.",
  },
  {
    href: "/tools/hash-generator",
    color: "from-green-400 to-emerald-400",
    ring: "ring-green-400",
    label: "Hash Generator",
    desc: "Generate MD5, SHA1 and SHA256 hashes instantly in your browser.",
  },
  {
    href: "/tools/html-encoder",
    color: "from-pink-400 to-red-400",
    ring: "ring-pink-400",
    label: "HTML Encoder / Decoder",
    desc: "Encode and decode HTML entities instantly in your browser.",
  },
  {
    href: "/tools/json-formatter",
    color: "from-yellow-400 to-green-400",
    ring: "ring-sky-400",
    label: "JSON Formatter / Validator",
    desc: "Format, validate and minify JSON instantly in your browser.",
  },
  {
    href: "/tools/json-to-csv",
    color: "from-yellow-400 to-orange-400",
    ring: "ring-yellow-400",
    label: "JSON to CSV Converter",
    desc: "Convert JSON arrays of objects to CSV format instantly.",
  },
  {
    href: "/tools/json-to-xml",
    color: "from-purple-400 to-indigo-400",
    ring: "ring-purple-400",
    label: "JSON to XML Converter",
    desc: "Convert JSON data to XML format instantly.",
  },
  {
    href: "/tools/jwt-decoder",
    color: "from-indigo-400 to-sky-400",
    ring: "ring-indigo-400",
    label: "JWT Decoder",
    desc: "Decode JWT tokens and inspect header and payload instantly.",
  },
  {
    href: "/tools/password-generator",
    color: "from-green-400 to-teal-400",
    ring: "ring-green-400",
    label: "Password Generator",
    desc: "Generate secure random passwords instantly with custom options.",
  },
  {
    href: "/tools/random-number",
    color: "from-blue-400 to-cyan-400",
    ring: "ring-blue-400",
    label: "Random Number Generator",
    desc: "Generate random numbers instantly within a custom range.",
  },
  {
    href: "/tools/random-string",
    color: "from-purple-400 to-pink-400",
    ring: "ring-purple-400",
    label: "Random String Generator",
    desc: "Generate random strings instantly for testing, tokens, or IDs.",
  },
  {
    href: "/tools/regex-tester",
    color: "from-pink-400 to-red-400",
    ring: "ring-pink-400",
    label: "Regex Tester",
    desc: "Test regular expressions and see matches highlighted instantly.",
  },
  {
    href: "/tools/remove-duplicate-lines",
    color: "from-red-400 to-pink-400",
    ring: "ring-red-400",
    label: "Remove Duplicate Lines",
    desc: "Remove duplicate lines from text instantly in your browser.",
  },
  {
    href: "/tools/text-diff",
    color: "from-cyan-400 to-blue-400",
    ring: "ring-cyan-400",
    label: "Text Diff Checker",
    desc: "Compare two blocks of text and highlight differences instantly.",
  },
  {
    href: "/tools/text-sorter",
    color: "from-yellow-400 to-amber-400",
    ring: "ring-yellow-400",
    label: "Text Sorter",
    desc: "Sort lines of text alphabetically or by length instantly in your browser.",
  },
  {
    href: "/tools/timestamp-converter",
    color: "from-yellow-400 to-amber-500",
    ring: "ring-sky-400",
    label: "Timestamp Converter",
    desc: "Convert Unix timestamps to dates and vice versa instantly.",
  },
  {
    href: "/tools/url-encoder",
    color: "from-blue-400 to-sky-400",
    ring: "ring-blue-400",
    label: "URL Encoder / Decoder",
    desc: "Encode and decode URLs instantly in your browser.",
  },
  {
    href: "/tools/uuid-generator",
    color: "from-fuchsia-400 to-pink-500",
    ring: "ring-fuchsia-400",
    label: "UUID Generator",
    desc: "Generate UUID v4 identifiers instantly for development and testing.",
  },
  {
    href: "/tools/word-counter",
    color: "from-sky-400 to-indigo-400",
    ring: "ring-sky-400",
    label: "Word Counter",
    desc: "Count words, characters, lines and paragraphs instantly.",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const filteredTools = tools.filter(tool =>
    tool.label.toLowerCase().includes(search.toLowerCase()) ||
    tool.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 px-2 py-6 sm:py-12">
      <header className="w-full max-w-2xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm mb-3" tabIndex={0} aria-label="DevTools Kit - Free Online Utilities">
          DevTools Kit
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium" aria-label="Fast, privacy-friendly developer utilities — free to use and easy to share.">
          Fast, privacy-friendly developer utilities — free to use and easy to share.
        </p>
      </header>

      {/* Grid de ferramentas principal, mobile-first, SEO-friendly */}
      <section className="w-full max-w-2xl mb-8" aria-labelledby="quick-tools-heading">
        <div className="rounded-2xl bg-white/90 dark:bg-slate-900/80 shadow-lg p-4 sm:p-6 flex flex-col gap-4 border border-slate-100 dark:border-slate-800">
          <h2 id="quick-tools-heading" className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-gradient-to-b from-sky-400 to-indigo-400 rounded-full mr-2" aria-hidden="true" />
            Quick Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Small utilities to help with everyday text and dev tasks. Optimized for speed, SEO and accessibility.
          </p>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for a tool..."
            className="mt-2 mb-2 w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Search for a tool"
          />
          <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
            {filteredTools.length === 0 ? (
              <div className="col-span-2 text-center text-slate-500 dark:text-slate-400 py-8">Nenhuma ferramenta encontrada.</div>
            ) : (
              filteredTools.map(tool => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 ${tool.ring} focus:ring-offset-2`}
                  aria-label={tool.label + " Tool"}
                >
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                    <span className={`inline-block w-2 h-5 bg-gradient-to-b ${tool.color} rounded-full mr-1`} aria-hidden="true" />
                    {tool.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{tool.desc}</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* New features card */}
      <div className="w-full max-w-2xl mt-4 mb-2">
        <div className="rounded-2xl border-2 border-dashed border-sky-400 bg-sky-50 dark:bg-slate-800/60 p-6 sm:p-8 shadow flex flex-col items-center text-center mb-6 animate-pulse-slow">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-6 h-6 text-sky-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <span className="text-lg font-bold text-sky-700 dark:text-sky-300">New tools coming soon!</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base">We are always adding new utilities to make your daily tasks even easier. Stay tuned for more features and updates!</p>
        </div>
        <AdPlaceholder />
      </div>

      <section className="w-full max-w-2xl mb-10">
        <div className="rounded-xl bg-sky-50 dark:bg-slate-800/60 p-6 sm:p-8 shadow border border-sky-100 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-2 text-sky-700 dark:text-sky-300">Why use our tools</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>Fast, client-side tools — nothing leaves your browser.</li>
            <li>Accessible and mobile-first designs.</li>
            <li>SEO-friendly pages for organic discovery.</li>
          </ul>
        </div>
      </section>


      <section className="w-full max-w-2xl mb-10">
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-6 sm:p-8 shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-2">SEO content</h2>
          <p className="text-slate-700 dark:text-slate-300">
            DevTools Kit provides a growing collection of free online tools for developers and writers. Each tool focuses on performance, clarity, and accessibility so users can quickly complete small tasks like counting words, converting values, or cleaning text.
          </p>
        </div>
      </section>

      <section className="w-full max-w-2xl mb-10">
        <div className="rounded-xl bg-white/90 dark:bg-slate-900/80 p-6 sm:p-8 shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-2">FAQ</h2>
          <dl className="mt-2 space-y-3 text-slate-700 dark:text-slate-300">
            <div>
              <dt className="font-medium">Are these tools free?</dt>
              <dd>Yes — all core tools are free to use.</dd>
            </div>
            <div>
              <dt className="font-medium">Do you collect my data?</dt>
              <dd>No. Tools are primarily client-side and do not send your text to a server.</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="w-full max-w-2xl text-center text-sm text-slate-600 dark:text-slate-400 mt-8">
        <p>Built for speed, SEO, and privacy. More tools coming soon.</p>
      </footer>
    </div>
  );
}
