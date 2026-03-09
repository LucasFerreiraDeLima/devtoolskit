import React from "react";
import AdPlaceholder from "./AdPlaceholder";

import Link from "next/link";

export default function ToolLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-screen-lg px-2 sm:px-4 md:px-6 py-4 sm:py-6" aria-labelledby="tool-title">
      <header className="mb-6 flex items-center gap-3">
        <Link href="/" aria-label="Back to menu" className="mr-2 group">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-sky-100 dark:hover:bg-sky-900 transition">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-slate-700 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </span>
        </Link>
        <div>
          <h1 id="tool-title" className="text-2xl sm:text-3xl font-semibold" tabIndex={0} aria-label={title}>{title}</h1>
          {description ? (
            <p className="mt-1 text-slate-600 dark:text-slate-300" aria-label={description}>{description}</p>
          ) : null}
        </div>
      </header>

      <section className="flex flex-col gap-6 w-full" role="region" aria-label={title + ' tool area'}>
        <div className="w-full">{children}</div>
      </section>
    </article>
  );
}
