import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import TextDiffClient from "./TextDiffClient";
import TextDiffHeader from "./TextDiffHeader";
import TextDiffInfo from "./TextDiffInfo";

export const metadata = {
  title: "Text Diff Checker – Compare Text Online",
  description:
    "Compare two blocks of text and highlight differences instantly with this free online text diff checker.",
};

export default function TextDiffPage() {
  return (
    <ToolLayout title={<TextDiffHeader />}>
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      {/* Tool interface */}
      <TextDiffClient />
      {/* Educational content */}
      <TextDiffInfo />
    </ToolLayout>
  );
}
