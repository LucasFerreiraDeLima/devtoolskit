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
    <article className="mx-auto w-full max-w-screen-lg px-2 md:px-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {description ? (
          <p className="mt-1 text-slate-600 dark:text-slate-300">{description}</p>
        ) : null}
      </header>

      <section className="flex flex-col gap-6">
        <div className="w-full">{children}</div>
      </section>
    </article>
  );
}
