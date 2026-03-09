"use client";
import { useState } from "react";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) hex = hex.split("").map(x => x + x).join("");
  if (!/^([A-Fa-f0-9]{6})$/.test(hex)) return null;
  const num = parseInt(hex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function parseRgb(str: string): { r: number; g: number; b: number } | null {
  // Accepts only numbers and commas, e.g. 255,66,6
  const match = str.match(/^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*$/);
  if (!match) return null;
  const r = Number(match[1]), g = Number(match[2]), b = Number(match[3]);
  if ([r, g, b].some(x => x < 0 || x > 255)) return null;
  return { r, g, b };
}

function parseHsl(str: string): { h: number; s: number; l: number } | null {
  // Accepts only numbers and commas, e.g. 0,100,50
  const match = str.match(/^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*$/);
  if (!match) return null;
  const h = Number(match[1]), s = Number(match[2]), l = Number(match[3]);
  if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) return null;
  return { h, s, l };
}

export default function ColorConverterClient() {
  const [hex, setHex] = useState("");
  const [rgb, setRgb] = useState<[string, string, string]>(["", "", ""]);
  const [hsl, setHsl] = useState<[string, string, string]>(["", "", ""]);
  const [active, setActive] = useState<"hex" | "rgb" | "hsl">("hex");
  const [error, setError] = useState("");
  const [converted, setConverted] = useState<{ hex: string; rgb: string; hsl: string }>({ hex: "", rgb: "", hsl: "" });
  const [copied, setCopied] = useState<{ hex: boolean; rgb: boolean; hsl: boolean }>({ hex: false, rgb: false, hsl: false });

  function handleConvert() {
    setError("");
    setCopied({ hex: false, rgb: false, hsl: false });
    let rgbObj: { r: number; g: number; b: number } | null = null;
    let hslObj: { h: number; s: number; l: number } | null = null;
    let hexVal = "";
    if (active === "hex") {
      rgbObj = hexToRgb(hex.trim());
      if (!rgbObj) {
        setError("Invalid HEX format. Example: ff0000");
        return;
      }
      hexVal = rgbToHex(rgbObj.r, rgbObj.g, rgbObj.b);
      hslObj = rgbToHsl(rgbObj.r, rgbObj.g, rgbObj.b);
    } else if (active === "rgb") {
      const [r, g, b] = rgb.map(x => Number(x));
      if ([r, g, b].some(x => isNaN(x) || x < 0 || x > 255)) {
        setError("RGB values must be 0-255");
        return;
      }
      rgbObj = { r, g, b };
      hexVal = rgbToHex(r, g, b);
      hslObj = rgbToHsl(r, g, b);
    } else if (active === "hsl") {
      const [h, s, l] = hsl.map(x => Number(x));
      if (
        isNaN(h) || isNaN(s) || isNaN(l) ||
        h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100
      ) {
        setError("HSL values: H 0-360, S/L 0-100");
        return;
      }
      hslObj = { h, s, l };
      rgbObj = hslToRgb(h, s, l);
      hexVal = rgbToHex(rgbObj.r, rgbObj.g, rgbObj.b);
    }
    setConverted({
      hex: hexVal,
      rgb: `rgb(${rgbObj!.r}, ${rgbObj!.g}, ${rgbObj!.b})`,
      hsl: `hsl(${hslObj!.h}, ${hslObj!.s}%, ${hslObj!.l}%)`,
    });
  }

  function handleClear() {
    setHex("");
    setRgb(["", "", ""]);
    setHsl(["", "", ""]);
    setConverted({ hex: "", rgb: "", hsl: "" });
    setError("");
    setCopied({ hex: false, rgb: false, hsl: false });
  }

  function handleCopy(type: "hex" | "rgb" | "hsl") {
    if (converted[type]) {
      navigator.clipboard.writeText(converted[type]);
      setCopied(c => ({ ...c, [type]: true }));
      setTimeout(() => setCopied(c => ({ ...c, [type]: false })), 1200);
    }
  }

  // Color preview
  const previewColor = converted.hex || hex || "#ffffff";

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* HEX */}
        <div className="flex flex-col gap-2">
          <label htmlFor="color-hex" className="font-semibold text-slate-800 dark:text-slate-100">HEX</label>
          <input
            id="color-hex"
            type="text"
            value={hex}
            maxLength={6}
            onChange={e => {
              let v = e.target.value.replace(/[^a-fA-F0-9]/g, "");
              if (v.length > 6) v = v.slice(0, 6);
              setHex(v);
              setActive("hex");
            }}
            className={`w-full p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none ${active === "hex" ? "ring-2 ring-sky-400" : ""}`}
            placeholder="ff0000"
            autoComplete="off"
          />
        </div>
        {/* RGB */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-slate-800 dark:text-slate-100">RGB</label>
          <div className="flex gap-2">
            {[0, 1, 2].map(i => (
              <input
                key={i}
                type="number"
                min={0}
                max={255}
                value={rgb[i]}
                onChange={e => {
                  const v = e.target.value.replace(/[^0-9]/g, "");
                  setRgb(r => r.map((x, idx) => idx === i ? v : x) as [string, string, string]);
                  setActive("rgb");
                }}
                className={`w-16 p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none text-center ${active === "rgb" ? "ring-2 ring-sky-400" : ""}`}
                placeholder={["R", "G", "B"][i]}
                autoComplete="off"
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Exemplo: 255, 0, 0</span>
        </div>
        {/* HSL */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-slate-800 dark:text-slate-100">HSL</label>
          <div className="flex gap-2">
            {[0, 1, 2].map(i => (
              <input
                key={i}
                type="number"
                min={i === 0 ? 0 : 0}
                max={i === 0 ? 360 : 100}
                value={hsl[i]}
                onChange={e => {
                  const v = e.target.value.replace(/[^0-9]/g, "");
                  setHsl(h => h.map((x, idx) => idx === i ? v : x) as [string, string, string]);
                  setActive("hsl");
                }}
                className={`w-16 p-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-base text-slate-900 dark:text-slate-100 focus:outline-none text-center ${active === "hsl" ? "ring-2 ring-sky-400" : ""}`}
                placeholder={["H", "S", "L"][i]}
                autoComplete="off"
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Exemplo: 0, 100, 50</span>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mt-2">
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 transition" onClick={handleConvert}>Convert</button>
        <button type="button" className="px-5 py-2 rounded-lg font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 transition" onClick={handleClear}>Clear</button>
      </div>
      {/* Results */}
      <div>
        <label className="block font-semibold mb-2 text-slate-800 dark:text-slate-100">Converted Values</label>
        {error && <div className="mb-2 text-red-600 dark:text-red-400 font-medium">{error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-base bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700">{converted.hex}</span>
            <button type="button" className={`px-3 py-1 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${!converted.hex ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleCopy("hex")} disabled={!converted.hex}>{copied.hex ? "Copied!" : "Copy"}</button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-base bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700">{converted.rgb}</span>
            <button type="button" className={`px-3 py-1 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${!converted.rgb ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleCopy("rgb")} disabled={!converted.rgb}>{copied.rgb ? "Copied!" : "Copy"}</button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-base bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-700">{converted.hsl}</span>
            <button type="button" className={`px-3 py-1 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${!converted.hsl ? "opacity-50 cursor-not-allowed" : ""}`} onClick={() => handleCopy("hsl")} disabled={!converted.hsl}>{copied.hsl ? "Copied!" : "Copy"}</button>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <span className="font-semibold text-slate-800 dark:text-slate-100">Color Preview:</span>
          <span className="inline-block w-16 h-16 rounded-lg border-2 border-slate-200 dark:border-slate-700" style={{ background: previewColor }} />
        </div>
      </div>
    </div>
  );
}
