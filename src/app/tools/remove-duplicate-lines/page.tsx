import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import RemoveDuplicateLinesClient from "./RemoveDuplicateLinesClient";
import RemoveDuplicateLinesHeader from "./RemoveDuplicateLinesHeader";
import RemoveDuplicateLinesInfo from "./RemoveDuplicateLinesInfo";

export const metadata = {
  title: "Remove Duplicate Lines – Free Online Text Cleaner",
  description:
    "Remove duplicate lines from text instantly with this free online tool. Clean your text while preserving the original order.",
};

export default function RemoveDuplicateLinesPage() {
  return (
    <ToolLayout
      title={<RemoveDuplicateLinesHeader />}
      description="Remove duplicate lines from text instantly in your browser."
    >
      <div className="mb-6">
        <AdPlaceholder />
      </div>
      <RemoveDuplicateLinesClient />
      <hr className="my-8" />
      <RemoveDuplicateLinesInfo />
      <div className="mb-8 mt-8">
        <AdPlaceholder />
      </div>
    </ToolLayout>
  );
}
