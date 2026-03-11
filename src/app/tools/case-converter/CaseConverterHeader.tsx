"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function CaseConverterHeader() {
  const { t } = useTranslation();
  return (
    <>
      <span className="text-3xl font-extrabold mb-2 text-slate-900 dark:text-white">{t("caseConverter_label")}</span>
      <p className="mt-1 text-lg text-slate-700 dark:text-slate-300">{t("caseConverter_desc")}</p>
    </>
  );
}
