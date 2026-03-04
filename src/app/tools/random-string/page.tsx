import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import RandomStringClient from "./RandomStringClient";

export const metadata = {
  title: "Random String Generator – Generate Random Strings Online",
  description:
    "Generate random strings instantly with this free online random string generator. Customize length, characters, numbers and symbols.",
};

export default function RandomStringPage() {
  return (
    <ToolLayout
      title="Random String Generator"
      description="Generate random strings instantly. Customize length, characters, numbers and symbols."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <RandomStringClient />

      // ...existing code...

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a random string generator?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A random string generator creates strings of characters chosen at random, useful for testing, tokens, IDs, and more.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How random strings are used in development</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Random strings are used for generating unique IDs, API keys, session tokens, and test data in software development.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of random strings</h2>
          <p className="text-slate-700 dark:text-slate-300">
            <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">aB7!kP2z#Qw8</span>, <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">bX$9vL&1rT@5</span>
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Uses for random strings in testing and APIs</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Test data generation</li>
            <li>API keys and tokens</li>
            <li>Session identifiers</li>
            <li>Unique file names</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How secure random strings are generated</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Secure random strings use cryptographic functions like <span className="font-mono">crypto.getRandomValues()</span> to ensure unpredictability.
          </p>
        </article>
      </section>

      // ...existing code...
    </ToolLayout>
  );
}
