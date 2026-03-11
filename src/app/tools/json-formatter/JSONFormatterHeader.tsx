"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function JSONFormatterHeader() {
  const { t } = useTranslation();
  return (
    <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">{t("jsonFormatter_label")}</span>
  );
}
