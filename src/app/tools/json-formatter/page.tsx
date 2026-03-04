
import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import DropdownMenu from "../../components/DropdownMenu";
import JSONFormatterClient from "./JSONFormatterClient";


export const metadata = {
  title: "JSON Formatter & Validator – Free Online JSON Beautifier",
  description:
    "Format, validate and minify JSON instantly with this free online JSON formatter. Fast, secure and runs entirely in your browser.",
};


export default function JSONFormatterPage() {
  return (
    <ToolLayout
      title="JSON Formatter & Validator"
      description="Format, validate and minify JSON instantly. Fast, secure and runs entirely in your browser."
    >
      {/* ...removido nav e barra superior... */}

      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <JSONFormatterClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is JSON?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is widely used for transmitting data in web applications.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">What does a JSON formatter do?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A JSON formatter beautifies raw JSON data, making it easier to read and debug. It also helps validate and minify JSON for efficient storage and transmission.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to validate JSON</h2>
          <p className="text-slate-700 dark:text-slate-300">
            To validate JSON, simply parse it using a tool or code. If parsing succeeds, the JSON is valid. If it fails, an error message will indicate the problem.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to format JSON</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Formatting JSON means adding indentation and line breaks to make the data structure clear. Use the Format button above to beautify your JSON instantly.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of formatted JSON</h2>
          <pre className="bg-slate-100 dark:bg-slate-800 rounded p-4 text-sm overflow-x-auto text-slate-800 dark:text-slate-200">
{`{
  "name": "John Doe",
  "age": 30,
  "isDeveloper": true,
  "skills": ["JavaScript", "TypeScript", "React"]
}`}
          </pre>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
