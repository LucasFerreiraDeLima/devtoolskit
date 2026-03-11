"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function PasswordGeneratorHeader() {
  const { t } = useTranslation();
  return <span className="text-xl font-semibold">{t("password_title")}</span>;
}
