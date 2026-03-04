import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import URLEncoderClient from "./URLEncoderClient";

export const metadata = {
  title: "URL Encoder & Decoder – Free Online URL Encoding Tool",
  description:
    "Encode and decode URLs instantly with this free online URL encoder and decoder. Fast, secure and runs entirely in your browser.",
};

export default function URLEncoderPage() {
  return (
    <ToolLayout
      title="URL Encoder / Decoder"
      description="Encode and decode URLs instantly. Fast, secure and runs entirely in your browser."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <URLEncoderClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is URL encoding?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            URL encoding is a method of converting characters into a format that can be transmitted over the Internet. It replaces unsafe ASCII characters with a '%' followed by two hexadecimal digits.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why URL encoding is needed</h2>
          <p className="text-slate-700 dark:text-slate-300">
            URLs often contain characters that are not valid in certain contexts, such as spaces or special symbols. Encoding ensures URLs are safely transmitted and interpreted by web servers and browsers.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to encode a URL</h2>
          <p className="text-slate-700 dark:text-slate-300">
            To encode a URL, use the <code>encodeURIComponent</code> function in JavaScript. This replaces unsafe characters with their encoded equivalents.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to decode URL parameters</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Decoding reverses the encoding process, converting encoded characters back to their original form using <code>decodeURIComponent</code>.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of encoded URLs</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Space: <code>%20</code></li>
            <li>Exclamation mark: <code>%21</code></li>
            <li>At symbol: <code>%40</code></li>
            <li>Hash: <code>%23</code></li>
          </ul>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
