import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import UUIDGeneratorClient from "./UUIDGeneratorClient";
import UUIDGeneratorHeader from "./UUIDGeneratorHeader";
import UUIDGeneratorInfo from "./UUIDGeneratorInfo";

export const metadata = {
  title: "UUID Generator – Free Online UUID v4 Generator",
  description:
    "Generate UUID v4 identifiers instantly with this free online UUID generator. Perfect for developers needing unique identifiers for databases, APIs and testing.",
};

export default function UUIDGeneratorPage() {
  return (
    <ToolLayout title={<UUIDGeneratorHeader />} description="Generate UUID v4 identifiers instantly for development and testing.">
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      <UUIDGeneratorClient />
      <hr className="my-8" />
      <UUIDGeneratorInfo />
      <div className="mb-8 mt-8">
        <AdPlaceholder />
      </div>
    </ToolLayout>
  );
}
