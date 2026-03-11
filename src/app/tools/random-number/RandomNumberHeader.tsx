"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function RandomNumberHeader() {
  const { t } = useTranslation();
  return <span className="text-xl font-semibold">{t("randomNumber_title")}</span>;
}
