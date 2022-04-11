import { useEffect, useRef, useState } from 'react';
import { Nutrients } from '../../atoms/Nutrients/Nutrients';
import { NutrientsGoal, MealCardFood, Nutrient } from '../../../types';
import { getExceededNutrients, sumNutrients } from '../../../utils/helpers';
import { toast } from 'react-toastify';

interface Props {
  foodList: MealCardFood[];
  dailyGoal?: NutrientsGoal | null;
  hasShortNames?: boolean;
}

export const NutrientsSum = ({ foodList, dailyGoal = null, hasShortNames = true }: Props) => {
  const [sum, setSum] = useState<Nutrient[]>([]);
  const toastRef = useRef<any>(null);

  useEffect(() => {
    const newSum = sumNutrients(foodList);
    setSum(newSum as Nutrient[]);
  }, [foodList]);

  useEffect(() => {
    if (dailyGoal) {
      const exceededNutrients = getExceededNutrients(sum, dailyGoal);

      if (exceededNutrients.length > 0) {
        toast.dismiss(toastRef.current);
        toastRef.current = toast.info(`you exceeded your ${exceededNutrients.join(', ')} daily goal`);
      }
    }
  }, [sum, dailyGoal]);

  return <Nutrients nutrients={sum} hasShortNames={hasShortNames} dailyGoal={dailyGoal} />;
};
