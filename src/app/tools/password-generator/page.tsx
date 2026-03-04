import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import PasswordGeneratorClient from "./PasswordGeneratorClient";

export const metadata = {
  title: "Password Generator – Free Secure Password Generator",
  description:
    "Generate secure random passwords instantly with this free online password generator. Customize length, symbols, numbers and letters.",
};

export default function PasswordGeneratorPage() {
  return (
    <ToolLayout
      title="Password Generator"
      description="Generate secure random passwords instantly. Customize length, symbols, numbers and letters."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <PasswordGeneratorClient />

      // ...existing code...

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a secure password?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A secure password is a random string of characters that is difficult to guess or crack. It typically includes a mix of uppercase, lowercase, numbers, and symbols.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why strong passwords are important</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Strong passwords protect your accounts and data from unauthorized access and cyber attacks. Using unique passwords for each account is recommended.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How password generators work</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Password generators create random passwords using a pool of characters based on your selected options. This ensures your password is unpredictable and secure.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Tips for creating strong passwords</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Use at least 12 characters</li>
            <li>Include uppercase, lowercase, numbers, and symbols</li>
            <li>Avoid common words and patterns</li>
            <li>Never reuse passwords across accounts</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of secure passwords</h2>
          <p className="text-slate-700 dark:text-slate-300">
            <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">G7!kP@2z#Qw8</span>, <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">bX$9vL&1rT@5</span>
          </p>
        </article>
      </section>

      // ...existing code...
    </ToolLayout>
  );
}
