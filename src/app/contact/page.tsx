export default function ContactPage() {
  return (
    <main className="min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow p-6 sm:p-10 border border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Contact & About</h1>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Built for speed, SEO, and privacy. More tools coming soon.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">About the Developer</h2>
        <p className="mb-2 text-slate-700 dark:text-slate-300">
          Website developed by <a href="https://www.linkedin.com/in/lucas-lima-2b929119a" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">Lucas Lima</a>, a brazilian full-stack developer that loves creating efficient and user-friendly web applications.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Contact for Issues</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Found a bug or have a question? Contact me: <a href="mailto:lucsecundario1978@gmail.com" className="hover:underline text-sky-600">lucsecundario1978@gmail.com</a>
        </p>
        <p className="text-xs text-slate-500 mt-8">This page may be updated from time to time. Last updated: March 2026.</p>
      </div>
    </main>
  );
}
