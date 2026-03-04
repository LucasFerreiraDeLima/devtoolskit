import ToolLayout from "../../components/ToolLayout";
import AdPlaceholder from "../../components/AdPlaceholder";
import Link from "next/link";
import JWTDecoderClient from "./JWTDecoderClient";

export const metadata = {
  title: "JWT Decoder – Free Online JSON Web Token Decoder",
  description:
    "Decode JWT tokens instantly with this free online JWT decoder. View header and payload data securely in your browser.",
};

export default function JWTDecoderPage() {
  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode JWT tokens instantly. View header and payload data securely in your browser."
    >
      {/* Ad below title */}
      <div className="mb-6">
        <AdPlaceholder />
      </div>

      {/* Tool interface */}
      <JWTDecoderClient />

      {/* Ad below tool interface */}
      <div className="mb-8">
        <AdPlaceholder />
      </div>

      {/* SEO/Educational content */}
      <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
        <article>
          <h2 className="text-xl font-bold mb-2">What is a JSON Web Token (JWT)?</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and information exchange in web applications.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">JWT structure explained</h2>
          <p className="text-slate-700 dark:text-slate-300">
            A JWT consists of three parts: header, payload, and signature. The header and payload are Base64URL encoded JSON objects, while the signature is used to verify the token's integrity.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How JWT authentication works</h2>
          <p className="text-slate-700 dark:text-slate-300">
            JWTs are used to securely transmit information between parties. After authentication, a server issues a JWT to the client, which can then be used to access protected resources.
          </p>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">Common uses of JWT tokens</h2>
          <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Authentication and authorization</li>
            <li>Session management</li>
            <li>Information exchange</li>
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-bold mb-2">How to decode JWT tokens</h2>
          <p className="text-slate-700 dark:text-slate-300">
            To decode a JWT, split the token into its three parts, Base64URL decode the header and payload, and parse them as JSON. The signature is used for verification but is not decoded here.
          </p>
        </article>
      </section>

      {/* Ad near bottom */}
      <AdPlaceholder />
    </ToolLayout>
  );
}
