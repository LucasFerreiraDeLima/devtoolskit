"use client";
import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import URLEncoderClient from "./URLEncoderClient";
import URLEncoderHeader from "./URLEncoderHeader";
import URLEncoderInfo from "./URLEncoderInfo";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";


export default function URLEncoderPage() {
  return (
    <ToolLayout title={<URLEncoderHeader />}>
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <URLEncoderClient />
      {/* Educational content */}
      <URLEncoderInfo />
      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
