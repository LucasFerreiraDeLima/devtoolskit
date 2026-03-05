import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import DropdownMenu from "./components/DropdownMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevTools Kit – Free Online Developer Tools, Text Utilities & Converters",
  description:
    "Boost your productivity with DevTools Kit: free online developer tools, text utilities, word counter, case converter, Base64, JSON, CSV, hash generator, color converter, and more. Fast, privacy-friendly, SEO-optimized.",
  keywords: [
    "developer tools",
    "online tools",
    "text utilities",
    "word counter",
    "case converter",
    "base64 encoder",
    "json formatter",
    "csv converter",
    "hash generator",
    "color converter",
    "random string",
    "password generator",
    "regex tester",
    "jwt decoder",
    "timestamp converter",
    "remove duplicate lines",
    "free tools",
    "SEO tools"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DevTools Kit – Free Online Developer Tools, Text Utilities & Converters",
    description:
      "Boost your productivity with free online developer tools: word counter, converters, hash generator, color converter, and more. Fast, privacy-friendly, SEO-optimized.",
    url: "https://example.com",
    siteName: "DevTools Kit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevTools Kit – Free Online Developer Tools"
      }
    ],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@devtoolskit",
    title: "DevTools Kit – Free Online Developer Tools, Text Utilities & Converters",
    description: "Boost your productivity with free online developer tools: word counter, converters, hash generator, color converter, and more. Fast, privacy-friendly, SEO-optimized.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://example.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0, viewport-fit=cover" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="author" content="DevTools Kit" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="DevTools Kit" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://example.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devtoolskit" />
        <meta name="twitter:title" content="DevTools Kit - Free Online Utilities" />
        <meta name="twitter:description" content="Fast, accessible and SEO-optimized developer tools including a word counter, converters, and more." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://example.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100`}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* Placeholder for future AdSense script - add real script here in production */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" /> */}

        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-30 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-sm">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
              <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center w-full sm:w-auto" tabIndex={0} aria-label="DevTools Kit Home">
                DevTools Kit
              </Link>
              <nav aria-label="Main navigation" className="w-full sm:w-auto flex justify-center sm:justify-end">
                <ul className="flex gap-6 text-base font-medium text-slate-700 dark:text-slate-200">
                  <li>
                    <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors" tabIndex={0} aria-label="Home">
                      Home
                    </Link>
                  </li>
                  <DropdownMenu />
                </ul>
              </nav>
            </div>
          </header>

          <main className="flex-1 mx-auto w-full max-w-5xl px-2 sm:px-4 py-6 sm:py-8" role="main">{children}</main>

          <footer className="border-t">
            <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>&copy; {new Date().getFullYear()} DevTools Kit. All rights reserved.</div>
                <div>
                  <Link href="/privacy" className="hover:underline" tabIndex={0} aria-label="Privacy Policy">
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
