'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ProvenMeContext = createContext(null)

export function ProvenMeProvider({ children }) {
  const [theme,   setThemeState]   = useState('dark')
  const [accent,  setAccentState]  = useState('violet')
  const [density, setDensityState] = useState('comfortable')

  useEffect(() => {
    const t = localStorage.getItem('pm-theme')   || 'dark'
    const a = localStorage.getItem('pm-accent')  || 'violet'
    const d = localStorage.getItem('pm-density') || 'comfortable'
    applyAll(t, a, d)
  }, [])

  function applyAll(t, a, d) {
    document.documentElement.dataset.theme   = t
    document.documentElement.dataset.accent  = a
    document.documentElement.dataset.density = d
    setThemeState(t)
    setAccentState(a)
    setDensityState(d)
  }

  function setTheme(t)   { localStorage.setItem('pm-theme', t);   applyAll(t, accent,  density) }
  function setAccent(a)  { localStorage.setItem('pm-accent', a);  applyAll(theme, a,   density) }
  function setDensity(d) { localStorage.setItem('pm-density', d); applyAll(theme, accent, d) }

  return (
    <ProvenMeContext.Provider value={{ theme, accent, density, setTheme, setAccent, setDensity }}>
      {children}
    </ProvenMeContext.Provider>
  )
}

export function useProvenMeTheme() {
  const ctx = useContext(ProvenMeContext)
  if (!ctx) throw new Error('useProvenMeTheme must be used inside ProvenMeProvider')
  return ctx
}
