import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import RandomNumberClient from "./RandomNumberClient";

export const metadata = {
  title: "Random Number Generator – Generate Random Numbers Online",
  description:
    "Generate random numbers instantly with this free online random number generator. Choose a range and generate single or multiple numbers.",
};

export default function RandomNumberPage() {
  return (
    <ToolLayout
      title="Random Number Generator"
      description="Generate random numbers instantly. Choose a range and generate single or multiple numbers."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <RandomNumberClient />

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a random number generator?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A random number generator is a tool that produces numbers chosen at random within a specified range. It is used in games, simulations, cryptography, and more.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How random numbers are generated</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Most online generators use algorithms to produce pseudo-random numbers. For most purposes, these are sufficiently unpredictable and useful.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Uses of random numbers</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Games and lotteries</li>
            <li>Simulations and modeling</li>
            <li>Security and cryptography</li>
            <li>Testing and sampling</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of random number generation</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Generate a number between 1 and 100 for a contest, or pick 5 random numbers for a lottery ticket.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Why developers and users need random numbers</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Random numbers are essential for fair games, secure passwords, unbiased sampling, and more.
          </p>
        </article>
      </section>
    </ToolLayout>
  );
}
