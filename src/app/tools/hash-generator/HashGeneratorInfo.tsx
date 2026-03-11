"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function HashGeneratorInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("hash_whatIsTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("hash_whatIsDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("hash_algorithmsTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("hash_algorithmsDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("hash_useCasesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("hash_useCase1")}</li>
          <li>{t("hash_useCase2")}</li>
          <li>{t("hash_useCase3")}</li>
          <li>{t("hash_useCase4")}</li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("hash_examplesTitle")}</h2>
        <pre className="bg-slate-100 dark:bg-slate-800 rounded p-4 text-sm overflow-x-auto text-slate-800 dark:text-slate-200">{t("hash_examplesContent")}</pre>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("hash_whyTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("hash_whyDesc")}</p>
      </article>
    </section>
  );
}
