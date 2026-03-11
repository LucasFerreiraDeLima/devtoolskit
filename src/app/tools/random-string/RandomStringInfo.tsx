"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function RandomStringInfo() {
  const { t } = useTranslation();

  return (
    <section className="prose prose-slate dark:prose-invert">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("randomString_examplesTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("randomString_examplesDesc")}</p>
        </article>

        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("randomString_testApiUsesTitle")}</h3>
          <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 dark:text-slate-300">
            <li>{t("randomString_use1")}</li>
            <li>{t("randomString_use2")}</li>
            <li>{t("randomString_use3")}</li>
            <li>{t("randomString_use4")}</li>
          </ul>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("randomString_howGeneratedTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("randomString_howGeneratedDesc")}</p>
        </article>
      </div>
    </section>
  );
}
