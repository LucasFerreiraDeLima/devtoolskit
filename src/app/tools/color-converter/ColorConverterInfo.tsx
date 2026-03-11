"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function ColorConverterInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("color_hex_title")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("color_hex_desc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("color_rgb_title")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("color_rgb_desc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("color_hsl_title")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("color_hsl_desc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("color_conversion_title")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("color_conversion_desc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("color_examplesTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">
          <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">#00ff00</span> → <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">rgb(0, 255, 0)</span> → <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">hsl(120, 100%, 50%)</span>
        </p>
      </article>
    </section>
  );
}
