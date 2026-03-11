import AdPlaceholder from "@/app/components/AdPlaceholder";
import ToolLayout from "../../components/ToolLayout";
import WordCounterClient from "./WordCounterClient";
import WordCounterHeader from "./WordCounterHeader";
import WordCounterInfo from "./WordCounterInfo";

export const metadata = {
  title: "Word Counter – Free Online Character and Word Count Tool",
  description:
    "Count words, characters, lines and paragraphs instantly with our free online word counter.",
};

export default function WordCounterPage() {
  return (
    <ToolLayout title={<WordCounterHeader />}>
      {/* Ad abaixo do título */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      <WordCounterClient />

      <WordCounterInfo />
    </ToolLayout>
  );
}
