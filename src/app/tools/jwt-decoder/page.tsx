import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import JWTDecoderClient from "./JWTDecoderClient";
import JWTDecoderHeader from "./JWTDecoderHeader";
import JWTDecoderInfo from "./JWTDecoderInfo";

export const metadata = {
  title: "JWT Decoder – Free Online JSON Web Token Decoder",
  description:
    "Decode JWT tokens instantly with this free online JWT decoder. View header and payload data securely in your browser.",
};

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
