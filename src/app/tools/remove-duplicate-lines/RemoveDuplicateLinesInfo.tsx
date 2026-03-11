"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";
import React from "react";

export default function RemoveDuplicateLinesInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8 mt-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("removeDuplicateLines_whyTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("removeDuplicateLines_whyDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("removeDuplicateLines_howTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("removeDuplicateLines_howDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("removeDuplicateLines_examplesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("removeDuplicateLines_exampleInput", "Input: apple, banana, apple, orange, banana")}</li>
          <li>{t("removeDuplicateLines_exampleOutput", "Output: apple, banana, orange")}</li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("removeDuplicateLines_usesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("removeDuplicateLines_use1")}</li>
          <li>{t("removeDuplicateLines_use2")}</li>
          <li>{t("removeDuplicateLines_use3")}</li>
        </ul>
      </article>
    </section>
  );
}
