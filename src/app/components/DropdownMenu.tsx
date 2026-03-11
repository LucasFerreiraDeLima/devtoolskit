"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../utils/i18n";

const toolLinks = [
  { href: "/tools/base64", labelKey: "base64_label" },
  { href: "/tools/case-converter", labelKey: "caseConverter_label" },
  { href: "/tools/color-converter", labelKey: "colorConverter_label" },
  { href: "/tools/hash-generator", labelKey: "hashGenerator_label" },
  { href: "/tools/html-encoder", labelKey: "htmlEncoder_label" },
  { href: "/tools/json-formatter", labelKey: "jsonFormatter_label" },
  { href: "/tools/json-to-csv", labelKey: "jsonToCsv_label" },
  { href: "/tools/json-to-xml", labelKey: "jsonToXml_label" },
  { href: "/tools/jwt-decoder", labelKey: "jwtDecoder_label" },
  { href: "/tools/password-generator", labelKey: "passwordGenerator_label" },
  { href: "/tools/random-number", labelKey: "randomNumber_label" },
  { href: "/tools/random-string", labelKey: "randomString_label" },
  { href: "/tools/regex-tester", labelKey: "regexTester_label" },
  { href: "/tools/remove-duplicate-lines", labelKey: "removeDuplicateLines_label" },
  { href: "/tools/text-diff", labelKey: "textDiff_label" },
  { href: "/tools/text-sorter", labelKey: "textSorter_label" },
  { href: "/tools/timestamp-converter", labelKey: "timestampConverter_label" },
  { href: "/tools/url-encoder", labelKey: "urlEncoder_label" },
  { href: "/tools/uuid-generator", labelKey: "uuidGenerator_label" },
  { href: "/tools/word-counter", labelKey: "wordCounter_label" },
];

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);
  const { t } = useTranslation();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Keyboard accessibility: close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <li className="relative" ref={menuRef}>
      <button
        className={`flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition-colors focus:outline-none ${open ? "text-sky-600 dark:text-sky-400" : ""}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            setOpen(true);
          }
        }}
      >
        {t('tools')}
        <svg className={`w-4 h-4 ml-1 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <ul
        className={`absolute left-0 mt-2 min-w-[180px] rounded-lg bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-700 transition-all z-50 ${open ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"} max-h-[60vh] overflow-y-auto overscroll-contain`}
        tabIndex={-1}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Links das ferramentas em ordem alfabética pelo nome traduzido */}
        {toolLinks
          .slice()
          .sort((a, b) => t(a.labelKey).localeCompare(t(b.labelKey)))
          .map((tool, idx, arr) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className={`block px-4 py-2 hover:bg-sky-50 dark:hover:bg-slate-800 ${idx === 0 ? "rounded-t-lg" : ""} ${idx === arr.length - 1 ? "rounded-b-lg" : ""} text-slate-700 dark:text-slate-200`}
                onClick={() => setOpen(false)}
                role="menuitem"
              >
                {t(tool.labelKey)}
              </Link>
            </li>
          ))}
      </ul>
    </li>
  );
}
