import AdPlaceholder from "@/app/components/AdPlaceholder";
import ToolLayout from "../../components/ToolLayout";
import WordCounterClient from "./WordCounterClient";

export const metadata = {
  title: "Word Counter – Free Online Character and Word Count Tool",
  description:
    "Count words, characters, lines and paragraphs instantly with our free online word counter.",
};

export default function WordCounterPage() {
  return (
    <ToolLayout
      title="Word Counter"
      description="Count words, characters, lines and paragraphs instantly."
    >
      {/* Ad abaixo do título */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      <WordCounterClient />
    </ToolLayout>
  );
}
