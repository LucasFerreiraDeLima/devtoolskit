"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function RandomNumberInfo() {
  const { t } = useTranslation();

  return (
    <section className="prose prose-slate dark:prose-invert">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("randomNumber_howGeneratedTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("randomNumber_howGeneratedDesc")}</p>
        </article>

        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("randomNumber_usesTitle")}</h3>
          <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 dark:text-slate-300">
            <li>{t("randomNumber_use1")}</li>
            <li>{t("randomNumber_use2")}</li>
            <li>{t("randomNumber_use3")}</li>
            <li>{t("randomNumber_use4")}</li>
          </ul>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("randomNumber_examplesTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("randomNumber_examplesDesc")}</p>
        </article>
      </div>
    </section>
  );
}
