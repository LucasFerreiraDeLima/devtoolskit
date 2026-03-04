"use client";
import { useState } from "react";

function base64UrlDecode(str: string): string {
  // Replace base64url chars with base64 chars
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  // Pad with '='
  while (base64.length % 4) base64 += "=";
  // Decode
  try {
    return atob(base64);
  } catch {
    return "";
  }
}

function formatJson(obj: any): string {
  return JSON.stringify(obj, null, 2);
}

function parseJwt(token: string): { header?: any; payload?: any; error?: string } {
  try {
    const parts = token.split(".");
    if (parts.length < 2) return { error: "JWT must have at least header and payload." };
    const headerJson = base64UrlDecode(parts[0]);
    const payloadJson = base64UrlDecode(parts[1]);
    const header = JSON.parse(headerJson);
    const payload = JSON.parse(payloadJson);
    return { header, payload };
  } catch (e: any) {
    return { error: "Invalid JWT or malformed Base64/JSON." };
  }
}

function formatTimestamp(ts?: number): string | null {
  if (!ts) return null;
  try {
    const date = new Date(ts * 1000);
    return date.toLocaleString();
  } catch {
    return null;
  }
}

export default function JWTDecoderClient() {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState<string>("");
  const [payload, setPayload] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [copiedHeader, setCopiedHeader] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  function handleDecode() {
    setError(null);
    setCopiedHeader(false);
    setCopiedPayload(false);
    const result = parseJwt(input.trim());
    if (result.error) {
      setError(result.error);
      setHeader("");
      setPayload("");
      return;
    }
    setHeader(formatJson(result.header));
    setPayload(formatJson(result.payload));
  }

  function handleClear() {
    setInput("");
    setHeader("");
    setPayload("");
    setError(null);
    setCopiedHeader(false);
    setCopiedPayload(false);
  }

  function handleCopyHeader() {
    if (header) {
      navigator.clipboard.writeText(header);
      setCopiedHeader(true);
      setTimeout(() => setCopiedHeader(false), 1500);
    }
  }

  function handleCopyPayload() {
    if (payload) {
      navigator.clipboard.writeText(payload);
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 1500);
    }
  }

  // Extract common JWT fields
  let exp, iat, sub, expDate, iatDate;
  try {
    const payloadObj = payload ? JSON.parse(payload) : null;
    exp = payloadObj?.exp;
    iat = payloadObj?.iat;
    sub = payloadObj?.sub;
    expDate = formatTimestamp(exp);
    iatDate = formatTimestamp(iat);
  } catch {}

  return (
    <div className="space-y-8">
      <div>
        <label htmlFor="jwt-input" className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">JWT Token</label>
        <textarea
          id="jwt-input"
          className="w-full min-h-[80px] sm:min-h-[120px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl resize-vertical bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste your JWT token here..."
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleDecode}>Decode Token</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>Clear</button>
      </div>
      {error && (
        <div className="text-red-700 dark:text-red-400 font-medium border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900 rounded-xl p-4 mt-2 animate-shake">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Header</label>
          <pre className="w-full min-h-[80px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 whitespace-pre-wrap break-words">{header || "Decoded header will appear here..."}</pre>
          <button
            type="button"
            className={`px-5 py-2 mt-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${!header ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleCopyHeader}
            disabled={!header}
          >
            {copiedHeader ? "Copied!" : "Copy Header"}
          </button>
        </div>
        <div>
          <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Payload</label>
          <pre className="w-full min-h-[80px] p-4 border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-sm text-slate-900 dark:text-slate-100 whitespace-pre-wrap break-words">{payload || "Decoded payload will appear here..."}</pre>
          <button
            type="button"
            className={`px-5 py-2 mt-3 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${!payload ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleCopyPayload}
            disabled={!payload}
          >
            {copiedPayload ? "Copied!" : "Copy Payload"}
          </button>
          {(exp || iat || sub) && (
            <div className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-1">
              {exp && <div><span className="font-bold">exp:</span> {exp} {expDate && <span>({expDate})</span>}</div>}
              {iat && <div><span className="font-bold">iat:</span> {iat} {iatDate && <span>({iatDate})</span>}</div>}
              {sub && <div><span className="font-bold">sub:</span> {sub}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
