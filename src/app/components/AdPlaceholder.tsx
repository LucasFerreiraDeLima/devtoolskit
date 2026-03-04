export default function AdPlaceholder() {
  return (
    <div
      role="complementary"
      aria-label="Advertisement placeholder"
      className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
    >
      <strong>Advertisement</strong>
      <div className="mt-2 text-xs">Ad space reserved for Google AdSense</div>
    </div>
  );
}
