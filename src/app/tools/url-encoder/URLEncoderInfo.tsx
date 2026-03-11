"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function URLEncoderInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8 mt-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("urlEncoder_whyTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("urlEncoder_whyDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("urlEncoder_howTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("urlEncoder_howDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("urlEncoder_howDecodeTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("urlEncoder_howDecodeDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("urlEncoder_examplesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("urlEncoder_exampleSpace")}: <code>%20</code></li>
          <li>{t("urlEncoder_exampleExclamation")}: <code>%21</code></li>
          <li>{t("urlEncoder_exampleAt")}: <code>%40</code></li>
          <li>{t("urlEncoder_exampleHash")}: <code>%23</code></li>
        </ul>
      </article>
    </section>
  );
}
