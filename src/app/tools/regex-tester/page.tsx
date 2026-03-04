import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import RegexTesterClient from "./RegexTesterClient";

export const metadata = {
  title: "Regex Tester – Free Online Regular Expression Tester",
  description:
    "Test regular expressions instantly with this free online regex tester. Enter a pattern, add flags and see matches highlighted in real time.",
};

export default function RegexTesterPage() {
  return (
    <ToolLayout
      title="Regex Tester"
      description="Test regular expressions instantly. Enter a pattern, add flags and see matches highlighted in real time."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <RegexTesterClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a Regular Expression?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A regular expression (regex) is a sequence of characters that defines a search pattern. It is used for string matching, validation, and text manipulation in many programming languages.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to test regex patterns</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Enter your regex pattern and flags, then paste or type your test text. Click Run Test to see matches highlighted and listed below.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Common regex flags</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li><span className="font-mono">g</span> – global (find all matches)</li>
            <li><span className="font-mono">i</span> – case insensitive</li>
            <li><span className="font-mono">m</span> – multiline</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of regex patterns</h2>
          <pre className="bg-slate-100 dark:bg-slate-800 rounded p-4 text-sm overflow-x-auto text-slate-800 dark:text-slate-200">
{`Pattern: \d+
Matches any sequence of digits

Pattern: ^[A-Za-z]+$
Matches a line with only letters

Pattern: (cat|dog)
Matches either "cat" or "dog"`}
          </pre>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why developers use regex testers</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Regex testers help developers quickly build, debug, and validate regular expressions for use in code, data validation, and text processing.
          </p>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
