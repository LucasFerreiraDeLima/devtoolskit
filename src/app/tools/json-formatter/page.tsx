
import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import JSONFormatterClient from "./JSONFormatterClient";
import JSONFormatterHeader from "./JSONFormatterHeader";
import JSONFormatterInfo from "./JSONFormatterInfo";

export const metadata = {
  title: "JSON Formatter & Validator – Free Online JSON Beautifier",
  description:
    "Format, validate and minify JSON instantly with this free online JSON formatter. Fast, secure and runs entirely in your browser.",
};

export default function JSONFormatterPage() {
  return (
    <ToolLayout
      title={<JSONFormatterHeader />}
      description="Format, validate and minify JSON instantly in your browser."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <JSONFormatterClient />
      {/* Info section */}
      <JSONFormatterInfo />
      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>
    </ToolLayout>
  );
}
