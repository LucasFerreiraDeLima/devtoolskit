"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function ColorConverterHeader() {
  const { t } = useTranslation();
  return (
    <>
      <span className="text-2xl sm:text-3xl font-semibold">{t("colorConverter_label")}</span>
      <p className="mt-1 text-slate-600 dark:text-slate-300">{t("colorConverter_desc")}</p>
    </>
  );
}
