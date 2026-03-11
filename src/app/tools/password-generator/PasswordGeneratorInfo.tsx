"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function PasswordGeneratorInfo() {
  const { t } = useTranslation();

  return (
    <section className="prose prose-slate dark:prose-invert">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("password_howGeneratorWorksTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("password_howGeneratorWorksDesc")}</p>
        </article>

        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("password_tipsTitle")}</h3>
          <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 dark:text-slate-300">
            <li>{t("password_tip1")}</li>
            <li>{t("password_tip2")}</li>
            <li>{t("password_tip3")}</li>
            <li>{t("password_tip4")}</li>
          </ul>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("password_examplesTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("password_examplesDesc")}</p>
        </article>
      </div>
    </section>
  );
}
