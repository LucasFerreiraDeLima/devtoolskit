"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";
import React from "react";

export default function RegexTesterInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8 mt-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("regexTester_howToTestTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("regexTester_howToTestDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("regexTester_flagsTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li><span className="font-mono">g</span> – {t("regexTester_flag_g")}</li>
          <li><span className="font-mono">i</span> – {t("regexTester_flag_i")}</li>
          <li><span className="font-mono">m</span> – {t("regexTester_flag_m")}</li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("regexTester_examplesTitle")}</h2>
        <pre className="bg-slate-100 dark:bg-slate-800 rounded p-4 text-sm overflow-x-auto text-slate-800 dark:text-slate-200">{t("regexTester_examplesPre")}</pre>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("regexTester_whyTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("regexTester_whyDesc")}</p>
      </article>
    </section>
  );
}
