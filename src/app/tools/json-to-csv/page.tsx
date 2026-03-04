import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import JSONToCSVClient from "./JSONToCSVClient";

export const metadata = {
  title: "JSON to CSV Converter – Free Online JSON to CSV Tool",
  description:
    "Convert JSON data into CSV format instantly with this free online JSON to CSV converter. Fast, secure and runs entirely in your browser.",
};

export default function JSONToCSVPage() {
  return (
    <ToolLayout
      title="JSON to CSV Converter"
      description="Convert JSON data into CSV format instantly. Fast, secure and runs entirely in your browser."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <JSONToCSVClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is JSON?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            JSON (JavaScript Object Notation) is a lightweight data format used for data interchange. It is easy for humans to read and write, and easy for machines to parse and generate.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">What is CSV?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            CSV (Comma-Separated Values) is a simple file format used to store tabular data, such as spreadsheets or databases. Each line is a data record, and each record consists of fields separated by commas.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to convert JSON to CSV</h2>
          <p className="text-slate-700 dark:text-slate-300">
            To convert JSON to CSV, the JSON must be an array of objects. The keys of the first object become the CSV headers, and each object is converted to a row of values.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why developers convert JSON to CSV</h2>
          <p className="text-slate-700 dark:text-slate-300">
            CSV is widely supported by spreadsheet programs and databases, making it a convenient format for importing, exporting, and analyzing data.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Example JSON to CSV conversion</h2>
          <pre className="bg-slate-100 dark:bg-slate-800 rounded p-4 text-sm overflow-x-auto text-slate-800 dark:text-slate-200">
{`JSON:
[
  { "name": "John", "age": 30 },
  { "name": "Jane", "age": 25 }
]

CSV:
name,age
John,30
Jane,25`}
          </pre>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
