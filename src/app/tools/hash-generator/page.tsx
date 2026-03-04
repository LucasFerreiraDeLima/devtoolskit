import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import HashGeneratorClient from "./HashGeneratorClient";

export const metadata = {
  title: "Hash Generator – MD5, SHA1 and SHA256 Online Tool",
  description:
    "Generate MD5, SHA1 and SHA256 hashes instantly with this free online hash generator. Fast, secure and runs entirely in your browser.",
};

export default function HashGeneratorPage() {
  return (
    <ToolLayout
      title="Hash Generator"
      description="Generate MD5, SHA1 and SHA256 hashes instantly. Fast, secure and runs entirely in your browser."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <HashGeneratorClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a cryptographic hash?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A cryptographic hash is a function that converts data into a fixed-size string of characters, which is typically a hexadecimal value. Hashes are designed to be irreversible and unique for different inputs.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">What are MD5, SHA1 and SHA256?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            MD5, SHA1 and SHA256 are popular hash algorithms used to generate unique fingerprints for data. SHA256 is considered the most secure among them for modern applications.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Common uses of hash functions</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Verifying file integrity</li>
            <li>Storing passwords securely</li>
            <li>Digital signatures</li>
            <li>Data deduplication</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of hashing text</h2>
            <p className="text-slate-700 dark:text-slate-300">
              Hashing the text "hello" with SHA256 produces:
              <code
                className="block mt-2 text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded-md overflow-x-auto break-words whitespace-pre-wrap"
                style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}
              >
                2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
              </code>
            </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why developers use hash generators</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Hash generators are useful for quickly creating hashes for passwords, files, or other data, and for verifying integrity or uniqueness.
          </p>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
