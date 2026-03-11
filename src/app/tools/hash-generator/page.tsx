import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import HashGeneratorClient from "./HashGeneratorClient";
import HashGeneratorHeader from "./HashGeneratorHeader";
import HashGeneratorInfo from "./HashGeneratorInfo";

export const metadata = {
  title: "Hash Generator – MD5, SHA1 and SHA256 Online Tool",
  description:
    "Generate MD5, SHA1 and SHA256 hashes instantly with this free online hash generator. Fast, secure and runs entirely in your browser.",
};

export default function HashGeneratorPage() {
  return (
    <ToolLayout
      title={<HashGeneratorHeader />}
      description={"Generate MD5, SHA1 and SHA256 hashes instantly with this free online hash generator. Fast, secure and runs entirely in your browser."}
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <HashGeneratorClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* Info section */}
      <HashGeneratorInfo />

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
