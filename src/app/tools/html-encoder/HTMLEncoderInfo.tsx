"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function HTMLEncoderInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8 mt-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("html_whyEntitiesTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("html_whyEntitiesDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("html_protectionTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("html_protectionDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("html_examplesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("html_example_lt")}: <code>&amp;lt;</code></li>
          <li>{t("html_example_gt")}: <code>&amp;gt;</code></li>
          <li>{t("html_example_amp")}: <code>&amp;amp;</code></li>
          <li>{t("html_example_quot")}: <code>&amp;quot;</code></li>
          <li>{t("html_example_apos")}: <code>&amp;apos;</code></li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("html_whenTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("html_whenDesc")}</p>
      </article>
    </section>
  );
}
