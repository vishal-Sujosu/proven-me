// components/ThemeToggle.jsx — dropdown style, mirrors language toggler
'use client'

import { useProvenMeTheme } from '@/components/ProvenMeProvider'

const THEMES = [
  { value: 'dark',  label: 'Dark',  icon: '🌙' },
  { value: 'light', label: 'Light', icon: '☀️' },
]

const ACCENTS = [
  { value: 'violet', label: 'Violet' },
  { value: 'blue',   label: 'Blue'   },
  { value: 'teal',   label: 'Teal'   },
  { value: 'amber',  label: 'Amber'  },
]

const selectClass =
  'rounded-pm-sm border border-pm-l2 bg-pm-s2 px-3 py-1.5 text-sm font-semibold text-pm-t2 outline-none transition-all duration-150 focus:border-pm-accent focus:ring-2 focus:ring-pm-accent-glow hover:border-pm-l3 hover:text-pm-t1'

export default function ThemeToggle() {
  const { theme, setTheme, accent, setAccent } = useProvenMeTheme()

  return (
    <div className="flex items-center gap-2">

      {/* Theme select — same pattern as your locale <select> */}
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className={selectClass}
      >
        {THEMES.map((t) => (
          <option key={t.value} value={t.value}>
            {t.icon} {t.label}
          </option>
        ))}
      </select>

      {/* Accent select — optional, same pattern */}
      <select
        value={accent}
        onChange={(e) => setAccent(e.target.value)}
        className={selectClass}
      >
        {ACCENTS.map((a) => (
          <option key={a.value} value={a.value}>
            {a.label}
          </option>
        ))}
      </select>

    </div>
  )
}
