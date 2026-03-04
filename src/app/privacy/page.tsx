export default function PrivacyPage() {
  return (
    <main className="min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow p-6 sm:p-10 border border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          Your privacy is important to us. DevTools Kit is designed to respect your data and your trust.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. No personal data collection</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          We do <strong>not</strong> collect, store, or share any personal information. All tools run directly in your browser, and your input is never sent to our servers.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Cookies and analytics</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          We do not use cookies or analytics scripts to track your activity. Your usage of the tools is private and anonymous.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-party ads</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300">
          In the future, we may display third-party ads (such as Google AdSense) to support the project. These ads may use cookies or tracking technologies as described in their own privacy policies. We will always provide clear notice if this is implemented.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact</h2>
        <p className="mb-2 text-slate-700 dark:text-slate-300">
          If you have any questions about this privacy policy, please contact us at <a href="mailto:contact@devtoolskit.com" className="text-sky-600 dark:text-sky-400 underline">contact@devtoolskit.com</a>.
        </p>
        <p className="text-xs text-slate-500 mt-8">This policy may be updated from time to time. Last updated: March 2026.</p>
      </div>
    </main>
  );
}
