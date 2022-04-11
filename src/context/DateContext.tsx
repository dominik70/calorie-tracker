import React, { useContext, createContext, useState, useMemo } from 'react';

interface IContext {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DateContext = createContext<IContext | null>(null);
export const useDate = () => {
  const context = useContext(DateContext);

  if (context === null) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState<Date>(new Date());

  const value = useMemo(() => ({ date, setDate }), [date]);

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
