"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function UUIDGeneratorInfo() {
  const { t } = useTranslation();

  return (
    <section className="prose prose-slate dark:prose-invert">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
        <article className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("uuid_examplesTitle")}</h3>
          <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 dark:text-slate-300">
            <li><span className="font-mono">550e8400-e29b-41d4-a716-446655440000</span> — {t("uuid_example_note")}</li>
            <li><span className="font-mono">f47ac10b-58cc-4372-a567-0e02b2c3d479</span> — {t("uuid_example_note")}</li>
          </ul>
        </article>

        <article>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t("uuid_whyTitle")}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{t("uuid_whyDesc")}</p>
        </article>
      </div>
    </section>
  );
}
