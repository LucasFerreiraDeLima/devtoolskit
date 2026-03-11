"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function TextDiffInfo() {
  const { t } = useTranslation();
  return (
    <section className="mt-10 space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-12 border border-slate-100 dark:border-slate-800 w-full">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("textDiff_howWorksTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("textDiff_howWorksDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("textDiff_usesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("textDiff_use1")}</li>
          <li>{t("textDiff_use2")}</li>
          <li>{t("textDiff_use3")}</li>
          <li>{t("textDiff_use4")}</li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("textDiff_examplesTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("textDiff_examplesDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("textDiff_whyTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("textDiff_whyDesc")}</p>
      </article>
    </section>
  );
}
