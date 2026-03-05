import Link from "next/link";
import AdPlaceholder from "./components/AdPlaceholder";

export default function Home() {
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
          <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
            {/* Links das ferramentas principais, mobile-first, acessíveis - ORDEM ALFABÉTICA */}
            <Link href="/tools/base64" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2" aria-label="Base64 Encoder Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-emerald-400 to-indigo-400 rounded-full mr-1" aria-hidden="true" />Base64 Encoder / Decoder</h3><p className="text-sm text-slate-600 dark:text-slate-400">Encode text to Base64 or decode Base64 instantly in your browser.</p></Link>
            <Link href="/tools/case-converter" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2" aria-label="Case Converter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-pink-400 to-amber-400 rounded-full mr-1" aria-hidden="true" />Case Converter</h3><p className="text-sm text-slate-600 dark:text-slate-400">Convert text to UPPERCASE, lowercase, camelCase, snake_case, kebab-case and more.</p></Link>
            <Link href="/tools/color-converter" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2" aria-label="Color Converter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-pink-400 to-red-400 rounded-full mr-1" aria-hidden="true" />Color Converter</h3><p className="text-sm text-slate-600 dark:text-slate-400">Convert colors between HEX, RGB and HSL instantly.</p></Link>
            <Link href="/tools/hash-generator" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2" aria-label="Hash Generator Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full mr-1" aria-hidden="true" />Hash Generator</h3><p className="text-sm text-slate-600 dark:text-slate-400">Generate MD5, SHA1 and SHA256 hashes instantly in your browser.</p></Link>
            <Link href="/tools/html-encoder" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2" aria-label="HTML Encoder Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-pink-400 to-red-400 rounded-full mr-1" aria-hidden="true" />HTML Encoder / Decoder</h3><p className="text-sm text-slate-600 dark:text-slate-400">Encode and decode HTML entities instantly in your browser.</p></Link>
            <Link href="/tools/json-formatter" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2" aria-label="JSON Formatter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-yellow-400 to-green-400 rounded-full mr-1" aria-hidden="true" />JSON Formatter / Validator</h3><p className="text-sm text-slate-600 dark:text-slate-400">Format, validate and minify JSON instantly in your browser.</p></Link>
            <Link href="/tools/json-to-csv" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2" aria-label="JSON to CSV Converter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full mr-1" aria-hidden="true" />JSON to CSV Converter</h3><p className="text-sm text-slate-600 dark:text-slate-400">Convert JSON arrays of objects to CSV format instantly.</p></Link>
            <Link href="/tools/json-to-xml" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2" aria-label="JSON to XML Converter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full mr-1" aria-hidden="true" />JSON to XML Converter</h3><p className="text-sm text-slate-600 dark:text-slate-400">Convert JSON data to XML format instantly.</p></Link>
            <Link href="/tools/jwt-decoder" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2" aria-label="JWT Decoder Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-indigo-400 to-sky-400 rounded-full mr-1" aria-hidden="true" />JWT Decoder</h3><p className="text-sm text-slate-600 dark:text-slate-400">Decode JWT tokens and inspect header and payload instantly.</p></Link>
            <Link href="/tools/password-generator" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2" aria-label="Password Generator Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-green-400 to-teal-400 rounded-full mr-1" aria-hidden="true" />Password Generator</h3><p className="text-sm text-slate-600 dark:text-slate-400">Generate secure random passwords instantly with custom options.</p></Link>
            <Link href="/tools/random-number" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" aria-label="Random Number Generator Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mr-1" aria-hidden="true" />Random Number Generator</h3><p className="text-sm text-slate-600 dark:text-slate-400">Generate random numbers instantly within a custom range.</p></Link>
            <Link href="/tools/random-string" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2" aria-label="Random String Generator Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mr-1" aria-hidden="true" />Random String Generator</h3><p className="text-sm text-slate-600 dark:text-slate-400">Generate random strings instantly for testing, tokens, or IDs.</p></Link>
            <Link href="/tools/regex-tester" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2" aria-label="Regex Tester Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-pink-400 to-red-400 rounded-full mr-1" aria-hidden="true" />Regex Tester</h3><p className="text-sm text-slate-600 dark:text-slate-400">Test regular expressions and see matches highlighted instantly.</p></Link>
            <Link href="/tools/remove-duplicate-lines" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2" aria-label="Remove Duplicate Lines Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-red-400 to-pink-400 rounded-full mr-1" aria-hidden="true" />Remove Duplicate Lines</h3><p className="text-sm text-slate-600 dark:text-slate-400">Remove duplicate lines from text instantly in your browser.</p></Link>
            <Link href="/tools/text-diff" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2" aria-label="Text Diff Checker Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-1" aria-hidden="true" />Text Diff Checker</h3><p className="text-sm text-slate-600 dark:text-slate-400">Compare two blocks of text and highlight differences instantly.</p></Link>
            <Link href="/tools/text-sorter" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2" aria-label="Text Sorter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-yellow-400 to-amber-400 rounded-full mr-1" aria-hidden="true" />Text Sorter</h3><p className="text-sm text-slate-600 dark:text-slate-400">Sort lines of text alphabetically or by length instantly in your browser.</p></Link>
            <Link href="/tools/timestamp-converter" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2" aria-label="Timestamp Converter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-full mr-1" aria-hidden="true" />Timestamp Converter</h3><p className="text-sm text-slate-600 dark:text-slate-400">Convert Unix timestamps to dates and vice versa instantly.</p></Link>
            <Link href="/tools/url-encoder" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" aria-label="URL Encoder Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-blue-400 to-sky-400 rounded-full mr-1" aria-hidden="true" />URL Encoder / Decoder</h3><p className="text-sm text-slate-600 dark:text-slate-400">Encode and decode URLs instantly in your browser.</p></Link>
            <Link href="/tools/uuid-generator" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2" aria-label="UUID Generator Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-fuchsia-400 to-pink-500 rounded-full mr-1" aria-hidden="true" />UUID Generator</h3><p className="text-sm text-slate-600 dark:text-slate-400">Generate UUID v4 identifiers instantly for development and testing.</p></Link>
            <Link href="/tools/word-counter" className="block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2" aria-label="Word Counter Tool"><h3 className="font-semibold text-lg mb-1 flex items-center gap-2"><span className="inline-block w-2 h-5 bg-gradient-to-b from-sky-400 to-indigo-400 rounded-full mr-1" aria-hidden="true" />Word Counter</h3><p className="text-sm text-slate-600 dark:text-slate-400">Count words, characters, lines and paragraphs instantly.</p></Link>
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
