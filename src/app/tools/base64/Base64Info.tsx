"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";
import React from "react";

export default function Base64Info() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8 mt-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("base64_howToDecodeTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">
          {t("base64_howToDecodeDesc")}
        </p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("base64_useCasesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("base64_useCase1")}</li>
          <li>{t("base64_useCase2")}</li>
          <li>{t("base64_useCase3")}</li>
          <li>{t("base64_useCase4")}</li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("base64_examplesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>
            <span className="font-mono">hello</span> → <span className="font-mono">aGVsbG8=</span>
          </li>
          <li>
            <span className="font-mono">Base64</span> → <span className="font-mono">QmFzZTY0</span>
          </li>
          <li>
            <span className="font-mono">12345</span> → <span className="font-mono">MTIzNDU=</span>
          </li>
        </ul>
      </article>
    </section>
  );
}