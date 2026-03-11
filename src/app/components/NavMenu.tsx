"use client";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { useTranslation } from "react-i18next";
import "../../utils/i18n";
import { useEffect, useState } from "react";

export default function NavMenu() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language || "en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("site-lang");
      if (saved && saved !== lang) {
        i18n.changeLanguage(saved);
        setLang(saved);
        return;
      }

      const nav = (navigator.language || (navigator.languages && navigator.languages[0]) || "").toLowerCase();
      let detected: string | null = null;
      if (nav.startsWith("pt")) detected = "pt";
      else if (nav.startsWith("es")) detected = "es";
      else if (nav.startsWith("en")) detected = "en";

      const chosen = detected || "en";
      if (chosen !== lang) {
        i18n.changeLanguage(chosen);
        try {
          localStorage.setItem("site-lang", chosen);
        } catch (e) {}
        setLang(chosen);
      }
    } catch (e) {
      // ignore (SSR safety)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleLangChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    try {
      localStorage.setItem("site-lang", newLang);
    } catch (e) {}
    setLang(newLang);
  }

  return (
    <nav aria-label="Main navigation" className="w-full sm:w-auto flex justify-center sm:justify-end">
      <ul className="flex gap-6 items-center text-base font-medium text-slate-700 dark:text-slate-200">
        <li>
          <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" tabIndex={0} aria-label={t("home")}>
            {t("home")}
          </Link>
        </li>
        <DropdownMenu />

        <li>
          <label htmlFor="site-lang" className="sr-only">{t("language_label")}</label>
          <div className="flex items-center gap-2">
            <span className="text-lg" aria-hidden>
              {lang === "en" ? (
                <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                  <rect width="20" height="14" fill="#b22234" />
                  <g fill="#fff">
                    <rect y="1" width="20" height="1" />
                    <rect y="3" width="20" height="1" />
                    <rect y="5" width="20" height="1" />
                    <rect y="7" width="20" height="1" />
                    <rect y="9" width="20" height="1" />
                    <rect y="11" width="20" height="1" />
                  </g>
                  <rect width="8" height="6" fill="#3c3b6e" />
                </svg>
              ) : lang === "pt" ? (
                <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                  <rect width="20" height="14" fill="#009b3a" />
                  <polygon points="10,2 15,7 10,12 5,7" fill="#ffdf00" />
                  <circle cx="10" cy="7" r="2.2" fill="#002776" />
                </svg>
              ) : (
                <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                  <rect width="20" height="14" fill="#c60b1e" />
                  <rect y="4" width="20" height="6" fill="#ffc400" />
                </svg>
              )}
            </span>

            <select
              id="site-lang"
              value={lang}
              onChange={handleLangChange}
              className="bg-transparent border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={t("language_label")}
            >
              <option value="en">🇺🇸 {t("language_en")}</option>
              <option value="pt">🇧🇷 {t("language_pt")}</option>
              <option value="es">🇪🇸 {t("language_es")}</option>
            </select>
          </div>
        </li>
      </ul>
    </nav>
  );
}
