"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

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
        Tools
        <svg className={`w-4 h-4 ml-1 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      <ul
        className={`absolute left-0 mt-2 min-w-[180px] rounded-lg bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-700 transition-all z-50 ${open ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-95"}`}
        tabIndex={-1}
      >
        <li>
          <Link
            href="/tools/word-counter"
            className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-slate-800 rounded-t-lg text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Word Counter
          </Link>
        </li>
          <li>
            <Link
              href="/tools/color-converter"
              className="block px-4 py-2 hover:bg-pink-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Color Converter
            </Link>
          </li>
          <li>
            <Link
              href="/tools/random-string"
              className="block px-4 py-2 hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Random String Generator
            </Link>
          </li>
          <li>
            <Link
              href="/tools/random-number"
              className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Random Number Generator
            </Link>
          </li>
          <li>
            <Link
              href="/tools/password-generator"
              className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Password Generator
            </Link>
          </li>
          <li>
            <Link
              href="/tools/text-diff"
              className="block px-4 py-2 hover:bg-cyan-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              Text Diff Checker
            </Link>
          </li>
        <li>
          <Link
            href="/tools/case-converter"
            className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Case Converter
          </Link>
        </li>
        <li>
          <Link
            href="/tools/base64"
            className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Base64 Encode / Decode
          </Link>
        </li>
        <li>
          <Link
            href="/tools/json-formatter"
            className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            JSON Formatter / Validator
          </Link>
        </li>
        <li>
          <Link
            href="/tools/json-to-csv"
            className="block px-4 py-2 hover:bg-yellow-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            JSON to CSV Converter
          </Link>
        </li>
        <li>
          <Link
            href="/tools/json-to-xml"
            className="block px-4 py-2 hover:bg-purple-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            JSON to XML Converter
          </Link>
        </li>
        <li>
          <Link
            href="/tools/regex-tester"
            className="block px-4 py-2 hover:bg-pink-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Regex Tester
          </Link>
        </li>
        <li>
          <Link
            href="/tools/timestamp-converter"
            className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            Timestamp Converter
          </Link>
        </li>
        <li>
          <Link
            href="/tools/uuid-generator"
            className="block px-4 py-2 hover:bg-sky-50 dark:hover:bg-slate-800 rounded-b-lg text-slate-700 dark:text-slate-200"
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            UUID Generator
          </Link>
        </li>
          <li>
            <Link
              href="/tools/jwt-decoder"
              className="block px-4 py-2 hover:bg-indigo-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              onClick={() => setOpen(false)}
              role="menuitem"
            >
              JWT Decoder
            </Link>
          </li>
            <li>
              <Link
                href="/tools/url-encoder"
                className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                onClick={() => setOpen(false)}
                role="menuitem"
              >
                URL Encoder / Decoder
              </Link>
            </li>
              <li>
                <Link
                  href="/tools/html-encoder"
                  className="block px-4 py-2 hover:bg-pink-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  onClick={() => setOpen(false)}
                  role="menuitem"
                >
                  HTML Encoder / Decoder
                </Link>
              </li>
                <li>
                  <Link
                    href="/tools/hash-generator"
                    className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                    onClick={() => setOpen(false)}
                    role="menuitem"
                  >
                    Hash Generator
                  </Link>
                </li>
                  <li>
                    <Link
                      href="/tools/text-sorter"
                      className="block px-4 py-2 hover:bg-yellow-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                      onClick={() => setOpen(false)}
                      role="menuitem"
                    >
                      Text Sorter
                    </Link>
                  </li>
                    <li>
                      <Link
                        href="/tools/remove-duplicate-lines"
                        className="block px-4 py-2 hover:bg-red-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                        onClick={() => setOpen(false)}
                        role="menuitem"
                      >
                        Remove Duplicate Lines
                      </Link>
                    </li>
      </ul>
    </li>
  );
}
