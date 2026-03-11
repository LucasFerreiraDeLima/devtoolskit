"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function HashGeneratorHeader() {
  const { t } = useTranslation();
  return (
    <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">{t("hashGenerator_label")}</span>
  );
}
