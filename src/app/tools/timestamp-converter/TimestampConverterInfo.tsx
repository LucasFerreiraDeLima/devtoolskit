"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function TimestampConverterInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("timestamp_toDateTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("timestamp_toDateDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("timestamp_toTimestampTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("timestamp_toTimestampDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("timestamp_commonUsesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("timestamp_use1")}</li>
          <li>{t("timestamp_use2")}</li>
          <li>{t("timestamp_use3")}</li>
          <li>{t("timestamp_use4")}</li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("timestamp_examplesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>
            <span className="font-mono">1709596800</span> → <span className="font-mono">2024-03-05 00:00:00 (UTC)</span>
          </li>
          <li>
            <span className="font-mono">2024-03-05 00:00:00</span> → <span className="font-mono">1709596800</span>
          </li>
        </ul>
      </article>
    </section>
  );
}
