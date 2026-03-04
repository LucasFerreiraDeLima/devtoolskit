import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import TextDiffClient from "./TextDiffClient";

export const metadata = {
  title: "Text Diff Checker – Compare Text Online",
  description:
    "Compare two blocks of text and highlight differences instantly with this free online text diff checker.",
};

export default function TextDiffPage() {
  return (
    <ToolLayout
      title="Text Diff Checker"
      description="Compare two blocks of text and highlight differences instantly."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <TextDiffClient />

      // ...existing code...

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a text diff checker?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A text diff checker is a tool that compares two blocks of text and highlights the differences between them. It helps you spot changes, additions, and removals easily.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How text comparison works</h2>
          <p className="text-slate-700 dark:text-slate-300">
            The tool compares each line of the original and modified text, highlighting added, removed, and changed lines for easy review.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Common uses of diff tools</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Code review</li>
            <li>Document editing</li>
            <li>Tracking changes</li>
            <li>Comparing versions</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of comparing text changes</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Compare two versions of a document to see what was added, removed, or changed.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why developers use diff tools</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Diff tools are essential for tracking changes in code, documents, and data, making collaboration and version control easier.
          </p>
        </article>
      </section>

      // ...existing code...
    </ToolLayout>
  );
}
