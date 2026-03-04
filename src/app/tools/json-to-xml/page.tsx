import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import JSONToXMLClient from "./JSONToXMLClient";

export const metadata = {
  title: "JSON to XML Converter – Free Online JSON to XML Tool",
  description:
    "Convert JSON to XML instantly with this free online JSON to XML converter. Fast, secure and runs entirely in your browser.",
};

export default function JSONToXMLPage() {
  return (
    <ToolLayout
      title="JSON to XML Converter"
      description="Convert JSON to XML instantly. Fast, secure and runs entirely in your browser."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <JSONToXMLClient />

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
          <h2 className="text-xl font-bold mb-2">What is XML?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            XML (eXtensible Markup Language) is a markup language designed to store and transport data. It uses custom tags to describe data structure and is widely used for configuration, data exchange, and web services.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to convert JSON to XML</h2>
          <p className="text-slate-700 dark:text-slate-300">
            To convert JSON to XML, parse the JSON and recursively build XML nodes for each key and value. Objects become elements, arrays become repeated elements, and primitive values become text nodes.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">When developers need JSON to XML conversion</h2>
          <p className="text-slate-700 dark:text-slate-300">
            JSON to XML conversion is useful when integrating with legacy systems, APIs, or tools that require XML input, or when exporting data for configuration or interoperability.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Example JSON to XML conversion</h2>
          <pre className="bg-slate-100 dark:bg-slate-800 rounded p-4 text-sm overflow-x-auto text-slate-800 dark:text-slate-200">
{`JSON:
{
  "name": "John",
  "age": 30
}

XML:
<root>
  <name>John</name>
  <age>30</age>
</root>`}
          </pre>
        </article>
        <article>
          <div className="mt-4 text-sm text-sky-700 dark:text-sky-300">
            Try our other tools:{" "}
            <Link href="/tools/word-counter" className="underline hover:text-sky-600">Word Counter</Link>
            {", "}
            <Link href="/tools/case-converter" className="underline hover:text-sky-600">Case Converter</Link>
            {", "}
            <Link href="/tools/base64" className="underline hover:text-sky-600">Base64 Encode / Decode</Link>
            {", "}
            <Link href="/tools/timestamp-converter" className="underline hover:text-sky-600">Timestamp Converter</Link>
            {", "}
            <Link href="/tools/uuid-generator" className="underline hover:text-sky-600">UUID Generator</Link>
            {", "}
            <Link href="/tools/json-formatter" className="underline hover:text-sky-600">JSON Formatter</Link>
            {", "}
            <Link href="/tools/json-to-csv" className="underline hover:text-sky-600">JSON to CSV Converter</Link>
          </div>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
