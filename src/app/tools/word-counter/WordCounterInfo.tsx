"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function WordCounterInfo() {
  const { t } = useTranslation();
  return (
    <section className="mt-6 bg-slate-50 dark:bg-slate-900 p-5 rounded-lg">
      <div className="prose max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <h3>{t("wordCounter_howTitle")}</h3>
        <p>{t("wordCounter_howDesc")}</p>

        <div className="my-6"></div>

        <h4>{t("wordCounter_mainUsesTitle")}</h4>
        <ul>
          <li>{t("wordCounter_use1")}</li>
          <li>{t("wordCounter_use2")}</li>
          <li>{t("wordCounter_use3")}</li>
        </ul>
      </div>
    </section>
  );
}
