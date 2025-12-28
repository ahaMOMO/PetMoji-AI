"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"
import { translations, type Language } from "./translations"

type TranslationValue = string | { [key: string]: TranslationValue }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language
    if (stored && translations[stored]) {
      setLanguageState(stored)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }, [])

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".")
      let value: TranslationValue = translations[language]

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k as keyof typeof value]
        } else {
          return key
        }
      }

      return typeof value === "string" ? value : key
    },
    [language],
  )

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
