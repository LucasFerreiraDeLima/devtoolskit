"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function UUIDGeneratorHeader() {
  const { t } = useTranslation();
  return <span id="uuid-generator-heading" className="text-xl font-semibold">{t("uuid_title")}</span>;
}
