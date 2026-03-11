"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function TextSorterInfo() {
  const { t } = useTranslation();

  return (
    <section className="prose prose-slate dark:prose-invert">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("textSorter_howToTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("textSorter_howToDesc")}</p>
        </article>

        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("textSorter_alphaTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("textSorter_alphaDesc")}</p>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("textSorter_lengthTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("textSorter_lengthDesc")}</p>
        </article>
      </div>
    </section>
  );
}
