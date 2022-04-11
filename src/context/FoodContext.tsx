import React, { useContext, createContext, useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { compareDays, getStringDate } from '../utils/helpers';
import { useAuth } from './AuthContext';
import { MealCardFood } from '../types';
import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useDate } from './DateContext';

interface Context {
  foodList: MealCardFood[];
  addFood: (food: MealCardFood, date: Date, onFinally: () => void) => void;
  deleteFood: (id: string) => void;
  updateFood: (id: string, quantity: number, onFinally: () => void) => void;
  deleteAllFood: () => void;
  isLoading: boolean;
}

const FoodContext = createContext<Context | null>(null);

export const useFood = () => {
  const context = useContext(FoodContext);

  if (context === null) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
};

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const { date } = useDate();
  const [foodList, setFoodList] = useState<MealCardFood[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getFoodList = async () => {
      if (user) {
        setIsLoading(true);

        const userHistory = doc(db, 'diet-history', user.uid);

        try {
          const q = query(collection(userHistory, getStringDate(date)), orderBy('createdAt'));
          const food = await getDocs(q);

          setFoodList(food.docs.map((doc) => doc.data()) as MealCardFood[]);
        } catch {
          toast.error('failed to fetch your food list');
        } finally {
          setIsLoading(false);
        }
      }
    };

    getFoodList();
  }, [date, user]);

  const addFood = async (food: MealCardFood, inputDate: Date, onFinally: () => void) => {
    if (user) {
      const userHistory = doc(db, 'diet-history', user.uid);

      try {
        await setDoc(doc(collection(userHistory, getStringDate(inputDate)), food.id), food);

        if (compareDays(date, inputDate)) {
          setFoodList((prevState) => {
            return [...prevState.filter((foodItem) => foodItem.id !== food.id), food];
          });
        }

        toast.success('food successfully added. Go to diet history to check your calories intake.', {
          toastId: 'set-success',
        });
      } catch {
        toast.error('failed to add food');
      } finally {
        onFinally();
      }
    } else {
      toast.info('you must log in to save your diet history', { toastId: 'login-info' });
      onFinally();
    }
  };

  const deleteFood = async (id: string) => {
    if (user) {
      const userHistory = doc(db, 'diet-history', user.uid);

      try {
        await deleteDoc(doc(collection(userHistory, getStringDate(date)), id));
        toast.success('food successfully deleted ', { toastId: 'delete-success' });
        setFoodList((prevState) => prevState.filter((foodItem) => foodItem.id !== id));
      } catch {
        toast.error('failed to delete food');
      }
    } else {
      toast.error('you are not authenticated');
    }
  };

  const updateFood = async (id: string, quantity: number, onFinally: () => void) => {
    if (user) {
      const userHistory = doc(db, 'diet-history', user.uid);

      try {
        await updateDoc(doc(collection(userHistory, getStringDate(date)), id), { quantity });

        setFoodList((prevState) => prevState.map((foodItem) => (foodItem.id === id ? { ...foodItem, quantity } : foodItem)));
        toast.success('food successfully updated', { toastId: 'set-success' });
      } catch {
        toast.error('failed to update food');
      } finally {
        onFinally();
      }
    } else {
      toast.error('you are not authenticated');
    }
  };

  const deleteAllFood = async () => {
    if (user) {
      setIsLoading(true);

      const userHistory = doc(db, 'diet-history', user.uid);

      try {
        const food = await getDocs(collection(userHistory, getStringDate(date)));
        food.docs.map((doc) => deleteDoc(doc.ref));

        setFoodList([]);
        toast.success('successfully deleted food', { toastId: 'set-success' });
      } catch {
        toast.error('failed to delete food');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const value = useMemo(() => ({ foodList, isLoading, addFood, updateFood, deleteFood, deleteAllFood }), [foodList, isLoading]);

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
