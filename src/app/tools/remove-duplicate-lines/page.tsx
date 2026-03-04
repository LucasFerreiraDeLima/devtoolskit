import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import RemoveDuplicateLinesClient from "./RemoveDuplicateLinesClient";

export const metadata = {
  title: "Remove Duplicate Lines – Free Online Text Cleaner",
  description:
    "Remove duplicate lines from text instantly with this free online tool. Clean your text while preserving the original order.",
};

export default function RemoveDuplicateLinesPage() {
  return (
    <ToolLayout
      title="Remove Duplicate Lines"
      description="Remove duplicate lines from text instantly. Clean your text while preserving the original order."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <RemoveDuplicateLinesClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What are duplicate lines in text?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Duplicate lines are repeated entries in a block of text. Removing them helps clean up lists, data, or any text where uniqueness is important.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why remove duplicate lines?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Removing duplicates makes text easier to read, analyze, and process. It is useful for cleaning lists, preparing data, or avoiding redundancy.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How duplicate removal works</h2>
          <p className="text-slate-700 dark:text-slate-300">
            The tool compares each line and removes repeated entries, keeping only the first occurrence. You can choose case sensitive or insensitive comparison.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of duplicate lines</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Input: apple, banana, apple, orange, banana</li>
            <li>Output: apple, banana, orange</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Common uses of text cleaning tools</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Cleaning up lists</li>
            <li>Preparing data for analysis</li>
            <li>Removing redundancy</li>
          </ul>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
