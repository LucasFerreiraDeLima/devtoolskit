import Base64Client from "./Base64Client";
import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";

export const metadata = {
  title: "Base64 Encode & Decode – Free Online Base64 Converter",
  description:
    "Encode text to Base64 or decode Base64 instantly with this free online tool. Fast, secure and works entirely in your browser.",
};

// This file must be a server component to export metadata
export default function Page() {
  return (
    <ToolLayout
      title="Base64 Encoder / Decoder"
      description="Encode text to Base64 or decode Base64 instantly with this free online tool."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      {/* Client component only here! */}
      <Base64Client />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is Base64 encoding?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Base64 is a method for encoding binary data as plain text using only ASCII characters. It is commonly used to safely transmit data over media that are designed to handle text, such as email or URLs.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to encode text to Base64</h2>
          <p className="text-slate-700 dark:text-slate-300">
            To encode text to Base64, simply enter your text in the input box and click <strong>Encode to Base64</strong>. The encoded result will appear in the output box.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to decode Base64</h2>
          <p className="text-slate-700 dark:text-slate-300">
            To decode a Base64 string, paste it into the input box and click <strong>Decode Base64</strong>. If the input is valid, the decoded text will be shown in the output box.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Common use cases of Base64</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Embedding images or files in HTML, CSS, or JSON</li>
            <li>Sending binary data in email or web forms</li>
            <li>Storing data in text-based formats</li>
            <li>Encoding credentials for HTTP Basic Authentication</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Examples of Base64 encoding</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>
              <span className="font-mono">hello</span> → <span className="font-mono">aGVsbG8=</span>
            </li>
            <li>
              <span className="font-mono">Base64</span> → <span className="font-mono">QmFzZTY0</span>
            </li>
            <li>
              <span className="font-mono">12345</span> → <span className="font-mono">MTIzNDU=</span>
            </li>
          </ul>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
