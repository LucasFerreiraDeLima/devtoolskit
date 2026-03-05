import React from "react";
import AdPlaceholder from "./AdPlaceholder";

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
      <header className="mb-6">
        <h1 id="tool-title" className="text-2xl sm:text-3xl font-semibold" tabIndex={0} aria-label={title}>{title}</h1>
        {description ? (
          <p className="mt-1 text-slate-600 dark:text-slate-300" aria-label={description}>{description}</p>
        ) : null}
      </header>

      <section className="flex flex-col gap-6 w-full" role="region" aria-label={title + ' tool area'}>
        <div className="w-full">{children}</div>
      </section>
    </article>
  );
}
