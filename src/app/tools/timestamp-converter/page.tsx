import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import TimestampConverterClient from "./TimestampConverterClient";
import Link from "next/link";

export const metadata = {
  title: "Unix Timestamp Converter – Convert Timestamp to Date Online",
  description:
    "Free online Unix timestamp converter. Convert timestamps to human-readable dates and convert dates back to Unix timestamps instantly.",
};

export default function Page() {
  return (
    <ToolLayout
      title="Unix Timestamp Converter"
      description="Convert Unix timestamps to human-readable dates and convert dates back to Unix timestamps instantly."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <TimestampConverterClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a Unix Timestamp?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A Unix timestamp is a numeric representation of a specific moment in time, measured as the number of seconds since January 1, 1970 (the Unix epoch). It is widely used in programming and databases for date and time calculations.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to convert a timestamp to a date</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Enter a Unix timestamp and click <strong>Convert Timestamp to Date</strong>. The tool will display the corresponding date and time in UTC.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to generate a Unix timestamp</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Enter a date and time, then click <strong>Convert Date to Timestamp</strong>. The tool will show the Unix timestamp for that moment.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Common uses of timestamps in programming</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Storing and comparing dates in databases</li>
            <li>Scheduling events and tasks</li>
            <li>Logging and auditing</li>
            <li>APIs and data exchange</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of timestamp conversion</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>
              <span className="font-mono">1709596800</span> → <span className="font-mono">2024-03-05 00:00:00 (UTC)</span>
            </li>
            <li>
              <span className="font-mono">2024-03-05 00:00:00</span> → <span className="font-mono">1709596800</span>
            </li>
          </ul>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
