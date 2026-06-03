"use client";

import { useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en";
import esMessages from "@/locales/es";

const messages = {
  en: enMessages,
  es: esMessages,
};

export default function I18nProvider({ children, initialLocale = "en" }) {
  const [locale, setLocale] = useState(initialLocale);
  const localeMessages = useMemo(() => messages[locale] ?? messages.en, [locale]);

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={localeMessages} textComponent="span">
      {children}
      <div className="fixed bottom-4 right-4 z-50 rounded-2xl border border-zinc-200 bg-white p-3 shadow-lg shadow-black/5 dark:border-zinc-700 dark:bg-zinc-950">
        <label className="mr-2 font-medium text-zinc-700 dark:text-zinc-200">Language</label>
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value)}
          className="rounded border border-zinc-300 bg-white px-2 py-1 text-sm text-zinc-900 outline-none transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </IntlProvider>
  );
}
