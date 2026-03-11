"use client";
import { useTranslation } from "react-i18next";
import "../../../utils/i18n";

export default function JWTDecoderInfo() {
  const { t } = useTranslation();
  return (
    <section className="space-y-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 sm:p-10 border border-slate-100 dark:border-slate-800 mb-8">
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jwt_whatIsTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("jwt_whatIsDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jwt_structureTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("jwt_structureDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jwt_authTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("jwt_authDesc")}</p>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jwt_commonUsesTitle")}</h2>
        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
          <li>{t("jwt_use1")}</li>
          <li>{t("jwt_use2")}</li>
          <li>{t("jwt_use3")}</li>
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-bold mb-2">{t("jwt_howToDecodeTitle")}</h2>
        <p className="text-slate-700 dark:text-slate-300">{t("jwt_howToDecodeDesc")}</p>
      </article>
    </section>
  );
}
