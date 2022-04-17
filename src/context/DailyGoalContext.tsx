import React, { useContext, createContext, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from './AuthContext';
import { NutrientsGoal } from '../types';
import { db } from '../lib/firebase';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';

interface IContext {
  dailyGoal: NutrientsGoal | null;
  setDailyGoal: React.Dispatch<React.SetStateAction<NutrientsGoal | null>>;
  updateDailyGoal: (data: NutrientsGoal) => void;
  deleteDailyGoal: () => void;
}

const DailyGoalContext = createContext<IContext | null>(null);
export const useDailyGoal = () => {
  const context = useContext(DailyGoalContext);

  if (context === null) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};

export const DailyGoalProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [dailyGoal, setDailyGoal] = useState<NutrientsGoal | null>(null);

  useEffect(() => {
    const getProfiles = async () => {
      if (user) {
        const profileRef = doc(db, 'profiles', user.uid);

        try {
          const profile = await getDoc(profileRef);
          setDailyGoal(profile.data() as NutrientsGoal);
        } catch {
          toast.error('failed to fetch your data');
        }
      }
    };

    getProfiles();
  }, [user]);

  const updateDailyGoal = async (data: NutrientsGoal) => {
    if (user) {
      const profileRef = doc(db, 'profiles', user.uid);

      await setDoc(profileRef, data);
      setDailyGoal(data);
      toast.success('successfully saved your data', { toastId: 'daily-goal' });
    } else {
      toast.error('log in to save your daily goal');
    }
  };

  const deleteDailyGoal = async () => {
    if (user) {
      const profileRef = doc(db, 'profiles', user.uid);

      try {
        await deleteDoc(profileRef);
        setDailyGoal(null);
        toast.success('successfully deleted your data', { toastId: 'successfully-deleted' });
      } catch {
        toast.error('failed to delete your data');
      }
    }
  };

  const value = useMemo(() => ({ dailyGoal, setDailyGoal, updateDailyGoal, deleteDailyGoal }), [dailyGoal]);

  return <DailyGoalContext.Provider value={value}>{children}</DailyGoalContext.Provider>;
};
