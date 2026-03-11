import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import JSONToCSVClient from "./JSONToCSVClient";
import JSONToCSVHeader from "./JSONToCSVHeader";
import JSONToCSVInfo from "./JSONToCSVInfo";

export const metadata = {
  title: "JSON to CSV Converter – Free Online JSON to CSV Tool",
  description:
    "Convert JSON data into CSV format instantly with this free online JSON to CSV converter. Fast, secure and runs entirely in your browser.",
};

export default function JSONToCSVPage() {
  return (
    <ToolLayout
      title={<JSONToCSVHeader />}
      description="Convert JSON arrays of objects to CSV format instantly."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <JSONToCSVClient />
      {/* Info section */}
      <JSONToCSVInfo />
      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>
    </ToolLayout>
  );
}
