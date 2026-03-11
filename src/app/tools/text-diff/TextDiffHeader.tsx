"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function TextDiffHeader() {
  const { t } = useTranslation();
  return (
    <>
      <span className="text-2xl sm:text-3xl font-semibold">{t("textDiff_label")}</span>
      <p className="mt-1 text-slate-600 dark:text-slate-300">{t("textDiff_desc")}</p>
    </>
  );
}
