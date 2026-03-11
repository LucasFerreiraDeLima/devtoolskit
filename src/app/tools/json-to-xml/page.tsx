import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import JSONToXMLClient from "./JSONToXMLClient";
import JSONToXMLHeader from "./JSONToXMLHeader";
import JSONToXMLInfo from "./JSONToXMLInfo";
import Link from "next/link";

export const metadata = {
  title: "JSON to XML Converter – Free Online JSON to XML Tool",
  description:
    "Convert JSON to XML instantly with this free online JSON to XML converter. Fast, secure and runs entirely in your browser.",
};

export default function JSONToXMLPage() {
  return (
    <ToolLayout
      title={<JSONToXMLHeader />}
      description="Convert JSON data to XML format instantly."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <JSONToXMLClient />
      {/* Info section */}
      <JSONToXMLInfo />
      <AdPlaceholder />
    </ToolLayout>
  );
}
