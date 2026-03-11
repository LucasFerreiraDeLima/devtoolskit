import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import TimestampConverterClient from "./TimestampConverterClient";
import TimestampConverterHeader from "./TimestampConverterHeader";
import TimestampConverterInfo from "./TimestampConverterInfo";

export const metadata = {
  title: "Unix Timestamp Converter – Convert Timestamp to Date Online",
  description:
    "Free online Unix timestamp converter. Convert timestamps to human-readable dates and convert dates back to Unix timestamps instantly.",
};

export default function Page() {
  return (
    <ToolLayout
      title={<TimestampConverterHeader />}
      description="Convert Unix timestamps to dates and vice versa instantly."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <TimestampConverterClient />
      {/* Info section */}
      <TimestampConverterInfo />
      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>
    </ToolLayout>
  );
}
