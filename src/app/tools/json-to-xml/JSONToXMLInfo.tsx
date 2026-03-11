"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function JSONToXMLInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("xml_whatIsTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("xml_whatIsDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jsonToXml_howToTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("jsonToXml_howToDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jsonToXml_whyTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("jsonToXml_whyDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jsonToXml_examplesTitle")}</h2>
        <pre className="bg-slate-100 dark:bg-slate-800 rounded p-4 text-sm overflow-x-auto text-slate-800 dark:text-slate-200">
{t("jsonToXml_examplesContent")}
        </pre>
      </article>
    </section>
  );
}
