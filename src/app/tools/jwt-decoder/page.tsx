import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import JWTDecoderClient from "./JWTDecoderClient";
import JWTDecoderHeader from "./JWTDecoderHeader";
import JWTDecoderInfo from "./JWTDecoderInfo";
import { getServerTranslation } from "../../../utils/getServerTranslation";

export async function generateMetadata({ params, locale }: { params: any; locale?: string }) {
  const t = getServerTranslation(locale || "en");
  const title = `${t.jwtDecoder_label || t.jwtDecoder_label} – ${t.jwtDecoder_desc || t.jwtDecoder_label}`;
  return {
    title,
    description: t.jwtDecoder_desc || "",
    alternates: {
      languages: {
        en: "/tools/jwt-decoder",
        pt: "/pt/tools/jwt-decoder",
        es: "/es/tools/jwt-decoder",
      },
    },
  };
}

export default function JWTDecoderPage() {
  return (
    <ToolLayout
      title={<JWTDecoderHeader />}
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <JWTDecoderClient />

      {/* Info section */}
      <JWTDecoderInfo />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* Info section already rendered above */}
      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
