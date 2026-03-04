import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import ColorConverterClient from "./ColorConverterClient";

export const metadata = {
  title: "Color Converter – HEX, RGB and HSL Color Converter",
  description:
    "Convert colors between HEX, RGB and HSL instantly with this free online color converter. Perfect for web developers and designers.",
};

export default function ColorConverterPage() {
  return (
    <ToolLayout
      title="Color Converter"
      description="Convert colors between HEX, RGB and HSL instantly."
    >
      {/* Ad abaixo do título */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <ColorConverterClient />

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is HEX color?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            HEX color is a six-digit code representing a color in hexadecimal format, commonly used in web design. Example: <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">#ff0000</span> for red.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">What is RGB color?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            RGB stands for Red, Green, Blue. Colors are defined by their intensity values, e.g., <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">rgb(255, 0, 0)</span> for red.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">What is HSL color?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            HSL stands for Hue, Saturation, Lightness. Example: <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">hsl(0, 100%, 50%)</span> for red.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How color conversion works</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Color conversion uses mathematical formulas to translate values between HEX, RGB, and HSL formats, ensuring accurate color representation.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of color conversions</h2>
          <p className="text-slate-700 dark:text-slate-300">
            <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">#00ff00</span> → <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">rgb(0, 255, 0)</span> → <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">hsl(120, 100%, 50%)</span>
          </p>
        </article>
      </section>
    </ToolLayout>
  );
}
