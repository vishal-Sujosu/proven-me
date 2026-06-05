"use client";

import { useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "@/locales/en";
import esMessages from "@/locales/es";
import { useProvenMeTheme } from "@/styles/theme/ThemeProvider";

const messages = {
  en: enMessages,
  es: esMessages,
};

const controlSelectClass =
  "rounded-pm-sm border border-pm-l2 bg-pm-s2 px-2 py-1 text-sm font-semibold text-pm-t1 outline-none transition-all duration-150 focus:border-pm-accent focus:ring-2 focus:ring-pm-accent-glow hover:border-pm-l3";

export default function I18nProvider({ children, initialLocale = "en" }) {
  const [locale, setLocale] = useState(initialLocale);
  const localeMessages = useMemo(() => messages[locale] ?? messages.en, [locale]);

  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={localeMessages} textComponent="span">
      {children}
      <ControlsWidget locale={locale} setLocale={setLocale} />
    </IntlProvider>
  );
}

// Separate component so useProvenMeTheme() is called inside the tree
// (ProvenMeProvider must be a parent of I18nProvider in your layout)
function ControlsWidget({ locale, setLocale }) {
  const { theme, setTheme } = useProvenMeTheme();

  return (
    /*
     * .surface     → bg-pm-s1 + border-pm-l2 + rounded-pm-2xl   (combined utility)
     * shadow-pm    → var(--sh)  themed shadow
     * gap-x-3      → separates language from theme controls
     * After the divider, theme toggle follows the exact same markup
     * pattern as the language select — label + <select>
     */
    <div className="surface shadow-pm fixed bottom-4 right-4 z-50 flex items-center gap-x-3 px-4 py-2.5">

      {/* ── LANGUAGE ─────────────────────────────────────── */}
      <label className="text-sm font-semibold text-pm-t2">
        Language
      </label>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className={controlSelectClass}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>

      {/* ── DIVIDER — vertical 1px line using --l2 ────────── */}
      <div className="h-5 w-px bg-pm-l2" />

      {/* ── THEME ─────────────────────────────────────────── */}
      <label className="text-sm font-semibold text-pm-t2">
        Theme
      </label>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className={controlSelectClass}
      >
        <option value="dark">🌙 Dark</option>
        <option value="light">☀️ Light</option>
      </select>

    </div>
  );
}
