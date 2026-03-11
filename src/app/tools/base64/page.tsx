

import Base64Client from "./Base64Client";
import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Base64Info from "./Base64Info";
import Base64Header from "./Base64Header";

export const metadata = {
  title: "Base64 Encode & Decode – Free Online Base64 Converter",
  description:
    "Encode text to Base64 or decode Base64 instantly with this free online tool. Fast, secure and works entirely in your browser.",
};

export default function Base64Page() {
  return (
    <ToolLayout
      title={<Base64Header />}
    >
      {/* Ad below title, mobile-friendly */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <Base64Client />
      {/* Educational content */}
      <Base64Info />
      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
        
