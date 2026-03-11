
"use client";
import Link from "next/link";
import { useState } from "react";
import AdPlaceholder from "./components/AdPlaceholder";
import { useTranslation } from "react-i18next";
import "../utils/i18n";

const tools = [
  {
    href: "/tools/base64",
    color: "from-emerald-400 to-indigo-400",
    ring: "ring-sky-400",
    labelKey: "base64_label",
    descKey: "base64_desc",
  },
  {
    href: "/tools/case-converter",
    color: "from-pink-400 to-amber-400",
    ring: "ring-pink-400",
    labelKey: "caseConverter_label",
    descKey: "caseConverter_desc",
  },
  {
    href: "/tools/color-converter",
    color: "from-pink-400 to-red-400",
    ring: "ring-pink-400",
    labelKey: "colorConverter_label",
    descKey: "colorConverter_desc",
  },
  {
    href: "/tools/hash-generator",
    color: "from-green-400 to-emerald-400",
    ring: "ring-green-400",
    labelKey: "hashGenerator_label",
    descKey: "hashGenerator_desc",
  },
  {
    href: "/tools/html-encoder",
    color: "from-pink-400 to-red-400",
    ring: "ring-pink-400",
    labelKey: "htmlEncoder_label",
    descKey: "htmlEncoder_desc",
  },
  {
    href: "/tools/json-formatter",
    color: "from-yellow-400 to-green-400",
    ring: "ring-sky-400",
    labelKey: "jsonFormatter_label",
    descKey: "jsonFormatter_desc",
  },
  {
    href: "/tools/json-to-csv",
    color: "from-yellow-400 to-orange-400",
    ring: "ring-yellow-400",
    labelKey: "jsonToCsv_label",
    descKey: "jsonToCsv_desc",
  },
  {
    href: "/tools/json-to-xml",
    color: "from-purple-400 to-indigo-400",
    ring: "ring-purple-400",
    labelKey: "jsonToXml_label",
    descKey: "jsonToXml_desc",
  },
  {
    href: "/tools/jwt-decoder",
    color: "from-indigo-400 to-sky-400",
    ring: "ring-indigo-400",
    labelKey: "jwtDecoder_label",
    descKey: "jwtDecoder_desc",
  },
  {
    href: "/tools/password-generator",
    color: "from-green-400 to-teal-400",
    ring: "ring-green-400",
    labelKey: "passwordGenerator_label",
    descKey: "passwordGenerator_desc",
  },
  {
    href: "/tools/random-number",
    color: "from-blue-400 to-cyan-400",
    ring: "ring-blue-400",
    labelKey: "randomNumber_label",
    descKey: "randomNumber_desc",
  },
  {
    href: "/tools/random-string",
    color: "from-purple-400 to-pink-400",
    ring: "ring-purple-400",
    labelKey: "randomString_label",
    descKey: "randomString_desc",
  },
  {
    href: "/tools/regex-tester",
    color: "from-pink-400 to-red-400",
    ring: "ring-pink-400",
    labelKey: "regexTester_label",
    descKey: "regexTester_desc",
  },
  {
    href: "/tools/remove-duplicate-lines",
    color: "from-red-400 to-pink-400",
    ring: "ring-red-400",
    labelKey: "removeDuplicateLines_label",
    descKey: "removeDuplicateLines_desc",
  },
  {
    href: "/tools/text-diff",
    color: "from-cyan-400 to-blue-400",
    ring: "ring-cyan-400",
    labelKey: "textDiff_label",
    descKey: "textDiff_desc",
  },
  {
    href: "/tools/text-sorter",
    color: "from-yellow-400 to-amber-400",
    ring: "ring-yellow-400",
    labelKey: "textSorter_label",
    descKey: "textSorter_desc",
  },
  {
    href: "/tools/timestamp-converter",
    color: "from-yellow-400 to-amber-500",
    ring: "ring-sky-400",
    labelKey: "timestampConverter_label",
    descKey: "timestampConverter_desc",
  },
  {
    href: "/tools/url-encoder",
    color: "from-blue-400 to-sky-400",
    ring: "ring-blue-400",
    labelKey: "urlEncoder_label",
    descKey: "urlEncoder_desc",
  },
  {
    href: "/tools/uuid-generator",
    color: "from-fuchsia-400 to-pink-500",
    ring: "ring-fuchsia-400",
    labelKey: "uuidGenerator_label",
    descKey: "uuidGenerator_desc",
  },
  {
    href: "/tools/word-counter",
    color: "from-sky-400 to-indigo-400",
    ring: "ring-sky-400",
    labelKey: "wordCounter_label",
    descKey: "wordCounter_desc",
  },
];

export default function Home() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const filteredTools = tools
    .filter(tool =>
      t(tool.labelKey).toLowerCase().includes(search.toLowerCase()) ||
      t(tool.descKey).toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => t(a.labelKey).localeCompare(t(b.labelKey)));

  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 px-2 py-6 sm:py-12">
      <header className="w-full max-w-2xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm mb-3" tabIndex={0} aria-label="DevTools Kit - Free Online Utilities">
          DevTools Kit
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium" aria-label="Fast, privacy-friendly developer utilities — free to use and easy to share.">
          {t('devToolsDescription')}
        </p>
      </header>

      {/* Grid de ferramentas principal, mobile-first, SEO-friendly */}
      <section className="w-full max-w-2xl mb-8" aria-labelledby="quick-tools-heading">
        <div className="rounded-2xl bg-white/90 dark:bg-slate-900/80 shadow-lg p-4 sm:p-6 flex flex-col gap-4 border border-slate-100 dark:border-slate-800">
          <h2 id="quick-tools-heading" className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-gradient-to-b from-sky-400 to-indigo-400 rounded-full mr-2" aria-hidden="true" />
            {t('quickTools')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            {t('quickToolsDescription')}
          </p>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className="mt-2 mb-2 w-full rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Search for a tool"
          />
          <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
            {filteredTools.length === 0 ? (
              <div className="col-span-2 text-center text-slate-500 dark:text-slate-400 py-8">{t('noToolsFound') || 'Nenhuma ferramenta encontrada.'}</div>
            ) : (
              filteredTools.map(tool => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`block rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 shadow-sm hover:shadow-lg transition hover:-translate-y-1 focus:outline-none focus:ring-2 ${tool.ring} focus:ring-offset-2`}
                  aria-label={t(tool.labelKey) + " Tool"}
                >
                  <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
                    <span className={`inline-block w-2 h-5 bg-gradient-to-b ${tool.color} rounded-full mr-1`} aria-hidden="true" />
                    {t(tool.labelKey)}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t(tool.descKey)}</p>
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
            <span className="text-lg font-bold text-sky-700 dark:text-sky-300">{t('newToolsTitle')}</span>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-base">{t('newToolsDesc')}</p>
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 text-center text-slate-500 dark:text-slate-400 font-semibold mb-4">
          <div>{t('advertisement')}</div>
          <div className="text-xs font-normal">{t('adPlaceholder')}</div>
        </div>
        <AdPlaceholder />
      </div>

      <section className="w-full max-w-2xl mb-10">
        <div className="rounded-xl bg-sky-50 dark:bg-slate-800/60 p-6 sm:p-8 shadow border border-sky-100 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-2 text-sky-700 dark:text-sky-300">{t('whyUseTitle')}</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
            <li>{t('whyUse1')}</li>
            <li>{t('whyUse2')}</li>
            <li>{t('whyUse3')}</li>
          </ul>
        </div>
      </section>


      <section className="w-full max-w-2xl mb-10">
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-6 sm:p-8 shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-2">{t('seoContentTitle')}</h2>
          <p className="text-slate-700 dark:text-slate-300">
            {t('seoContentDesc')}
          </p>
        </div>
      </section>

      <section className="w-full max-w-2xl mb-10">
        <div className="rounded-xl bg-white/90 dark:bg-slate-900/80 p-6 sm:p-8 shadow border border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-semibold mb-2">{t('faqTitle')}</h2>
          <dl className="mt-2 space-y-3 text-slate-700 dark:text-slate-300">
            <div>
              <dt className="font-medium">{t('faqQ1')}</dt>
              <dd>{t('faqA1')}</dd>
            </div>
            <div>
              <dt className="font-medium">{t('faqQ2')}</dt>
              <dd>{t('faqA2')}</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="w-full max-w-2xl text-center text-sm text-slate-600 dark:text-slate-400 mt-8">
        <p>{t('footerText')}</p>
      </footer>
    </div>
  );
}
