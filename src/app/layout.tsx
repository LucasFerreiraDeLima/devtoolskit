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
  title: "DevTools Kit - Free Online Utilities",
  description:
    "Collection of small developer utilities: word counter, converters and quick tools to boost productivity.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "DevTools Kit - Free Online Utilities",
    description:
      "Fast, accessible and SEO-optimized developer tools including a word counter, converters, and more.",
    url: "https://example.com",
    siteName: "DevTools Kit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100`}
      >
        {/* Placeholder for future AdSense script - add real script here in production */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" /> */}

        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-30 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-sm">
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
              <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white text-center w-full sm:w-auto">
                DevTools Kit
              </Link>
              <nav aria-label="Main navigation" className="w-full sm:w-auto flex justify-center sm:justify-end">
                <ul className="flex gap-6 text-base font-medium text-slate-700 dark:text-slate-200">
                  <li>
                    <Link href="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                      Home
                    </Link>
                  </li>
                  <DropdownMenu />
                </ul>
              </nav>
            </div>
          </header>

          <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-8">{children}</main>

          <footer className="border-t">
            <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>© {new Date().getFullYear()} DevTools Kit. All rights reserved.</div>
                <div>
                  <Link href="/privacy" className="hover:underline">
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
