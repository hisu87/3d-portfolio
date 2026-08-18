import React, { createContext, useState, useContext } from 'react';
import { vi } from '../locales/vi';
import { en } from '../locales/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('vi');

  const t = (key) => {
    const keys = key.split('.');
    let value = language === 'vi' ? vi : en;
    for (const k of keys) {
      if (value === undefined || value[k] === undefined) return key;
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
