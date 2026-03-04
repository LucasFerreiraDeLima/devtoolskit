import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import HTMLEncoderClient from "./HTMLEncoderClient";

export const metadata = {
  title: "HTML Encoder & Decoder – Free Online HTML Entity Converter",
  description:
    "Encode and decode HTML entities instantly with this free online HTML encoder and decoder. Convert special characters safely for web development.",
};

export default function HTMLEncoderPage() {
  return (
    <ToolLayout
      title="HTML Encoder / Decoder"
      description="Encode and decode HTML entities instantly. Convert special characters safely for web development."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <HTMLEncoderClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is HTML encoding?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            HTML encoding is the process of converting special characters into HTML entities so they can be safely displayed in web pages without being interpreted as code.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why HTML entities are used</h2>
          <p className="text-slate-700 dark:text-slate-300">
            HTML entities prevent browsers from misinterpreting special characters as HTML tags or code, protecting content and improving security.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How HTML encoding protects web pages</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Encoding special characters helps prevent cross-site scripting (XSS) attacks and ensures that user input is displayed safely.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of HTML encoded characters</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>&lt; becomes <code>&amp;lt;</code></li>
            <li>&gt; becomes <code>&amp;gt;</code></li>
            <li>&amp; becomes <code>&amp;amp;</code></li>
            <li>&quot; becomes <code>&amp;quot;</code></li>
            <li>&apos; becomes <code>&amp;apos;</code></li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">When developers use HTML encoding</h2>
          <p className="text-slate-700 dark:text-slate-300">
            HTML encoding is used when displaying user-generated content, storing data, or preventing code injection in web applications.
          </p>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
