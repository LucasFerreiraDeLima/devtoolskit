"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../utils/i18n";

export default function FooterMenu() {
  const { t } = useTranslation();
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <div>&copy; {new Date().getFullYear()} DevTools Kit. {t('allRightsReserved')}</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline" tabIndex={0} aria-label={t('privacyPolicy')}>
              {t('privacyPolicy')}
            </Link>
            <Link href="/contact" className="hover:underline" tabIndex={0} aria-label={t('contactAbout')}>
              {t('contactAbout')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
