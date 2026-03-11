"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function CaseConverterInfo() {
  const { t } = useTranslation();
  return (
    <section className="mt-10 space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-12 border border-slate-100 dark:border-slate-800 w-full">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("caseConverter_whatTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("caseConverter_whatDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("caseConverter_howTitle")}</h2>
        <ol className="list-decimal pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("caseConverter_howStep1")}</li>
          <li>{t("caseConverter_howStep2")}</li>
          <li>{t("caseConverter_howStep3")}</li>
        </ol>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("caseConverter_examplesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("caseConverter_example1")}</li>
          <li>{t("caseConverter_example2")}</li>
          <li>{t("caseConverter_example3")}</li>
          <li>{t("caseConverter_example4")}</li>
        </ul>
      </article>
    </section>
  );
}
