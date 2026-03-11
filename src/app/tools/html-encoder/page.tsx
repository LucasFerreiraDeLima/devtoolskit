import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import HTMLEncoderClient from "./HTMLEncoderClient";
import HTMLEncoderHeader from "./HTMLEncoderHeader";
import HTMLEncoderInfo from "./HTMLEncoderInfo";

export const metadata = {
  title: "HTML Encoder & Decoder – Free Online HTML Entity Converter",
  description:
    "Encode and decode HTML entities instantly with this free online HTML encoder and decoder. Convert special characters safely for web development.",
};

export default function HTMLEncoderPage() {
  return (
    <ToolLayout title={<HTMLEncoderHeader />}>
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <HTMLEncoderClient />
      {/* Educational content */}
      <HTMLEncoderInfo />
      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
