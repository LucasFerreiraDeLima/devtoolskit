import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import TextSorterClient from "./TextSorterClient";
import TextSorterHeader from "./TextSorterHeader";
import TextSorterInfo from "./TextSorterInfo";

export const metadata = {
  title: "Text Sorter – Sort Lines of Text Online",
  description:
    "Sort lines of text instantly with this free online text sorter. Sort alphabetically or by length quickly in your browser.",
};

export default function TextSorterPage() {
  return (
    <ToolLayout title={<TextSorterHeader />} description="Sort lines of text alphabetically or by length instantly in your browser.">
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      <TextSorterClient />
      <hr className="my-8" />
      <TextSorterInfo />
      <div className="mb-8 mt-8">
        <AdPlaceholder />
      </div>
    </ToolLayout>
  );
}
