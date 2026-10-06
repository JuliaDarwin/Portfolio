"use client";

import React, {
  createContext,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  type Language,
  type Translations,
  TRANSLATIONS,
} from "@/data/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio_language";

const listeners = new Set<() => void>();
let currentLanguage: Language = "en";
let initialized = false;

function isValidLanguage(val: unknown): val is Language {
  return val === "en" || val === "es" || val === "ca";
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (isValidLanguage(urlLang)) {
      return urlLang;
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (isValidLanguage(saved)) {
      return saved;
    }
  } catch {
    // ignore
  }
  return "en";
}

function ensureInitialized() {
  if (!initialized && typeof window !== "undefined") {
    currentLanguage = getInitialLanguage();
    document.documentElement.lang = currentLanguage;
    initialized = true;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    (callback) => {
      ensureInitialized();
      listeners.add(callback);

      const onStorage = () => {
        try {
          const saved = localStorage.getItem(STORAGE_KEY);
          if (isValidLanguage(saved) && saved !== currentLanguage) {
            currentLanguage = saved;
            document.documentElement.lang = saved;
            callback();
          }
        } catch {
          // ignore
        }
      };

      window.addEventListener("storage", onStorage);
      return () => {
        listeners.delete(callback);
        window.removeEventListener("storage", onStorage);
      };
    },
    (): Language => {
      ensureInitialized();
      return currentLanguage;
    },
    (): Language => "en"
  );

  const setLanguage = (lang: Language) => {
    if (currentLanguage !== lang) {
      currentLanguage = lang;
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch {
          // ignore
        }
        document.documentElement.lang = lang;
      }
      listeners.forEach((listener) => listener());
    }
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
