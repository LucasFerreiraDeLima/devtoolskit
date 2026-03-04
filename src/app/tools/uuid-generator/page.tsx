import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import UUIDGeneratorClient from "./UUIDGeneratorClient";

export const metadata = {
  title: "UUID Generator – Free Online UUID v4 Generator",
  description:
    "Generate UUID v4 identifiers instantly with this free online UUID generator. Perfect for developers needing unique identifiers for databases, APIs and testing.",
};

export default function UUIDGeneratorPage() {
  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate UUID v4 identifiers instantly for development and testing."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <UUIDGeneratorClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a UUID?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A UUID (Universally Unique Identifier) is a 128-bit value used to uniquely identify information in computer systems. UUIDs are widely used in databases, distributed systems, and APIs to ensure uniqueness.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">What is UUID v4?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            UUID version 4 (v4) is generated using random numbers, making it highly unlikely for two UUIDs to ever collide. The format is standardized and looks like: <span className="font-mono">xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx</span>.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How UUIDs are used in software development</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Database primary keys</li>
            <li>API resource identifiers</li>
            <li>Session and token generation</li>
            <li>Distributed systems and microservices</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of UUID usage</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>
              <span className="font-mono">550e8400-e29b-41d4-a716-446655440000</span> (example UUID)
            </li>
            <li>
              <span className="font-mono">f47ac10b-58cc-4372-a567-0e02b2c3d479</span> (example UUID)
            </li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why developers use UUID generators</h2>
          <p className="text-slate-700 dark:text-slate-300">
            UUID generators help developers quickly create unique identifiers for testing, prototyping, and production use, ensuring no accidental collisions.
          </p>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
