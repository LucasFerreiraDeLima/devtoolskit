import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import TextSorterClient from "./TextSorterClient";

export const metadata = {
  title: "Text Sorter – Sort Lines of Text Online",
  description:
    "Sort lines of text instantly with this free online text sorter. Sort alphabetically or by length quickly in your browser.",
};

export default function TextSorterPage() {
  return (
    <ToolLayout
      title="Text Sorter"
      description="Sort lines of text instantly. Sort alphabetically or by length quickly in your browser."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <TextSorterClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a text sorter?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A text sorter is a tool that helps you organize lines of text by sorting them alphabetically or by length. It is useful for lists, data, or any text that needs to be ordered.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to sort lines of text</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Paste your text, choose a sorting method, and click "Sort Text". The sorted result will appear instantly.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Alphabetical sorting explained</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Alphabetical sorting arranges lines from A to Z or Z to A, making it easy to find or organize items in a list.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Sorting text by length</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Sorting by length orders lines from shortest to longest or vice versa, which is useful for analyzing or formatting data.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of sorted text</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Input: banana, apple, orange</li>
            <li>Sorted A → Z: apple, banana, orange</li>
            <li>Sorted by length: apple, orange, banana</li>
          </ul>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
