"use client";
import { useTranslation } from "react-i18next";
import "../../utils/i18n";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <main className="min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow p-6 sm:p-10 border border-slate-100 dark:border-slate-800">
        <h1 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">{t('contactTitle')}</h1>
        <p className="mb-4 text-slate-700 dark:text-slate-300">{t('contactIntro')}</p>
        <h2 className="text-xl font-semibold mt-6 mb-2">{t('contactAboutTitle')}</h2>
        <p className="mb-2 text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: t('contactAboutText') }} />
        <h2 className="text-xl font-semibold mt-6 mb-2">{t('contactIssuesTitle')}</h2>
        <p className="mb-4 text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: t('contactIssuesText') }} />
        <p className="text-xs text-slate-500 mt-8">{t('contactFooter')}</p>
      </div>
    </main>
  );
}
